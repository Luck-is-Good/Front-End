import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBREFVmIknnmHUNeXX_HWpwny3FgKkiQiY",
    authDomain: "webos-proj---a-dit-no.firebaseapp.com",
    databaseURL: "https://webos-proj---a-dit-no-default-rtdb.firebaseio.com",
    projectId: "webos-proj---a-dit-no",
    storageBucket: "webos-proj---a-dit-no.appspot.com",
    messagingSenderId: "169263273461",
    appId: "1:169263273461:web:55c7bdbf0739dff1b1fcbc",
    measurementId: "G-ZC631Z4YXX"
};

firebase.initializeApp(config); 

const firestore = firebase.firestore(); 

export { firestore };