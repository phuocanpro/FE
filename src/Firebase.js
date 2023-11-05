// Import the functions you need from the SDKs you need
import { Result } from "antd";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD4jwT9D9uOTOC35ytzAINwGRhHtSQ-xk",
  authDomain: "ggauth-c0aab.firebaseapp.com",
  projectId: "ggauth-c0aab",
  storageBucket: "ggauth-c0aab.appspot.com",
  messagingSenderId: "761304452551",
  appId: "1:761304452551:web:f81405560954799fbd9de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
};