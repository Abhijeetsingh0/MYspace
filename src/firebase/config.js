import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAX4Cqahow3ylgQ8NpGszpbHcCrSxcGq2c",
    authDomain: "myspace-66b34.firebaseapp.com",
    databaseURL: "https://myspace-66b34.firebaseio.com",
    projectId: "myspace-66b34",
    storageBucket: "myspace-66b34.appspot.com",
    messagingSenderId: "733492803339",
    appId: "1:733492803339:web:b9f4166b1e93d184da940e"
  };
  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();

// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export {projectStorage , projectFirestore ,timestamp};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };