import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const app = {
    apiKey: "AIzaXXXXX",
    authDomain: "XXXXX.firebaseapp.com",
    databaseURL: "https://XXXXX.firebaseio.com",
    projectId: "XXXXX-firegram",
    storageBucket: "XXXXX-firegram.appspot.com",
    messagingSenderId: "XXXXX",
    appId: "1:XXXXX"
};

// Initialize Firebase
firebase.initializeApp(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage,  projectFirestore, timestamp };