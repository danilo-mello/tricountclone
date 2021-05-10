import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAw4KNUvJxkLpe7oe1STDqSzkFKMJO1SVs",
    authDomain: "tricountclone-91371.firebaseapp.com",
    projectId: "tricountclone-91371",
    storageBucket: "tricountclone-91371.appspot.com",
    messagingSenderId: "472241461147",
    appId: "1:472241461147:web:ed769ab0c4a23f22ac333e",
    measurementId: "G-9JHQZ8SV8J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };