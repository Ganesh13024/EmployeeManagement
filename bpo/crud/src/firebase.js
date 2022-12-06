import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crud-d9b58.firebaseapp.com",

  projectId: "crud-d9b58",

  storageBucket: "crud-d9b58.appspot.com",

  messagingSenderId: "504658936913",

  appId: "1:504658936913:web:fcf9c00a2e7c9825c36470"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
