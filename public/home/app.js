// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size between 2-6px
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random horizontal position
    particle.style.left = Math.random() * 100 + '%';
       
    // Random animation delay
    particle.style.animationDelay = Math.random() * 15 + 's';
    
    // Random animation duration
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    
    particlesContainer.appendChild(particle);
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
header.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
header.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// Initialize particles
createParticles();

// Smooth scroll for internal links
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

// Add click handlers for auth buttons (you can customize these)
document.querySelectorAll('.btn-login').forEach(btn => {
    btn.addEventListener('click', (e) => {
e.preventDefault();
alert('Login functionality would be implemented here');
    });
});

document.querySelectorAll('.btn-signup').forEach(btn => {
    btn.addEventListener('click', (e) => {
e.preventDefault();
alert('Sign up functionality would be implemented here');
    });
});