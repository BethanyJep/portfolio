
/**
 * Blog Page JavaScript
 * Adds interactivity to the blog page
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize random thoughts display
  initRandomThoughts();
  
  // Add animation to post cards on scroll
  initPostAnimations();
});

/**
 * Handles displaying random thoughts in the sidebar
 */
function initRandomThoughts() {
  const thoughtElement = document.getElementById('random-thought');
  const newThoughtButton = document.getElementById('new-thought');
  
  const thoughts = [
    "Current obsession: rosemary everything.",
    "Sketching to solve code bugs is a thing, right?",
    "Reminder: You can log off.",
    "What if we made error messages more empathetic?",
    "Just found a book I bought twice. Oops.",
    "3am idea: code that writes poetry about itself.",
    "Saw a dog today that looks exactly like my code: messy but lovable.",
    "I've been spelling 'definitely' wrong my whole life.",
    "Hot take: most meetings could be well-written docs.",
    "Tea > Coffee when debugging for hours."
  ];
  
  // Set initial random thought
  thoughtElement.textContent = `"${getRandomThought(thoughts)}"`;
  
  // Set up button to show new random thought
  newThoughtButton.addEventListener('click', () => {
    // Add a fade-out animation
    thoughtElement.classList.add('fade-out');
    
    // After animation completes, change text and fade back in
    setTimeout(() => {
      thoughtElement.textContent = `"${getRandomThought(thoughts, thoughtElement.textContent.replace(/"/g, ''))}"`;
      thoughtElement.classList.remove('fade-out');
      thoughtElement.classList.add('fade-in');
      
      // Remove the fade-in class after animation completes
      setTimeout(() => {
        thoughtElement.classList.remove('fade-in');
      }, 500);
    }, 300);
  });
}

/**
 * Returns a random thought from array, ensuring it's different from current
 */
function getRandomThought(thoughts, current) {
  let newThought;
  do {
    newThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  } while (newThought === current && thoughts.length > 1);
  
  return newThought;
}

/**
 * Adds animations to post cards when scrolling
 */
function initPostAnimations() {
  const posts = document.querySelectorAll('.post-card');
  
  // Use Intersection Observer to add animation classes when posts come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // Observe each post
  posts.forEach((post, index) => {
    post.style.animationDelay = `${index * 0.1}s`;
    observer.observe(post);
  });
}

/**
 * Toggle mobile menu visibility
 */
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
  this.querySelector('i').classList.toggle('fa-bars');
  this.querySelector('i').classList.toggle('fa-times');
});
