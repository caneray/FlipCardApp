import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


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

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}