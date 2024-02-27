// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCucs9kmi0LKCKfe18XdDukNongCHfgDf0",
  authDomain: "pictocloud-f0858.firebaseapp.com",
  projectId: "pictocloud-f0858",
  storageBucket: "pictocloud-f0858.appspot.com",
  messagingSenderId: "357468466228",
  appId: "1:357468466228:web:1d0ea744b8256040ff2e61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);