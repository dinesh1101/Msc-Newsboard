import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDdJzUGcqq2RSMLgdZvSW7bSYdsaBOKTy8",
  authDomain: "authdev-5b70a.firebaseapp.com",
  projectId: "authdev-5b70a",
  storageBucket: "authdev-5b70a.appspot.com",
  messagingSenderId: "130284824882",
  appId: "1:130284824882:web:b0d670054e2e362028cf2b",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName: name, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        name,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("creating error in user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
