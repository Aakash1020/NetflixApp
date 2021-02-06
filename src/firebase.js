// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSVggOuuzPXlnb0V9sQD05GnutWvZPDIs",
  authDomain: "netflixapp-a7b02.firebaseapp.com",
  projectId: "netflixapp-a7b02",
  storageBucket: "netflixapp-a7b02.appspot.com",
  messagingSenderId: "227559320748",
  appId: "1:227559320748:web:abbcb5705d12ba3196c309",
  measurementId: "G-807M40P5DE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
