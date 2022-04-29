import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

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
const analytics = getAnalytics(app);
const db = getFirestore(app);

// My constants
document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelectorAll(".likeBtn");
  for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", () => {
      console.log("hola");
    });
  }
});

import { collection, addDoc } from "firebase/firestore";

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}