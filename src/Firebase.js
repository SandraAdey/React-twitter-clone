
import firebase from "./Firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCCXv3z0Lo0OKVAeniMdfJm_WwbD_16l0",
  authDomain: "twitter-clone-5605c.firebaseapp.com",
  projectId: "twitter-clone-5605c",
  storageBucket: "twitter-clone-5605c.appspot.com",
  messagingSenderId: "166065159059",
  appId: "1:166065159059:web:6d1d2bf921241fae358666",
  measurementId: "G-5T5VP093ZH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;