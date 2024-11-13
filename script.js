function trackMood() {
    const mood = prompt("How are you feeling today?");
    document.getElementById("mood-output").textContent = "You are feeling: " + mood;
}
