import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCN6ILYTWF1SImjznmD2yzd4w5VKzjLQCg",
  authDomain: "letmeask-44581.firebaseapp.com",
  databaseURL: "https://letmeask-44581-default-rtdb.firebaseio.com",
  projectId: "letmeask-44581",
  storageBucket: "letmeask-44581.appspot.com",
  messagingSenderId: "206131597772",
  appId: "1:206131597772:web:ec1c045578c0811ce0cd69",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
