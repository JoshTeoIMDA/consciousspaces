// script.js
let entries = [];

// Function to add entry to the table and dataset
function addEntry() {
  const date = document.getElementById("date").value;
  const mood = parseInt(document.getElementById("mood").value);
  const stress = parseInt(document.getElementById("stress").value);
  const sleepQuality = document.getElementById("sleepQuality").value;
  const socialEngagement = document.getElementById("socialEngagement").value;

  if (date && mood && stress) {
    const entry = { date, mood, stress, sleepQuality, socialEngagement };
    entries.push(entry);
    updateTable();
    updateChart();
  }
}

// Function to update the table display
function updateTable() {
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";
  entries.forEach((entry) => {
    const row = `<tr>
      <td>${entry.date}</td>
      <td>${entry.mood}</td>
      <td>${entry.stress}</td>
      <td>${entry.sleepQuality}</td>
      <td>${entry.socialEngagement}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

// Initialize Chart.js Line Chart
const moodCtx = document.getElementById("moodChart").getContext("2d");
const moodChart = new Chart(moodCtx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Mood",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Stress",
        data: [],
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: { display: true, title: { display: true, text: "Date" } },
      y: { display: true, title: { display: true, text: "Level (1-10)" } },
    },
  },
});

// Update Chart Data
function updateChart() {
  moodChart.data.labels = entries.map((entry) => entry.date);
  moodChart.data.datasets[0].data = entries.map((entry) => entry.mood);
  moodChart.data.datasets[1].data = entries.map((entry) => entry.stress);
  moodChart.update();
}
