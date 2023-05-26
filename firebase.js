import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJEXG-NAAv-UsYc8v0LbpeDvvFk6rRriY",
  authDomain: "laundry-app-85fac.firebaseapp.com",
  projectId: "laundry-app-85fac",
  storageBucket: "laundry-app-85fac.appspot.com",
  messagingSenderId: "770547975692",
  appId: "1:770547975692:web:ce3e98cf9006dcba54d029",
  measurementId: "G-B5T6PK0299"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {auth, db}