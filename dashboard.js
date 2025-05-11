// js/dashboard.js
import { onAuthStateChanged } from 'firebase/auth';
import { ref, once } from 'firebase/database';
import { auth, database } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userNameDisplay = document.querySelector('.auth-buttons #userNameDisplay');
      userNameDisplay.textContent = user.displayName || user.email;

      const userDataDiv = document.getElementById('userData');

      const userRef = ref(database, 'users/' + user.uid);
      try {
        const snapshot = await once(userRef);
        const userData = snapshot.val();
        if (userData) {
          userDataDiv.innerHTML = `<p>Email: ${userData.email}</p>`;
          // Yahan aap user ka aur data display kar sakte hain
        } else {
          userDataDiv.innerHTML = '<p>No data found for this user.</p>';
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        userDataDiv.innerHTML = '<p>Error loading data.</p>';
      }
    } else {
      window.location.href = '/signin.html';
    }
  });
});