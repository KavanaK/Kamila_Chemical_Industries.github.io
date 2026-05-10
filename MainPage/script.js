document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');

    // Toggle Mobile Menu
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Shrink Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.top = '10px';
            navbar.style.padding = '8px 30px';
        } else {
            navbar.style.top = '20px';
            navbar.style.padding = '10px 30px';
        }
    });

    // Close menu when clicking a link (Mobile)
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});