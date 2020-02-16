import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCVCHujphA1HG1F3pMKGeVm8NHlMQDJ4KA',
  authDomain: 'ciara-scheduler.firebaseapp.com',
  databaseURL: 'https://ciara-scheduler.firebaseio.com',
  projectId: 'ciara-scheduler',
  storageBucket: 'ciara-scheduler.appspot.com',
  messagingSenderId: '850133796655',
  appId: '1:850133796655:web:fe20fa8e5e530eea6283da'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = firebase.firestore();
