// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfAkQxVDCjqqpame7kn3OZTkF9-0tFhr4",
  authDomain: "assignment-9-7f06b.firebaseapp.com",
  projectId: "assignment-9-7f06b",
  storageBucket: "assignment-9-7f06b.appspot.com",
  messagingSenderId: "232511286599",
  appId: "1:232511286599:web:701606f179d9284f02f062",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
