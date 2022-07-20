import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDrgvigzxrxeOfzErYKrgAIssxb1sACmBg',
  authDomain: 'mymoney-46a04.firebaseapp.com',
  projectId: 'mymoney-46a04',
  storageBucket: 'mymoney-46a04.appspot.com',
  messagingSenderId: '415357467773',
  appId: '1:415357467773:web:c035a138eabc5b16988514',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
