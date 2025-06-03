// Bethany Jep Portfolio JavaScript

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Animated typing effect
    const options = {
        strings: [
            'magical tech.',
            'delightful art.',
            'connected communities.'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    };
    
    // Initialize Typed.js
    const typed = new Typed('#typed-text', options);
    
    // Navigation menu toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Toggle icon between bars and X
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            // Reset icon
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Carousel navigation
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');
    
    if (dots.length > 0 && cards.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Calculate scroll position
                const cardWidth = cards[0].offsetWidth + 24; // width + margin
                carousel.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                });
                
                // Update active dot
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });
        
        // Update dots on scroll
        carousel.addEventListener('scroll', () => {
            const scrollPosition = carousel.scrollLeft;
            const cardWidth = cards[0].offsetWidth + 24;
            const activeIndex = Math.round(scrollPosition / cardWidth);
            
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
    }
    
    // Surprise Me button functionality
    const surpriseBtn = document.getElementById('surprise-btn');
    
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Array of fun surprises (quotes, facts, jokes, etc.)
            const surprises = [
                "Did you know? The first computer bug was actually a real moth trapped in a Harvard Mark II computer in 1947!",
                "Cats make about 100 different sounds. Dogs make only about 10.",
                "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
                "Your awesome factor just increased by 27%!",
                "In Japan, letting a sumo wrestler make your baby cry is considered good luck.",
                "The world's oldest piece of chewing gum is 9,000 years old!",
                "A day on Venus is longer than a year on Venus.",
                "The Hawaiian alphabet has only 13 letters.",
                "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat!"
            ];
            
            // Pick a random surprise
            const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
            
            // Create modal for the surprise
            const modal = document.createElement('div');
            modal.classList.add('surprise-modal');
            
            modal.innerHTML = `
                <div class="surprise-content">
                    <span class="close-modal">&times;</span>
                    <p>${randomSurprise}</p>
                    <div class="confetti"></div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Add some simple confetti effect
            const confettiElement = document.querySelector('.confetti');
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti-piece');
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.animationDelay = `${Math.random() * 3}s`;
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                confettiElement.appendChild(confetti);
            }
            
            // Close modal functionality
            const closeModal = document.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // Also close when clicking outside the content
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
            
            // Add confetti animation styles dynamically
            const style = document.createElement('style');
            style.textContent = `
                .surprise-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }
                
                .surprise-content {
                    background-color: white;
                    padding: 2rem;
                    border-radius: 10px;
                    position: relative;
                    max-width: 500px;
                    text-align: center;
                    font-size: 1.2rem;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    overflow: hidden;
                }
                
                .close-modal {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                
                .confetti {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
                
                .confetti-piece {
                    position: absolute;
                    top: -10px;
                    width: 10px;
                    height: 10px;
                    border-radius: 2px;
                    animation: fall 3s linear infinite;
                }
                
                @keyframes fall {
                    0% {
                        transform: translateY(-10px) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            
            document.head.appendChild(style);
        });
    }
    
    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Form validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all required fields', 'error');
                return;
            }
            
            // In a real implementation, this is where you would send the data
            // to a server using fetch() or XMLHttpRequest
            
            // For demo purposes, show success message
            showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Display form message
    function showFormMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        // Add to form
        contactForm.appendChild(messageElement);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageElement.classList.add('fade-out');
            setTimeout(() => messageElement.remove(), 300);
        }, 5000);
    }
    
    // Fade-in elements on scroll
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
    
    // Elements to observe
    const sections = document.querySelectorAll('.content-section, .mini-intro, .cta');
    sections.forEach(section => {
        observer.observe(section);
    });
});
