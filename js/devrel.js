// DevRel Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle carousel navigation for talks
    function initCarousel(carouselSelector, dotsSelector) {
        const carousel = document.querySelector(carouselSelector);
        const dots = document.querySelectorAll(`${dotsSelector} .dot`);
        
        if (!carousel || !dots.length) return;
        
        const items = carousel.children;
        const itemWidth = items[0].offsetWidth + 24; // width + margin/gap
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Calculate scroll position
                carousel.scrollTo({
                    left: index * itemWidth,
                    behavior: 'smooth'
                });
                
                // Update active dot
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });
        
        // Update dots based on scroll position
        carousel.addEventListener('scroll', () => {
            const scrollPosition = carousel.scrollLeft;
            const activeIndex = Math.round(scrollPosition / itemWidth);
            
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
    }
    
    // Initialize carousels
    initCarousel('.talk-carousel', '.talks-carousel-nav');
    initCarousel('.testimonial-carousel', '.testimonial-carousel-nav');
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.project-card, .talk-card, .blog-item, .testimonial-card, .sidebar-widget');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add active state to project cards on focus
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
});
