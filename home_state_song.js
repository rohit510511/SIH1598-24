
function showFullscreen(stateId, musicFile, stateName) {
    // Clone the selected state path and append it to the fullscreen overlay
    const statePath = document.getElementById('state-' + stateId).cloneNode(true);
    const fullscreenMap = document.getElementById('fullscreen-map');
    fullscreenMap.innerHTML = '';  // Clear any previous content
    fullscreenMap.appendChild(statePath);

    // Show the fullscreen overlay
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    fullscreenOverlay.style.display = 'flex';

    // Set the state name in the overlay
    const fullscreenText = document.getElementById('fullscreen-text');
    fullscreenText.innerText = stateName;

    // Play the background music for the state
    const audio = document.getElementById('state-music');
    audio.src = musicFile;
    audio.play();

    // Redirect to a state-specific heritage page after 3 seconds
    setTimeout(() => {
        window.location.href = stateId + "-heritage.html";
    }, 3000);
}

// Hide fullscreen overlay on click (optional)
document.getElementById('fullscreen-overlay').onclick = function() {
    this.style.display = 'none';
    document.getElementById('state-music').pause();
};
// Array holding information for each state
const states = [
    { id: 'INMH', music: 'maharashtra-rajya-geet.wav', name: 'Maharashtra' },
    { id: 'INRJ', music: 'rajasthan-music.wav', name: 'Rajasthan' },
    // Add more states as needed
];

// Loop through each state and add an event listener
states.forEach(state => {
    document.getElementById('state-' + state.id).addEventListener('click', function() {
        showFullscreen(state.id, state.music, state.name);
    });
});


var audio = new Audio();
audio.src = "maharashtra-rajya-geet.wav";

// Add an event listener to the path element
var path = document.getElementById("INMH");
path.addEventListener("mouseover", function() {
audio.play();

});
