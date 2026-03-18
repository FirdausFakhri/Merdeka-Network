// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

//menuToggle.addEventListener('click', () => {
    //navLinks.classList.toggle('active');
    // Simple styling toggle via JS for demonstration
   // if(navLinks.classList.contains('active')) {
   //     navLinks.style.display = 'flex';
   //     navLinks.style.flexDirection = 'column';
   //     navLinks.style.position = 'absolute';
   //     navLinks.style.top = '80px';
   //     navLinks.style.left = '0';
   //     navLinks.style.width = '100%';
   //     navLinks.style.background = '#fff';
   //     navLinks.style.padding = '20px';
   // } else {
   //     navLinks.style.display = 'none';
   // }
//});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Remove all the manual .style.display lines!
});

// Smooth Scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});






// Animation for Product Cards on the Digital Solutions Page
const productCards = document.querySelectorAll('.product-category');

const productObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, { threshold: 0.2 });

productCards.forEach(card => {
    // Add a basic transition state via JS
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    productObserver.observe(card);
});

// Helper to show the cards (you can add this class to your CSS)
// .fade-in-visible { opacity: 1 !important; transform: translateY(0) !important; }

// Animation for Digital Solutions Product Cards
const digitalCards = document.querySelectorAll('.product-category, .feature-item');

const digitalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

digitalCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s ease-out';
    digitalObserver.observe(card);
});









// Animation for Partner Logos
const partnerLogos = document.querySelectorAll('.logo-item');

const partnerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0.6'; // Matches CSS initial state
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

partnerLogos.forEach((logo) => {
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(20px)';
    logo.style.transition = 'all 0.6s ease-out';
    partnerObserver.observe(logo);
});