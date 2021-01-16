import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBboroq6YA4pR8PtEtIv36RVjKG57CJmfs",
  authDomain: "clothing-app-2415c.firebaseapp.com",
  projectId: "clothing-app-2415c",
  storageBucket: "clothing-app-2415c.appspot.com",
  messagingSenderId: "243952486237",
  appId: "1:243952486237:web:f61a0da6db7d55dacc4ab4",
  measurementId: "G-KDK3KNGJ92",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
