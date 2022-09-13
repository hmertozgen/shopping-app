import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM9sf7E46YGpzgl7qiwNPhfRi7rzmNoz4",
  authDomain: "shopping-app-53e04.firebaseapp.com",
  projectId: "shopping-app-53e04",
  storageBucket: "shopping-app-53e04.appspot.com",
  messagingSenderId: "831756709277",
  appId: "1:831756709277:web:c6bf69f4a4d7df51859374",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
