// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTrEYE-kLMCKJWjFrCRFZc3M_PTPbH6rM",
    authDomain: "fir-crud01-c69d2.firebaseapp.com",
    projectId: "fir-crud01-c69d2",
    storageBucket: "fir-crud01-c69d2.appspot.com",
    messagingSenderId: "170475716251",
    appId: "1:170475716251:web:bb4afb996ef5ff7c55503e",
    measurementId: "G-ZQVDHRCMXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage }