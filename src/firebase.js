
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyADinKUqjP9rPb8C6PauwqtZ31U9mWpdS4",
    authDomain: "counter-app-3fc1f.firebaseapp.com",
    projectId: "counter-app-3fc1f",
    storageBucket: "counter-app-3fc1f.appspot.com",
    messagingSenderId: "660506870114",
    appId: "1:660506870114:web:2a4fd04ea16279f73f6c3b",
    measurementId: "G-TC5W68VRXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };