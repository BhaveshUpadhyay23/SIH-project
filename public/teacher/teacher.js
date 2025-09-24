// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    setupThemeToggle();
    loadTeacherInfo();
    loadDashboardStats();
});

// Navigation functionality
function initializeNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');

// Hide all sections
document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
});

// Show selected section
const sectionName = link.dataset.section;
const section = document.getElementById(`${sectionName}-section`);
if (section) {
    section.classList.remove('hidden');
}
    });
});

// Document download functionality
document.querySelectorAll('.doc-download').forEach(button => {
    button.addEventListener('click', (e) => {
const docTitle = e.target.closest('.document-item').querySelector('.doc-title').textContent;
alert(`Downloading: ${docTitle}`);
    });
});

// Doubt form functionality
const doubtForm = document.querySelector('.doubt-submit');
if (doubtForm) {
    doubtForm.addEventListener('click', () => {
const doubtInput = document.querySelector('.doubt-input');
if (doubtInput.value.trim()) {
    alert('Your doubt has been submitted successfully!');
    doubtInput.value = '';
} else {
    alert('Please enter your doubt before submitting.');
}
    });
}

// Add some interactive animations
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
card.style.transform = 'translateY(0) scale(1)';
    });
});

// Simulate real-time updates
setInterval(() => {
    const noticeTime = document.querySelector('.notice-time');
    if (noticeTime && noticeTime.textContent === '2 hours ago') {
noticeTime.textContent = '3 hours ago';
    }
}, 60000); // Update every minute

// Mobile menu toggle (for responsive design)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

// Add mobile menu button for smaller screens
if (window.innerWidth <= 768) {
    const headerTitle = document.querySelector('.welcome-text h1');
    headerTitle.innerHTML = '☰ ' + headerTitle.innerHTML;
    headerTitle.style.cursor = 'pointer';
    headerTitle.addEventListener('click', toggleSidebar);
}

function uploadPDF() {
  const input = document.getElementById('pdfInput');
  const file = input.files[0];

  if (!file) {
    alert('Please select a PDF file.');
    return;
  }

  // Display file info
  document.getElementById('fileInfo').innerText = 
    `Selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;

  // Simulate upload
  setTimeout(() => {
    alert(`"${file.name}" uploaded successfully!`);
  }, 1000);
}
}

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-theme');
    });
}

