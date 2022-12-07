// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARMizxg5Rk4ODW_9GGZDXUPFBDd1Sa_yw",
    authDomain: "snykershenrypg.firebaseapp.com",
    projectId: "snykershenrypg",
    storageBucket: "snykershenrypg.appspot.com",
    messagingSenderId: "362638812029",
    appId: "1:362638812029:web:4ac69dd6f46e50ae10a214",
    measurementId: "G-HM4JTZBPFW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)