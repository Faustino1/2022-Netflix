import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbz-ZnbVoP-beMkqrg9RGvsOnegWvaTg0",
    authDomain: "neflix-257af.firebaseapp.com",
    projectId: "neflix-257af",
    storageBucket: "neflix-257af.appspot.com",
    messagingSenderId: "27126509563",
    appId: "1:27126509563:web:d728a7839bbaa05f85a55e"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth }
