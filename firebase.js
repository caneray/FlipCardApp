import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0yXMfx3h6r3yYcikZ59cuUVz7YhUuoes",
  authDomain: "todoapp-89584.firebaseapp.com",
  projectId: "todoapp-89584",
  storageBucket: "todoapp-89584.appspot.com",
  messagingSenderId: "251726134984",
  appId: "1:251726134984:web:b8a9c6f79e97d6e3fbaffd",
  measurementId: "G-1VZY2FLJSL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}