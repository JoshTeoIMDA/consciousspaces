document.addEventListener("DOMContentLoaded", function () {
    const results = JSON.parse(localStorage.getItem("wellbeingResults"));

    function getSmiley(score) {
        if (score >= 4.5) return "🌞";
        if (score >= 3.5) return "😊";
        if (score >= 2.5) return "😐";
        if (score >= 1.5) return "😕";
        return "😢";
    }

    document.getElementById("emotionalResult").innerHTML = `
        <span>${getSmiley(results.emotional)}</span> Emotional Well-Being: ${results.emotional.toFixed(1)}
    `;
    document.getElementById("mentalResult").innerHTML = `
        <span>${getSmiley(results.mental)}</span> Mental Well-Being: ${results.mental.toFixed(1)}
    `;
    document.getElementById("workResult").innerHTML = `
        <span>${getSmiley(results.work)}</span> Work-Related Well-Being: ${results.work.toFixed(1)}
    `;
});
