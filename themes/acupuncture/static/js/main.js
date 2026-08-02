document.addEventListener('DOMContentLoaded', function() {
// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
navToggle.addEventListener('click', function() {
this.classList.toggle('active');
mainNav.classList.toggle('open');
const expanded = this.classList.contains('active');
this.setAttribute('aria-expanded', expanded);
});
}

// Hero Image Randomizer
const heroImagesContainer = document.querySelector('.hero-images');
if (heroImagesContainer) {
const poolAttr = heroImagesContainer.getAttribute('data-hero-pool');
if (poolAttr) {
try {
const images = JSON.parse(poolAttr);
if (images && images.length > 1) {
const randomImage = images[Math.floor(Math.random() * images.length)];
heroImagesContainer.style.backgroundImage = `url('${randomImage}')`;
}
} catch (e) {
console.error("Error loading hero images:", e);
}
}
}
});
