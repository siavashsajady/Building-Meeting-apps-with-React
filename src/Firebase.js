import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAsgsNADBSKy61UGmjQTgf3YKyzLgu2jtc',
  authDomain: 'react-spas-cdbe9.firebaseapp.com',
  databaseURL: 'https://react-spas-cdbe9.firebaseio.com',
  projectId: 'react-spas-cdbe9',
  storageBucket: '',
  messagingSenderId: '720503843524',
  appId: '1:720503843524:web:505e8e43a5d9e3f2'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
