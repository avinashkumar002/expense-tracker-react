// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD8n8lxECuqeY-UkqZu1XlVWPUQ2MqQcg",
  authDomain: "expense-tracker-b1d2b.firebaseapp.com",
  projectId: "expense-tracker-b1d2b",
  storageBucket: "expense-tracker-b1d2b.appspot.com",
  messagingSenderId: "867906094046",
  appId: "1:867906094046:web:4cc9e82a5153884145934f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
