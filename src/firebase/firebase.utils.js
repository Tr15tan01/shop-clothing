import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCO-aK98weWP1dv4AKkaXBUKY0uuO7W49E",
    authDomain: "cl-shop-db-61fd8.firebaseapp.com",
    projectId: "cl-shop-db-61fd8",
    storageBucket: "cl-shop-db-61fd8.appspot.com",
    messagingSenderId: "80638043076",
    appId: "1:80638043076:web:7c6207745fcbb090823a91"
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const firestore = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;

