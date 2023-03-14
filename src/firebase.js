// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAW5Ib5kjpWVtI3AZHv1U-6GyJKCww8FA",
  authDomain: "quickstart-1575644690497.firebaseapp.com",
  projectId: "quickstart-1575644690497",
  storageBucket: "quickstart-1575644690497.appspot.com",
  messagingSenderId: "228187769927",
  appId: "1:228187769927:web:6f2f5b6671f6c1f589f562",
  measurementId: "G-CPCNXDQY1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);