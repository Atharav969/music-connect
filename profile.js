// Initialize videos for reels
document.querySelectorAll('.reel video').forEach(video => {
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

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Booking form handling
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        eventDate: document.getElementById('event-date').value,
        eventType: document.getElementById('event-type').value,
        duration: document.getElementById('duration').value,
        venue: document.getElementById('venue').value,
        notes: document.getElementById('notes').value
    };

    // Calculate estimated price
    const baseRate = 25000;
    const additionalHourRate = 5000;
    const hours = parseInt(formData.duration);
    const additionalHours = Math.max(0, hours - 4);
    const totalPrice = baseRate + (additionalHours * additionalHourRate);
    const advancePayment = totalPrice * 0.5;

    // Show booking summary
    const confirmBooking = confirm(
        `Booking Summary:\n\n` +
        `Event Date: ${formData.eventDate}\n` +
        `Event Type: ${formData.eventType}\n` +
        `Duration: ${hours} hours\n` +
        `Venue: ${formData.venue}\n\n` +
        `Total Price: ₹${totalPrice}\n` +
        `Advance Payment (50%): ₹${advancePayment}\n\n` +
        `Would you like to proceed with the advance payment?`
    );

    if (confirmBooking) {
        // This would integrate with a payment gateway in production
        alert('Redirecting to payment gateway...');
    }
});

// Date validation - Prevent past dates
const eventDateInput = document.getElementById('event-date');
const today = new Date().toISOString().split('T')[0];
eventDateInput.min = today;

// Dynamic price calculation
const durationSelect = document.getElementById('duration');
durationSelect.addEventListener('change', () => {
    const hours = parseInt(durationSelect.value);
    const additionalHours = Math.max(0, hours - 4);
    const totalPrice = 25000 + (additionalHours * 5000);
    
    // Update price card if needed
    // This could be enhanced to show real-time price updates
});