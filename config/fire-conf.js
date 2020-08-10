import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXnb9F_QOgV_WYKi5ZJAOHAMd0Z3lf9kA",
    authDomain: "nextublogs.firebaseapp.com",
    databaseURL: "https://nextublogs.firebaseio.com",
    projectId: "nextublogs",
    storageBucket: "nextublogs.appspot.com",
    messagingSenderId: "1083808022788",
    appId: "1:1083808022788:web:61d7f645d7c1242b071051"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch(err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const fire = firebase;
export default fire;
