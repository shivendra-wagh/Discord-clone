import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDs-kuI09_mQYmgFr9Yjo9Em58U91HqsSI",
    authDomain: "discord-clone-958ed.firebaseapp.com",
    projectId: "discord-clone-958ed",
    storageBucket: "discord-clone-958ed.appspot.com",
    messagingSenderId: "486457083961",
    appId: "1:486457083961:web:a17e9f49a7b59c9c3b65e8",
    measurementId: "G-H42R8EXD4T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db; 