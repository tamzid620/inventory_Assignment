// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-E-hZwjeUSQGQAuJorhevUvCJ5ahbH3I",
  authDomain: "e-commer-project-2f5ee.firebaseapp.com",
  projectId: "e-commer-project-2f5ee",
  storageBucket: "e-commer-project-2f5ee.appspot.com",
  messagingSenderId: "835382853730",
  appId: "1:835382853730:web:7fa616cbd928469fb5913b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
