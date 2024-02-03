// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg9UBnJ_5rg4vciw8Tv5WnZfoYxpI04so",
    authDomain: "dragon-news-2fe97.firebaseapp.com",
    projectId: "dragon-news-2fe97",
    storageBucket: "dragon-news-2fe97.appspot.com",
    messagingSenderId: "1097662041244",
    appId: "1:1097662041244:web:403789c7757e200056f159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

