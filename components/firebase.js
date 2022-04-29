import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyBpDGELAkQ1E0rzBx8HvqfsWtwzB_JKArc",
  authDomain: "nftorio-bc41e.firebaseapp.com",
  projectId: "nftorio-bc41e",
  storageBucket: "nftorio-bc41e.appspot.com",
  messagingSenderId: "925688207872",
  appId: "1:925688207872:web:5bd9994f36ab77592716e5",
  measurementId: "G-G86ZC30CCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const likeCount = (track, count) => {
  addDoc(collection(db, 'likes'),{track, count})
}

export const getLikes = () => {
  getDocs(collection(db, 'likes'))
}