// ===================================
// PARTICLES.JS CONFIGURATION
// ===================================
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#667eea'
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#667eea',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ===================================
// AOS (ANIMATE ON SCROLL)
// ===================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================================
// TYPED TEXT ANIMATION
// ===================================
const typedTextElement = document.getElementById('typed-text');
const textArray = [
    'PhD Student in AI Safety',
    'Adversarial ML Researcher',
    'Automotive Cybersecurity Expert',
    'Open Source Contributor'
];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
    const currentText = textArray[textArrayIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typingDelay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        typingDelay = 500;
    }
    
    setTimeout(typeText, typingDelay);
}

// Start typing animation after page load
window.addEventListener('load', () => {
    setTimeout(typeText, 1000);
});

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.research-card, .project-card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ===================================
// CURSOR GLOW EFFECT (OPTIONAL)
// ===================================
const createCursorGlow = () => {
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(102, 126, 234, 0.4), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        filter: blur(10px);
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(glow);
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX - 10 + 'px';
        glow.style.top = e.clientY - 10 + 'px';
    });
};

// Uncomment to enable cursor glow
// createCursorGlow();

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c👋 Hi there!', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cInterested in AI Safety & Adversarial ML?', 'color: #764ba2; font-size: 16px;');
console.log('%cLet\'s connect! 🚀', 'color: #f093fb; font-size: 14px;');
console.log('%chttps://github.com/KeyvanHardani', 'color: #667eea; font-size: 12px;');
