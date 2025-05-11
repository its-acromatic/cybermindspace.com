// js/signin.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config.js';

window.signin = function() {
  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;
  const errorDiv = document.getElementById('signinError');

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
      errorDiv.textContent = '';
      window.location.href = '/dashboard.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Signin error:", errorCode, errorMessage);
      errorDiv.textContent = errorMessage;
    });
};