// Typing animation for name
document.addEventListener('DOMContentLoaded', function () {
  const name = "Moiz Haider";
  const el = document.getElementById('typed-name');
  if (el) {
    let i = 0;
    let isDeleting = false;

    function type() {
      if (!isDeleting && i <= name.length) {
        el.innerHTML = name.substring(0, i) + '<span class="typing-cursor">|</span>';
        i++;
        setTimeout(type, 120);
      } else if (!isDeleting && i > name.length) {
        // Wait before starting to delete
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && i > 0) {
        el.innerHTML = name.substring(0, i - 1) + '<span class="typing-cursor">|</span>';
        i--;
        setTimeout(type, 60);
      } else if (isDeleting && i === 0) {
        // Wait before starting to type again
        setTimeout(() => {
          isDeleting = false;
          type();
        }, 500);
      }
    }
    type();
  }

  // Initialize smooth scrolling and navigation
  initializeParticlesJS();
  initializeNavigation();
  initializeSectionAnimations();
  initializeContactForm();
  initializeParticles();
  initializeFloatingElements();
  initializeMouseTrail();
});

// Initialize Particles.js
function initializeParticlesJS() {
  console.log('Initializing Particles.js...');
  if (typeof particlesJS !== 'undefined') {
    console.log('Particles.js library loaded successfully');

    // Direct initialization with working config
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ff3e3e"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ff8a65",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

    console.log('Particles.js initialized successfully');
  } else {
    console.log('Particles.js library not loaded');
  }
}

// Smooth scroll and nav highlight
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // Update active nav on scroll
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 80;

    sections.forEach(section => {
      const navLink = document.querySelector('.nav-link[href="#' + section.id + '"]');
      if (navLink && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  });
}

// Section reveal animations
function initializeSectionAnimations() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });

  function revealSections() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', revealSections);
  revealSections(); // Initial check
}

// Contact form handling
function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      // Here you would typically send the data to a server
      // For now, we'll just show an alert
      alert(`Thank you ${name}! Your message has been received. I'll get back to you soon.`);
      this.reset();
    });
  }
}

// Skill cards animation on scroll
function animateSkillCards() {
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.8) {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    }
  });
}

// Initialize skill cards animation
document.addEventListener('DOMContentLoaded', function () {
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', animateSkillCards);
  animateSkillCards(); // Initial check
});

// Initialize Particles
function initializeParticles() {
  const particlesContainer = document.getElementById('particles-container');
  const geometricContainer = document.getElementById('geometric-shapes');
  const particleCount = 30; // Reduced for better performance
  const geometricCount = 15;

  // Create lightweight particles
  for (let i = 0; i < particleCount; i++) {
    createModernParticle(particlesContainer);
  }

  // Create geometric shapes
  for (let i = 0; i < geometricCount; i++) {
    createGeometricShape(geometricContainer);
  }
}

function createModernParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';

  // Random particle type
  const types = ['small', 'medium', 'large'];
  particle.classList.add(types[Math.floor(Math.random() * types.length)]);

  // Random position
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';

  // Random animation duration
  const duration = Math.random() * 6 + 6;
  particle.style.animationDuration = duration + 's';

  // Random delay
  const delay = Math.random() * 3;
  particle.style.animationDelay = delay + 's';

  container.appendChild(particle);

  // Remove and recreate particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.remove();
      createModernParticle(container);
    }
  }, (duration + delay) * 1000);
}

function createGeometricShape(container) {
  const shape = document.createElement('div');
  shape.className = 'geometric-shape';

  // Random shape type
  const types = ['triangle', 'square', 'circle'];
  shape.classList.add(types[Math.floor(Math.random() * types.length)]);

  // Random position
  shape.style.left = Math.random() * 95 + '%';
  shape.style.top = Math.random() * 95 + '%';

  // Random animation duration
  const duration = Math.random() * 8 + 10;
  shape.style.animationDuration = duration + 's';

  // Random delay
  const delay = Math.random() * 4;
  shape.style.animationDelay = delay + 's';

  container.appendChild(shape);

  // Remove and recreate shape after animation
  setTimeout(() => {
    if (shape.parentNode) {
      shape.remove();
      createGeometricShape(container);
    }
  }, (duration + delay) * 1000);
}

