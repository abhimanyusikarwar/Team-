import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDQCXdNv6AVoHSo1wqh5h_zzJSy4iZU16g",
    authDomain: "team-voting-app-fc6ad.firebaseapp.com",
    projectId: "team-voting-app-fc6ad",
    storageBucket: "team-voting-app-fc6ad.appspot.com",
    messagingSenderId: "24020856572",
    appId: "1:24020856572:web:a48dee7380d45969b9b179"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();