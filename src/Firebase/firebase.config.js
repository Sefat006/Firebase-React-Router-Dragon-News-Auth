// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBseGoLQywADTzwb_8X-dAqfXag3Dxb3UI",
  authDomain: "dragon-news-auth-batch-10.firebaseapp.com",
  projectId: "dragon-news-auth-batch-10",
  storageBucket: "dragon-news-auth-batch-10.firebasestorage.app",
  messagingSenderId: "946745807373",
  appId: "1:946745807373:web:8eb4a08dfa1c8d06ab3b44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;