const sounds = {
    A: 'clap.mp3',
    S: 'hihat.mp3',
    D: 'kick.mp3',
    F: 'openhat.mp3',
    G: 'boom.mp3',
    H: 'ride.mp3',
    J: 'snare.mp3',
    K: 'tom.mp3',
    L: 'tink.mp3'
};

// Function to play a sound
function playSound(SoundFile) {
    const audio = new Audio(`sounds/${SoundFile}`);
    audio.play();
}

// Function to activate button visually
function activateButton(key) {
    const button = [...document.querySelectorAll('button')].find((btn) => {
        return btn.querySelector('.key').textContent === key;
    });

    if (button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 100);
    }
}

// Add event listeners for key presses
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase(); // get key
    if (sounds[key]) {
        playSound(sounds[key]); // play sound
        activateButton(key);    // activate button effect
    }
});

// Add click event listeners to buttons
document.querySelectorAll('button').forEach((button, index) => {
    const key = Object.keys(sounds)[index]; // match button to key by index
    button.addEventListener('click', () => {
        playSound(sounds[key]);   // play sound
        activateButton(key);      // activate button effect
    });
});
