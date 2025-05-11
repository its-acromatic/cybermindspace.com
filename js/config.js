// config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// import { getFirestore } from 'firebase/firestore'; //

const firebaseConfig = {
    apiKey: "AIzaSyCF5xmyzDGWYpa20Tri-RAaJ0KCYaQYfe8",
    authDomain: "cyber-mind-space.firebaseapp.com",
    databaseURL: "https://cyber-mind-space-default-rtdb.asia-southeast1.firebasedatabase.app/", // Realtime Database ke liye
    projectId: "cyber-mind-space",
    storageBucket: "cyber-mind-space.firebasestorage.app",
    messagingSenderId: "999457763481",
    appId: "1:999457763481:web:82970ecea9787ff8194808"
  };
  
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const database = getDatabase(app);
