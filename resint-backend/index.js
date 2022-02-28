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
})

// add new app
app.post('/addApp', 
    body('company').not().isEmpty(),
    body('position').not().isEmpty(),
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

app.listen(process.env.PORT, () =>
    console.log(`Resint backend listening on ${process.env.PORT}`),
);