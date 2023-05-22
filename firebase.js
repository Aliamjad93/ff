import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBnvwCmMIaagnRUsNG40Kq6u1WADg4hOAk",
  authDomain: "test-286cf.firebaseapp.com",
  projectId: "test-286cf",
  storageBucket: "test-286cf.appspot.com",
  messagingSenderId: "1038718230115",
  appId: "1:1038718230115:web:b0f42391daf3ee196de256"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();

export {app, database }
