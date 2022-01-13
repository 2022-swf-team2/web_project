import { initializeApp } from "firebase/app";
import { getFirestore as getFireStoreLite } from "firebase/firestore/lite";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAvGRzrhJdWX6P07F6HgI8FStm1KpIsUS0",
    authDomain: "common-53a17.firebaseapp.com",
    projectId: "common-53a17",
    storageBucket: "common-53a17.appspot.com",
    messagingSenderId: "780398587516",
    appId: "1:780398587516:web:c96515e60c0edb128ce3f9",
    measurementId: "G-98LNPZK4F7"
};

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const firestoreService = getFireStoreLite(app);
export const firestorageService = getStorage(app);
export const db= getFirestore();