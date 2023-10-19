import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth;'

const firebaseConfig = {
    apiKey: "AIzaSyBXiQnszv47QULV2HpF3JW6oy-ETybgyZs",
    authDomain: "fir-954de.firebaseapp.com",
    projectId: "fir-954de",
    storageBucket: "fir-954de.appspot.com",
    messagingSenderId: "488915909430",
    appId: "1:488915909430:web:5860d9fb66e31ddc775197"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };