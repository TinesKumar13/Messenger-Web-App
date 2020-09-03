import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAspyp6Vjs0yYlzQiq1siTHCBTYXKnarcY",
    authDomain: "facebook-messenger-clone-df3ce.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-df3ce.firebaseio.com",
    projectId: "facebook-messenger-clone-df3ce",
    storageBucket: "facebook-messenger-clone-df3ce.appspot.com",
    messagingSenderId: "600560235879",
    appId: "1:600560235879:web:ecd18966ed78c7c4966bc2"
});

const db = firebaseApp.firestore();
export default db;