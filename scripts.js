// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Navigation Menu Toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-right').classList.toggle('active');
});

// Modal for Projects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.querySelector('#project-modal');
        modal.classList.add('active');
        // Optionally load more project details dynamically here
    });
});

document.querySelector('#modal-close').addEventListener('click', () => {
    document.querySelector('#project-modal').classList.remove('active');
});

// Image Slider/Carousel (Example for Portfolio Items)
let slideIndex = 0;
const slides = document.querySelectorAll('.portfolio-item img');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
