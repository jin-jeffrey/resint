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
    body('uid').isLength({
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
        const queryRef = await appsRef.where('Uid', '==', req.body.uid).get();
        const appsList = [];
        queryRef.forEach(doc => {
            appsList.push(doc.data());
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
    body('document_id').not().isEmpty(),
    body('uid').not().isEmpty(),
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
            const docRef = await db.collection('apps').doc(req.body.document_id).get();
            const docData = docRef.data();
            if (docData.uid == req.body.uid) {
                // delete
                await db.collection('apps').doc(req.body.document_id).delete();
                return res.status(200).json({
                    success: true
                })
            }
            console.log(docRef.data());
        } catch (e) {
            console.log(e);
        }
    }
)

app.get('/updateApp/:appId',
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
            const docRef = await db.collection('apps').get();
            const appId = req.params.appId;

            for (let doc of docRef.docs) {
                if (doc.id === appId) {
                    console.log(doc.id, appId, doc, 'found it')
                }
            }

            // if (docData.uid == req.body.uid) {
            //     // delete
            //     await db.collection('apps').doc(req.body.document_id).delete();
            //     return res.status(200).json({
            //         success: true
            //     })
            // }
            // console.log(docRef, docData, req.params);
            // console.log(docRef.data());
        } catch (e) {
            console.log(e);
        }
    }
)

app.get('/getCode', 
    body('uid').isLength({
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
        const snapshot = await usersRef.where('uid', '==', req.body.uid).get();
        const user = snapshot.docs[0];
        if (snapshot.empty) {
            res.status(400).send("UID does not exist");
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

app.post('/getUID', 
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
            console.log('got uid');
            return res.status(200).json({
                success: true,
                uid: user.data().uid
            })
        }
    } catch (e) {
        console.log(e);
        res.status(400).send("Failed to retrieve application data");
    }
});

app.listen(3001, () =>
    console.log(`Resint backend listening on ${3001}`),
);