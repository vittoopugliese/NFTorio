import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyBpDGELAkQ1E0rzBx8HvqfsWtwzB_JKArc",
  authDomain: "nftorio-bc41e.firebaseapp.com",
  projectId: "nftorio-bc41e",
  storageBucket: "nftorio-bc41e.appspot.com",
  messagingSenderId: "925688207872",
  appId: "1:925688207872:web:5bd9994f36ab77592716e5",
  measurementId: "G-G86ZC30CCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);