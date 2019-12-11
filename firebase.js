import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDIpPaVqmEsPQz8msh4BrWZaikDQQ1WOzo",
  authDomain: "compass-55656.firebaseapp.com",
  databaseURL: "https://compass-55656.firebaseio.com",
  projectId: "compass-55656",
  storageBucket: "compass-55656.appspot.com",
  messagingSenderId: "386576072123",
  appId: "1:386576072123:web:a3b36dcab8a757aace589e",
  measurementId: "G-4GY0WE58LJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

export default firestore;