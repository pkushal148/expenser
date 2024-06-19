// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSzwjXfdAtUSGsAPh9xt_HlD0409xIXFk",
  authDomain: "expenser-8e5f0.firebaseapp.com",
  projectId: "expenser-8e5f0",
  storageBucket: "expenser-8e5f0.appspot.com",
  messagingSenderId: "755973564642",
  appId: "1:755973564642:web:4c206e5f489dff4b7e16bb",
  measurementId: "G-6R940Y99XW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);
export { analytics, auth, provider, db };
