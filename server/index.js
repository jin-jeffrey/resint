import firebaseAdminConfig from './firebaseConfig.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initializeApp, cert }  from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";
import { body, validationResult} from 'express-validator';

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
app.get('/getApps', 
    body('user_id').isLength({
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
        const queryRef = await appsRef.where('user_id', '==', req.body.user_id).get();
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
    body('company').not().isEmpty(),
    body('position').not().isEmpty(),
    body('user_id').not().isEmpty(),
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
            company: req.body.company,
            position: req.body.position,
            description: req.body.description,
            date_submitted: req.body.date_submitted,
            user_id: req.body.user_id
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
    body('user_id').not().isEmpty(),
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
            const docData = await docRef.data();
            if (docData.user_id == req.body.user_id) {
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

            // if (docData.user_id == req.body.user_id) {
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


app.listen(8000, () =>
    console.log(`Resint backend listening on ${8000}`),
);