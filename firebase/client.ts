// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdQeGMrwwXyCaPbiBD_cmIs24wB4QjB2Q",
    authDomain: "prepwise-160f8.firebaseapp.com",
    projectId: "prepwise-160f8",
    storageBucket: "prepwise-160f8.firebasestorage.app",
    messagingSenderId: "1033645137410",
    appId: "1:1033645137410:web:a2d75d50e830daed50d11b",
    measurementId: "G-Q44HRFDERH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);