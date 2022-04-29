// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwqlAy33RhsNFXdeIEvu6RX69CBLzwe38",
    authDomain: "fruit-basket-523c2.firebaseapp.com",
    projectId: "fruit-basket-523c2",
    storageBucket: "fruit-basket-523c2.appspot.com",
    messagingSenderId: "479790905397",
    appId: "1:479790905397:web:19e2481f94b701b88bd97c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;