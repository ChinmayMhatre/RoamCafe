
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8aHTMk8woVwqW_6IrxCZUa3qq3LWCXrg",
    authDomain: "roamcafe-9b096.firebaseapp.com",
    projectId: "roamcafe-9b096",
    storageBucket: "roamcafe-9b096.appspot.com",
    messagingSenderId: "123455867247",
    appId: "1:123455867247:web:c60ff127f9214545d8c09a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);