// Initialize Floating Elements
function initializeFloatingElements() {
  const floatingContainer = document.getElementById('floating-elements');
  const techSymbols = ['</', '{}', '[]', '()', '<>', '&&', '||', '=='];
  const techWords = ['JS', 'CSS', 'HTML', 'REACT', 'NODE'];
  const symbols = ['●', '◆', '▲', '■'];

  // Create tech symbols (smaller, more subtle)
  techSymbols.forEach((symbol, index) => {
    const element = document.createElement('div');
    element.className = 'floating-element tech';
    element.textContent = symbol;
    element.style.left = Math.random() * 90 + '%';
    element.style.top = Math.random() * 90 + '%';
    element.style.animationDelay = (index * 0.8) + 's';
    floatingContainer.appendChild(element);
  });

  // Create tech words (fewer, more strategic)
  techWords.forEach((word, index) => {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.textContent = word;
    element.style.left = Math.random() * 85 + '%';
    element.style.top = Math.random() * 85 + '%';
    element.style.animationDelay = (index * 1.2) + 's';
    floatingContainer.appendChild(element);
  });

  // Create symbols (minimal)
  symbols.forEach((symbol, index) => {
    const element = document.createElement('div');
    element.className = 'floating-element symbol';
    element.textContent = symbol;
    element.style.left = Math.random() * 95 + '%';
    element.style.top = Math.random() * 95 + '%';
    element.style.animationDelay = (index * 1.5) + 's';
    floatingContainer.appendChild(element);
  });
}

// Initialize Mouse Trail Effect
function initializeMouseTrail() {
  let mouseX = 0;
  let mouseY = 0;
  let isMoving = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;

    // Create subtle particle trail
    if (Math.random() < 0.05) { // Less frequent for better performance
      createTrailParticle(mouseX, mouseY);
    }

    // Clear moving flag after a delay
    setTimeout(() => {
      isMoving = false;
    }, 100);
  });

  // Add hover effects to interactive elements
  document.querySelectorAll('.btn-cv, .skill-card, .contact-form button').forEach(element => {
    element.addEventListener('mouseenter', function (e) {
      createHoverEffect(e.target);
    });
  });

  function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.background = 'rgba(255, 62, 62, 0.6)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'fadeOut 0.8s ease-out forwards';

    document.body.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.remove();
      }
    }, 800);
  }

  function createHoverEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = centerX + (Math.random() - 0.5) * 40 + 'px';
        particle.style.top = centerY + (Math.random() - 0.5) * 40 + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#ff8a65';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.animation = 'hoverExpand 0.6s ease-out forwards';

        document.body.appendChild(particle);

        setTimeout(() => {
          if (particle.parentNode) {
            particle.remove();
          }
        }, 600);
      }, i * 50);
    }
  }
}

// Add click ripple effect
document.addEventListener('click', function (e) {
  const ripple = document.createElement('div');
  ripple.style.position = 'fixed';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  ripple.style.width = '20px';
  ripple.style.height = '20px';
  ripple.style.background = 'rgba(255, 62, 62, 0.6)';
  ripple.style.borderRadius = '50%';
  ripple.style.transform = 'translate(-50%, -50%)';
  ripple.style.pointerEvents = 'none';
  ripple.style.zIndex = '9999';
  ripple.style.animation = 'rippleEffect 0.8s ease-out forwards';

  document.body.appendChild(ripple);

  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.remove();
    }
  }, 800);
});

// Add ripple effect animation to CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
  @keyframes rippleEffect {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize Particles.js
  initializeParticlesJS();

  // Typing animation
  const typingText = document.getElementById('typing-text');
  const texts = ['Web Developer', 'Front-End Developer', 'UI/UX Designer', 'Full-Stack Developer'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 200);
    } else {
      setTimeout(type, isDeleting ? 100 : 150);
    }
  }

  type();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navigation active state
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
});