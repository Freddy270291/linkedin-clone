import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA33QRvgMb2blkI8NgjDYvXa9GbIRcQJk",
  authDomain: "linkedin-clone-62e5f.firebaseapp.com",
  projectId: "linkedin-clone-62e5f",
  storageBucket: "linkedin-clone-62e5f.appspot.com",
  messagingSenderId: "784065846542",
  appId: "1:784065846542:web:a3843a003a78bbe1f64b5f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
