
/**
 * Designs Page JavaScript
 * Adds interactivity to the designs page
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations for design items
  initDesignItemAnimations();
  
  // Initialize filter functionality
  initFilterButtons();
  
  // Add staggered animation delays for initial items
  setStaggeredDelays();
  
  // Setup mobile menu toggle
  initMobileMenu();
});

/**
 * Adds animation effects to design portfolio items
 */
function initDesignItemAnimations() {
  const designItems = document.querySelectorAll('.design-item');
  
  // Use Intersection Observer to trigger animations when items come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the item is visible
    rootMargin: '0px 0px -100px 0px' // Trigger a bit before the item is in view
  });
  
  // Observe each design item
  designItems.forEach(item => {
    observer.observe(item);
  });
}

/**
 * Initialize the filter buttons functionality
 */
function initFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const designItems = document.querySelectorAll('.design-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get filter value
      const filter = button.getAttribute('data-filter');
      
      // Filter items
      filterDesignItems(filter);
    });
  });
  
  // Filter function
  function filterDesignItems(filter) {
    designItems.forEach(item => {
      // Reset animations
      item.classList.remove('animated');
      
      // Check if we should show this item
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
        
        // Re-trigger animation with a small delay
        setTimeout(() => {
          item.classList.add('animated');
        }, 50);
      } else {
        item.style.display = 'none';
      }
    });
    
    // Re-apply staggered delays after filtering
    setTimeout(setStaggeredDelays, 100);
  }
}

/**
 * Creates a staggered animation effect for grid items
 */
function setStaggeredDelays() {
  const items = document.querySelectorAll('.design-item:not([style*="display: none"])');
  
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
}

/**
 * Handle placeholder image loading
 */
window.addEventListener('load', () => {
  // Check for missing images and replace with placeholder
  const images = document.querySelectorAll('.design-item img');
  
  images.forEach(img => {
    // Check if image is already broken
    if (img.complete && img.naturalWidth === 0) {
      setPlaceholder(img);
    }
    
    // Add listener for future errors
    img.addEventListener('error', function() {
      setPlaceholder(this);
    });
  });
  
  // Helper function to set placeholder
  function setPlaceholder(imgElement) {
    imgElement.src = 'images/design-placeholder.jpg';
    imgElement.alt = 'Design Placeholder';
    console.log('Image replaced with placeholder');
  }
});

/**
 * Handles mobile menu toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const nav = document.querySelector('nav ul');
      nav.classList.toggle('show');
      this.querySelector('i').classList.toggle('fa-bars');
      this.querySelector('i').classList.toggle('fa-times');
    });
  }
}
