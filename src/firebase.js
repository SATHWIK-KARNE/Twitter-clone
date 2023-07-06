import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDi-JeHOx4hUceRGQm4BzmaDVcspG1CFMA",
  authDomain: "twitter-clone-45df7.firebaseapp.com",
  databaseURL: "https://twitter-clone-45df7-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-45df7",
  storageBucket: "twitter-clone-45df7.appspot.com",
  messagingSenderId: "845081808434",
  appId: "1:845081808434:web:1259b0cd172740d7fe762b",
  measurementId: "G-9G35MGWH2R"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
// also firebase db is real-time=> updated without refresh
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default  db ;