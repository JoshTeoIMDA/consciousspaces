// Object to store check-in counts for each question
let responses = {
    mood: { Happy: 0, Stressed: 0, Anxious: 0, Neutral: 0 },
    workload: { Overwhelming: 0, Manageable: 0, Light: 0 },
    energy: { Low: 0, Moderate: 0, High: 0 },
    relationships: { Strained: 0, Neutral: 0, Supportive: 0 },
    stress: { Low: 0, Moderate: 0, High: 0 },
    productivity: { Low: 0, Moderate: 0, High: 0 },
    sleep: { Poor: 0, Fair: 0, Good: 0 },
    social: { Limited: 0, Positive: 0, Overwhelming: 0 },
    balance: { Unbalanced: 0, Somewhat_Balanced: 0, Very_Balanced: 0 },
    gratitude: { Not_at_all: 0, Somewhat: 0, Very: 0 }
};

let totalResponses = 0;

// Function to handle check-in submission
function submitCheckIn() {
    // Get responses for each question
    const formData = new FormData(document.getElementById("checkin-form"));

    // Loop through each response and update counts
    for (let [key, value] of formData.entries()) {
        responses[key][value]++;
    }

    // Increment total responses
    totalResponses++;

    // Update statistics display
    updateStatistics();
}

// Function to update statistics display
function updateStatistics() {
    document.getElementById("happy-count").textContent = getPercentage(responses.mood.Happy);
    document.getElementById("stressed-count").textContent = getPercentage(responses.mood.Stressed);
    document.getElementById("anxious-count").textContent = getPercentage(responses.mood.Anxious);
    document.getElementById("neutral-count").textContent = getPercentage(responses.mood.Neutral);
    // Repeat for other questions if desired
}

// Helper function to calculate percentage
function getPercentage(count) {
    return ((count / totalResponses) * 100).toFixed(1);
}
