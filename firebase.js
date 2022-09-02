// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtJPXWwoaIw-0s96U_1LVSmEBwjrmsJEY",
  authDomain: "counter-app-81ed5.firebaseapp.com",
  projectId: "counter-app-81ed5",
  storageBucket: "counter-app-81ed5.appspot.com",
  messagingSenderId: "443681868944",
  appId: "1:443681868944:web:dc67dd04769adf89969c15",
  measurementId: "G-V43SK00BEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);