import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAycLUbh1Bx7f8iJ4L9qKJyUGYFxOC_6n4",
    authDomain: "gtmarketplace-b1c00.firebaseapp.com",
    databaseURL: "https://gtmarketplace-b1c00-default-rtdb.firebaseio.com",
    projectId: "gtmarketplace-b1c00",
    storageBucket: "gtmarketplace-b1c00.appspot.com",
    messagingSenderId: "400757914984",
    appId: "1:400757914984:web:c6bca07e3c80cef0b76add",
    measurementId: "G-5CWNTSM4JD"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
