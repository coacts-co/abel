// Simple JS for visual effects or smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ensure this script does not alter any background colors
// Previously this script could have influenced the background colors dynamically
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.glass-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // The script no longer adjusts background colors, focusing only on depth effects
            let shadowIntensity = Math.min(0.2, 0.1 + (rect.top + 100) / window.innerHeight * 0.1);
            section.style.boxShadow = `0 5px 15px rgba(0, 0, 0, ${shadowIntensity})`;
        }
    });
});

// Temporarily disabling the CSS transitions on the `header h1` element
// and then re-enabling it after a brief timeout.
//
// This ensures that the transition is not immediately retriggered after
// the header, which is anchored to `index.html`, is clicked and the page
// reloaded.

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header h1');
    
    // Temporarily disable hover effects
    header.classList.add('no-hover');

    // Re-enable hover effects after 500 milliseconds
    setTimeout(function() {
        header.classList.remove('no-hover');
    }, 1000); // You can adjust this delay based on your needs
});
