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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
