

import { initializeApp } from 'firebase/app';

import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';

import { APIKEY, AUTHDOMAIN, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID} from '@env';
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
/*
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId:MEASUREMENTID
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyA78abVcVaeys7xxRFEzzzEW7FQCl2TkKs",
  authDomain: "toss-it-56261.firebaseapp.com",
  projectId: "toss-it-56261",
  storageBucket: "toss-it-56261.appspot.com",
  messagingSenderId: "1022687635194",
  appId: "1:1022687635194:web:7dd0cc1ab604de15dacb43",
  measurementId: "G-2THZ1ZF0R6"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
