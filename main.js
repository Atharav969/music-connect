// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize videos for reels
const videos = document.querySelectorAll('.reel video');
videos.forEach(video => {
    // Play videos when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(video);

    // Add click to play/pause functionality
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Booking button functionality
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', () => {
        // This would open the booking modal in a real implementation
        alert('Booking functionality would be implemented here with:\n\n1. Date selection\n2. Time selection\n3. Advance payment (25-50%)\n4. Chat initiation with artist');
    });
});

// Search functionality
const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // This would trigger the search in a real implementation
        alert(`Searching for: ${searchTerm}`);
    }
});

// Category card hover effects
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});