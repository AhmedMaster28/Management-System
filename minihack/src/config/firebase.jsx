// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnTAz7CbCdj4IOfjYoVvMy-9JOiXZKDy8",
  authDomain: "minihackathon-7916b.firebaseapp.com",
  projectId: "minihackathon-7916b",
  storageBucket: "minihackathon-7916b.appspot.com",
  messagingSenderId: "844128200867",
  appId: "1:844128200867:web:588e2e482adc15942ff716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

