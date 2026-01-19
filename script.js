// ===================================
// NAVIGATION
// ===================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Update active navigation link
  updateActiveNavLink();
});

// ===================================
// SMOOTH SCROLLING
// ===================================

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navLinksContainer = document.getElementById('navLinks');
      navLinksContainer.classList.remove('active');
    }
  });
});

// ===================================
// ACTIVE SECTION TRACKING
// ===================================

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ===================================
// MOBILE MENU
// ===================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksContainer = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
  
  // Toggle hamburger icon
  if (navLinksContainer.classList.contains('active')) {
    mobileMenuBtn.textContent = '✕';
  } else {
    mobileMenuBtn.textContent = '☰';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinksContainer.classList.remove('active');
    mobileMenuBtn.textContent = '☰';
  }
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
  observer.observe(element);
});

// ===================================
// TYPING EFFECT (Optional Enhancement)
// ===================================

// Uncomment this to add a typing effect to the hero subtitle
/*
const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitleText = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let charIndex = 0;
function typeWriter() {
  if (charIndex < subtitleText.length) {
    heroSubtitle.textContent += subtitleText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect after page load
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});
*/

// ===================================
// SMOOTH SCROLL TO TOP
// ===================================

// Optional: Add a "scroll to top" button
function createScrollToTopButton() {
  const button = document.createElement('button');
  button.innerHTML = '↑';
  button.className = 'scroll-to-top';
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  `;
  
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    } else {
      button.style.opacity = '0';
      button.style.transform = 'translateY(20px)';
    }
  });
  
  document.body.appendChild(button);
}

// Initialize scroll to top button
createScrollToTopButton();

// ===================================
// PROJECT FILTERING (Optional)
// ===================================

// If you want to add project filtering functionality, uncomment below:
/*
function filterProjects(category) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Add filter buttons to HTML and call filterProjects('category-name')
*/

// ===================================
// INITIALIZE
// ===================================

console.log('Portfolio website loaded successfully! 🚀');
