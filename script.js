// script.js

// Array of wellness tips
const tips = [
  "Take a moment to focus on your breathing.",
  "Write down three things you're grateful for.",
  "Try a quick 5-minute meditation.",
  "Take a short walk and notice your surroundings.",
  "Listen to your favorite calming music."
];

// Function to show a new tip
function showNewTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip-content").textContent = randomTip;
}

// Activity details for each exercise
const activities = {
  "4-7-8 Breathing": "Inhale for 4 seconds, hold for 7 seconds, and exhale slowly for 8 seconds. Repeat for a few rounds.",
  "Box Breathing": "Inhale for 4 counts, hold for 4 counts, exhale for 4 counts, and hold again for 4 counts. Repeat 4-5 rounds.",
  "Alternate Nostril Breathing": "Close your right nostril, inhale through the left. Switch nostrils and exhale. Then inhale through the right, switch, and exhale through the left.",
  "Basic Yoga Poses": "Try poses like Downward Dog, Child’s Pose, or Cat-Cow. Hold each pose for a few breaths, focusing on your alignment and breathing.",
  "Body Scan Meditation": "Lie down and focus on each part of your body, from your toes to your head, releasing tension as you go.",
  "Mindful Eating": "Take small bites, chew slowly, and notice the flavors and textures of your food.",
  "Walking in Nature": "Walk slowly, paying attention to the sounds, smells, and sights around you. Let nature relax your mind.",
  "Outdoor Meditation": "Find a quiet spot outside, sit comfortably, and focus on your breathing or the sounds around you.",
  "Sun Salutation": "Practice a few rounds of Sun Salutations, ideally during sunrise or sunset to connect with nature."
};

// Function to display activity details
function showActivityDetail(activity) {
  const details = activities[activity];
  alert(details);  // Display details in an alert
}

// Calculate survey results based on responses
function calculateSurveyResults() {
  const form = document.getElementById('survey-form');
  const workStress = form.elements['work-stress'].value;
  const personalStress = form.elements['personal-stress'].value;
  const selfCare = form.elements['self-care'].value;
  const sleepQuality = form.elements['sleep-quality'].value;
  const exerciseFrequency = form.elements['exercise-frequency'].value;

  let stressLevel;

  if (
    workStress === "always" || personalStress === "not-at-all" || 
    selfCare === "never" || sleepQuality === "poor" || 
    exerciseFrequency === "never"
  ) {
    stressLevel = "High Stress";
  } else if (
    workStress === "often" || personalStress === "poorly" || 
    selfCare === "rarely" || sleepQuality === "fair" || 
    exerciseFrequency === "rarely"
  ) {
    stressLevel = "Moderate Stress";
  } else {
    stressLevel = "Low Stress";
  }

  const resultElement = document.getElementById('survey-result');
  resultElement.textContent = `Your stress level is: ${stressLevel}. Consider prioritizing sleep and regular exercise as part of your stress management strategy.`;
}
