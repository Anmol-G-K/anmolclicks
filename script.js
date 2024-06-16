// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        duration: 1200, // animation duration in milliseconds
    });

    // Add additional JavaScript functionality as needed
    // Example: Event listeners, AJAX requests, etc.
});

// Function to open modal
function openModal(title, camera, shutterSpeed, aperture, iso, description) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    var modalTitle = document.getElementById('modal-title');
    var modalCamera = document.getElementById('modal-camera');
    var modalShutterSpeed = document.getElementById('modal-shutter-speed');
    var modalAperture = document.getElementById('modal-aperture');
    var modalIso = document.getElementById('modal-iso');

    if (modal && modalTitle && modalCamera && modalShutterSpeed && modalAperture && modalIso) {
        modalImage.src = event.target.src;
        modalTitle.textContent = title;
        modalCamera.textContent = "Camera: " + camera;
        modalShutterSpeed.textContent = "Shutter Speed: " + shutterSpeed;
        modalAperture.textContent = "Aperture: " + aperture;
        modalIso.textContent = "ISO: " + iso;

        modal.style.display = 'block';
        document.body.classList.add('modal-open'); // Add class to body for background blur effect
    } else {
        console.error('One or more modal elements not found.');
    }
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Remove class from body to remove background blur effect
}


// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
