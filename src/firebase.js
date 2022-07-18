import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBc3BN2dUTp6Cf6FLL8vQLSq7MsTW-o2to",
  authDomain: "flipkartgrid-9a1c0.firebaseapp.com",
  projectId: "flipkartgrid-9a1c0",
  storageBucket: "flipkartgrid-9a1c0.appspot.com",
  messagingSenderId: "464498464426",
  appId: "1:464498464426:web:58b9c986202c6f92b2a2d3",
  measurementId: "G-8B0QQSMX9P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}



            
       