import './style.css'

// Select all elements with class 'key'
const keys = document.querySelectorAll('.key');

// Function to play sound
function playSound(event) {
    // Find corresponding audio element based on data-key attribute
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // If audio element exists, play it
    if (audio) {
        audio.currentTime = 0; // Rewind to the start
        audio.play();
    }
}

// Event listener for keydown event on the whole window
window.addEventListener('keydown', playSound);

// Event listeners for click events on drum elements
keys.forEach(key => {
    key.addEventListener('click', function() {
        // Find corresponding audio element based on data-key attribute
        const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
        // If audio element exists, play it
        if (audio) {
            audio.currentTime = 0; // Rewind to the start
            audio.play();
        }
    });
});