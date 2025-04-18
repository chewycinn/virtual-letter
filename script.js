function openLetter() {
    document.querySelector(".letter-content").classList.remove("hidden");
    document.getElementById("opening-audio").play();
}

function setMessage() {
    const message = document.getElementById("message-input").value;
    document.getElementById("personal-message").textContent = message;
}
