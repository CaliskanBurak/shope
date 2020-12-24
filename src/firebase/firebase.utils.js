import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5y-tWnMnJQoN72340joDbuU71a6G0SrY",
  authDomain: "shope-5127a.firebaseapp.com",
  projectId: "shope-5127a",
  storageBucket: "shope-5127a.appspot.com",
  messagingSenderId: "783374310709",
  appId: "1:783374310709:web:6cb0757ad8eeef5c2bc07c",
  measurementId: "G-2LVX9PRGPX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;