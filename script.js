document.getElementById('wax-seal').addEventListener('click', openLetter);
document.getElementById('open-letter-button').addEventListener('click', showMessage);

function openLetter() {
    // Show the letter introduction
    document.getElementById('letter-intro').classList.remove('hidden');
    // Optionally, play the audio when the wax seal is clicked
    const audio = document.getElementById('opening-audio');
    audio.play();
}

function showMessage() {
    // Hide the introduction and show the letter content
    document.getElementById('letter-intro').classList.add('hidden');
    document.getElementById('letter-content').classList.remove('hidden');
}
