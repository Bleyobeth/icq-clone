// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDDPb2ceKdbJTz2R7oBbgVlVjw_yc21_14",
    authDomain: "react-chat-45efb.firebaseapp.com",
    projectId: "react-chat-45efb",
    storageBucket: "react-chat-45efb.appspot.com",
    messagingSenderId: "350851288954",
    appId: "1:350851288954:web:0c9d1bc78cef83e6b8d0c3",
    measurementId: "G-LDZD2E5D66"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
