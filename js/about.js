/* About Page JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Random rotation for sticky notes on page load
    const stickyNotes = document.querySelectorAll('.sticky-note');
    stickyNotes.forEach(note => {
        // Apply a subtle random rotation on page load in addition to CSS variables
        const randomRotation = Math.random() * 4 - 2; // Between -2 and +2 degrees
        note.style.transform = `rotate(${randomRotation}deg)`;
        
        // Hover effect - handled in CSS
        note.addEventListener('mouseenter', () => {
            note.style.transform = 'rotate(0) scale(1.05)';
        });
        
        note.addEventListener('mouseleave', () => {
            note.style.transform = `rotate(${randomRotation}deg)`;
        });
    });

    // Animation on scroll using Intersection Observer
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.hat-card, .currently-item, .sticky-note');
    animatedElements.forEach(element => {
        element.classList.add('will-animate');
        observer.observe(element);
    });
});
