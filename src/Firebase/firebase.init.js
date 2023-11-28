// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_2eDgDHzxD6Xz8GHTjdD7LPL3s7IOUnA",
  authDomain: "books-collection-users.firebaseapp.com",
  projectId: "books-collection-users",
  storageBucket: "books-collection-users.appspot.com",
  messagingSenderId: "406283753504",
  appId: "1:406283753504:web:e267a6eb01c021d7a4c445",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
