// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChLGmXPtD54zAuWhBBu2IpWm3M779RFyU",
  authDomain: "uber-eats-clone-cd900.firebaseapp.com",
  databaseURL: "https://uber-eats-clone-cd900-default-rtdb.firebaseio.com",
  projectId: "uber-eats-clone-cd900",
  storageBucket: "uber-eats-clone-cd900.appspot.com",
  messagingSenderId: "562006120043",
  appId: "1:562006120043:web:6dc8c5755f550a7ab1c32e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);