import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAm3Lu0n9jSpeGAsr3LihqGb8-qf3hFQI",
    authDomain: "issuetracker-2b5ea.firebaseapp.com",
    databaseURL: "https://issuetracker-2b5ea.firebaseio.com",
    projectId: "issuetracker-2b5ea",
    storageBucket: "issuetracker-2b5ea.appspot.com",
    messagingSenderId: "1001536729249",
    appId: "1:1001536729249:web:16b7ae69f9508a383a00e0"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase
