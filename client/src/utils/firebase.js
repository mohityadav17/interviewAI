
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-166e2.firebaseapp.com",
  projectId: "interviewai-166e2",
  storageBucket: "interviewai-166e2.firebasestorage.app",
  messagingSenderId: "318831726500",
  appId: "1:318831726500:web:7630aa1fa0c2726d46fb31",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}