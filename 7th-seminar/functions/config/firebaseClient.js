const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyC3oYPKsFlzffXxgQJ4FykIHMjjAMiG6nY",
    authDomain: "wesopt29-ed7c9.firebaseapp.com",
    projectId: "wesopt29-ed7c9",
    storageBucket: "wesopt29-ed7c9.appspot.com",
    messagingSenderId: "820414193359",
    appId: "1:820414193359:web:7efdb0be50576aa888a1ba",
    measurementId: "G-RDJXGN0WEK"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };