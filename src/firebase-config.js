// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASydXvv9Anuz6Wz0xeC89MNwlYfvJgKJA",
  authDomain: "chatapp-15520.firebaseapp.com",
  projectId: "chatapp-15520",
  storageBucket: "chatapp-15520.appspot.com",
  messagingSenderId: "897024645985",
  appId: "1:897024645985:web:56e1e030c93c5b35a9c320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)

