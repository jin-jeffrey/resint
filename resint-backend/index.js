import firebaseConfig from './firebaseConfig.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initializeApp}  from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import dotenv from "dotenv";

// initialize app with express, cors, and env variables
const app = express();
dotenv.config();
app.use(cors());
var jsonParser = bodyParser.json()

// connect to firebase 
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// ROUTES

// get apps by user
app.get('/apps', jsonParser, async (req,res) => {
    const appsCollection = collection(db, 'apps');
    const appsSnapshot = await getDocs(appsCollection);
    const appsList = appsSnapshot.docs.map((doc) => {
        if (doc.data().user_id == req.body.user_id) {
            return doc.data();
        }
    });
    res.send(appsList);
})

// add new app
app.post('/newApp', jsonParser, async (req, res) => {
    try {
        const docRef = await addDoc(collection(db, "apps"), req.body);
        res.status(200).send("Document written with ID: " + docRef.id);
    } catch (e) {
        res.status(400).send("Failed to add document");
    }      
})

app.listen(process.env.PORT, () =>
    console.log(`Resint backend listening on ${process.env.PORT}`),
);