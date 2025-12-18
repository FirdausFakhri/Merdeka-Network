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