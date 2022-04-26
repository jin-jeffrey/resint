import firebaseAdminConfig from './firebaseConfig.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initializeApp, cert }  from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";
import { body, validationResult} from 'express-validator';
import commonWords from './words.js';

// initialize app with express, cors, and env variables
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to firebase 
initializeApp({
    credential: cert(firebaseAdminConfig)
})
const db = getFirestore();

// ROUTES
// get apps by user
app.post('/getApps', 
    body('Uid').isLength({
        min: 1
    }),
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }
        const appsRef = db.collection('apps');
        const queryRef = await appsRef.where('Uid', '==', req.body.Uid).get();
        const appsList = [];
        queryRef.forEach(doc => {
            let temp = doc.data();
            temp['did'] = doc.id;
            appsList.push(temp);
        });
        res.status(200).send(appsList);
    } catch (e) {
        res.status(400).send("Failed to retrieve application data");
    }
});

// add new app
app.post('/addApp', 
    body('CompanyName').not().isEmpty(),
    body('JobTitle').not().isEmpty(),
    body('Uid').not().isEmpty(),
    body('Status').not().isEmpty(),
    async (req, res) => {
    console.log(req.body)
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }
        const docRef = await db.collection('apps').add({
            CompanyName: req.body.CompanyName,
            JobTitle: req.body.JobTitle,
            CompanyDescription: req.body.CompanyDescription,
            Date: req.body.Date,
            Uid: req.body.Uid,
            JobLocation: req.body.JobLocation,
            Notes: req.body.Notes,
            Link: req.body.Link,
            Status: req.body.Status
        });
        res.status(200).send("Document written with ID: " + docRef.id);
    } catch (e) {
        console.log(e);
        res.status(400).send("Failed to add document");
    }      
});

// delete app
app.post('/deleteApp',
    body('did').not().isEmpty(),
    body('Uid').not().isEmpty(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                })
            }
            // check if document id matches user id
            const docRef = await db.collection('apps').doc(req.body.did).get();
            const docData = docRef.data();
            if (docData.Uid == req.body.Uid) {
                // delete
                await db.collection('apps').doc(req.body.did).delete();
                return res.status(200).json({
                    success: true
                })
            }
            res.status(400).send("This document does not belong to you");
        } catch (e) {
            console.log(e);
        }
    }
)

app.post('/updateApp',
    body('did').not().isEmpty(),
    body('Uid').not().isEmpty(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                })
            }
            // check if document id matches id passed in as param
            const docRef = db.collection('apps').doc(req.body.did);
            const docInfo = await docRef.get();
            const docData = docInfo.data();
            if (docData.Uid = req.body.Uid) {
                // edit
                const result = await docRef.set(req.body.values)
                return res.status(200).json({
                    success: true
                })
            } else {
                return res.status(400).send("This document does not belong to you");
            }
        } catch (e) {
            console.log(e);
        }
    }
)

app.post('/getCode', 
    body('Uid').isLength({
        min: 1
    }),
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }
        // check if user has a 16 word string, if not then create it
        const usersRef = db.collection('users');
        const snapshot = await usersRef.where('Uid', '==', req.body.Uid).get();
        const user = snapshot.docs[0];
        if (snapshot.empty) {
            res.status(400).send("Uid does not exist");
        } else {
            var key = user.data().key;
            if (key == null) {
                var securityCode = commonWords['words'][Math.floor(Math.random()*100)];
                for (let i = 0; i<15; i++) {
                    securityCode += " " + commonWords['words'][Math.floor(Math.random()*100)];
                }
                var data = user.data();
                data["key"] = securityCode;
                const userRef = usersRef.doc(user.id);
                const result = await userRef.set(data);
                return res.status(200).json({
                    success: true,
                    key: securityCode
                })
            } else {
                return res.status(200).json({
                    success: true,
                    key: key
                })
            }
        }
    } catch (e) {
        console.log(e);
        res.status(400).send("Failed to retrieve application data");
    }
});

app.post('/getUid', 
    body('key').isLength({
        min: 1
    }),
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }
        // check if user has a 16 word string, if not then create it
        const usersRef = db.collection('users');
        const snapshot = await usersRef.where('key', '==', req.body.key).get();
        const user = snapshot.docs[0];
        if (snapshot.empty) {
            console.log('did not');
            res.status(400).send("Key does not exist");
        } else {
            console.log('got Uid');
            return res.status(200).json({
                success: true,
                Uid: user.data().Uid
            })
        }
    } catch (e) {
        console.log(e);
        res.status(400).send("Failed to retrieve application data");
    }
});

app.listen(process.env.PORT, () =>
    console.log(`Resint backend listening on ${process.env.PORT}`),
);