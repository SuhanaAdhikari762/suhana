// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // You would typically send this data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Message sent successfully!');
    contactForm.reset();
});

// Scroll Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.skill-card, .project-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    reveal();
});

// Scroll To Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    // For cross-browser compatibility
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved mode
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Animated Section Transitions
const animatedSections = document.querySelectorAll('.animated-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

animatedSections.forEach(section => {
    observer.observe(section);
});

// Typing Effect in Hero Section
const typedText = document.getElementById('typed-text');
const typingPhrases = [
    'Frontend Developer & Web Designer',
    'React & JavaScript Enthusiast',
    'UI/UX Explorer',
    'Passionate Coder'
];
let typingIndex = 0, charIndex = 0, isDeleting = false;
function typeEffect() {
    const currentPhrase = typingPhrases[typingIndex];
    if (!isDeleting) {
        typedText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
        } else {
            setTimeout(typeEffect, 80);
        }
    } else {
        typedText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            typingIndex = (typingIndex + 1) % typingPhrases.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, 40);
        }
    }
}
document.addEventListener('DOMContentLoaded', typeEffect);

// Animate Progress Bars on Scroll
function animateProgressBars() {
    document.querySelectorAll('.progress').forEach(bar => {
        const value = bar.getAttribute('data-progress');
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            bar.style.width = value + '%';
        }
    });
}
window.addEventListener('scroll', animateProgressBars);
document.addEventListener('DOMContentLoaded', animateProgressBars);

// Fade-in for sections, project and blog cards on scroll
function animateOnScroll(selector) {
  const elements = document.querySelectorAll(selector);
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', function() {
  animateOnScroll('section');
  animateOnScroll('.footer-content');
  animateOnScroll('.project-card');
  animateOnScroll('.blog-card');

  // Profile image upload preview
  const profileUpload = document.getElementById('profile-upload');
  const profileImg = document.querySelector('.profile-img');
  if (profileUpload && profileImg) {
    profileUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          profileImg.src = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Animate hero section elements on load
  const hero = document.querySelector('.hero-content');
  if (hero) {
    setTimeout(() => {
      hero.querySelector('h1').style.opacity = 1;
      hero.querySelector('h1').style.transform = 'none';
    }, 200);
    setTimeout(() => {
      hero.querySelector('.hero-subtitle').style.opacity = 1;
      hero.querySelector('.hero-subtitle').style.transform = 'none';
    }, 500);
    setTimeout(() => {
      hero.querySelector('.cta-button').style.opacity = 1;
      hero.querySelector('.cta-button').style.transform = 'none';
    }, 800);
    setTimeout(() => {
      hero.querySelector('.cta-button.secondary').style.opacity = 1;
      hero.querySelector('.cta-button.secondary').style.transform = 'none';
    }, 1100);
  }
});
