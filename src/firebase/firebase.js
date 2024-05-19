import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "store-fd42e.firebaseapp.com",
  projectId: "store-fd42e",
  storageBucket: "store-fd42e.appspot.com",
  messagingSenderId: "505998759983",
  appId: "1:505998759983:web:1374a6e2131cdb5f374eda",
  measurementId: "G-65PQVSXN1D"
};
const app =initializeApp(firebaseConfig);
const auth =getAuth(app);
auth.useDeviceLanguage();

export{app,auth};
