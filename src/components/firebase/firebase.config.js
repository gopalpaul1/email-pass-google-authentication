// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKwWb8kQ2xUWxJqux6qAvZdMz-3Rv4AY",
  authDomain: "auth-email-pass-78c8b.firebaseapp.com",
  projectId: "auth-email-pass-78c8b",
  storageBucket: "auth-email-pass-78c8b.appspot.com",
  messagingSenderId: "182322498351",
  appId: "1:182322498351:web:a1981e4e330498dc8dafda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;