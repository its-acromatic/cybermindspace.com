// js/signup.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { auth, database } from './config.js';

window.signup = function() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const errorDiv = document.getElementById('signupError');

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
      errorDiv.textContent = '';
      set(ref(database, 'users/' + user.uid), {
        email: email,
      });
      window.location.href = '/dashboard.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Signup error:", errorCode, errorMessage);
      errorDiv.textContent = errorMessage;
    });
};