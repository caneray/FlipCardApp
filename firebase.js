import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp1STb9pM3hobhNaBoZJ7Lg4qSvj1mdUA",
  authDomain: "flipcardapp-bf353.firebaseapp.com",
  projectId: "flipcardapp-bf353",
  storageBucket: "flipcardapp-bf353.appspot.com",
  messagingSenderId: "36758436172",
  appId: "1:36758436172:web:6a7d33c18d5e635a1cf7e9",
  measurementId: "G-K1J3PZDFG5"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const firestore = firebase.firestore();




export {
  auth,
  db,
  firebase,
  firestore
}