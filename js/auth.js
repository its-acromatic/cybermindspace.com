// js/auth.js
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  function updateAuthUI() {
    const signupButton = document.getElementById('signupButton');
    const signinButton = document.getElementById('signinButton');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const signoutButton = document.getElementById('signoutButton');

    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (signupButton) signupButton.style.display = 'none';
        if (signinButton) signinButton.style.display = 'none';
        if (userNameDisplay) {
          userNameDisplay.style.display = 'inline-block';
          userNameDisplay.textContent = user.displayName || user.email;
        }
        if (signoutButton) signoutButton.style.display = 'inline-block';
      } else {
        if (signupButton) signupButton.style.display = 'inline-block';
        if (signinButton) signinButton.style.display = 'inline-block';
        if (userNameDisplay) userNameDisplay.style.display = 'none';
        if (signoutButton) signoutButton.style.display = 'none';
      }
    });
  }

  window.signout = function() {
    signOut(auth).then(() => {
      console.log('User signed out');
      window.location.href = '/';
    }).catch((error) => {
      console.error('Sign out error:', error);
    });
  };

  function checkAuth() {
    const path = window.location.pathname;
    if (path === '/dashboard.html') {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          window.location.href = '/signin.html';
        }
      });
    }
  }

  updateAuthUI();
  checkAuth();
});
