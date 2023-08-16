// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvZqQhevmeSbksswdEJU4TA9sNP0rDKes",
  authDomain: "realtor-clone-react-7add5.firebaseapp.com",
  projectId: "realtor-clone-react-7add5",
  storageBucket: "realtor-clone-react-7add5.appspot.com",
  messagingSenderId: "659364481766",
  appId: "1:659364481766:web:9bab5d321fc1413eeb0927",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
