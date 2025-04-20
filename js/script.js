document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Course filtering functionality (on courses.html page)
    const filterButtons = document.querySelectorAll('.category-filter');
    const courseCards = document.querySelectorAll('.course-card');
    
    if (filterButtons.length > 0 && courseCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get category to filter
                const filterCategory = button.getAttribute('data-category');
                
                // Show/hide courses based on category
                courseCards.forEach(card => {
                    if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Form submission handling with AJAX
    const contactForm = document.getElementById('contactForm');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            
            fetch('php/contact_process.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const messageElement = document.getElementById('form-message');
                if (messageElement) {
                    if (data.status === 'success') {
                        messageElement.innerHTML = `<div class="success-message">${data.message}</div>`;
                        contactForm.reset();
                    } else {
                        let errorHtml = `<div class="error-message">${data.message}</div>`;
                        if (data.errors) {
                            errorHtml += '<ul>';
                            data.errors.forEach(error => {
                                errorHtml += `<li>${error}</li>`;
                            });
                            errorHtml += '</ul>';
                        }
                        messageElement.innerHTML = errorHtml;
                    }
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
    
    // Testimonial slider functionality
    const testimonialSlider = document.getElementById('testimonialSlider');
    if (testimonialSlider) {
        // Simple testimonial slider functionality could be added here
    }
});
