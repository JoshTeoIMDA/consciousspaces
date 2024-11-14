function submitCheckIn() {
    const formData = new FormData(document.getElementById("checkin-form"));

    const categories = {
        emotional: { total: 0, count: 0 },
        mental: { total: 0, count: 0 },
        work: { total: 0, count: 0 },
    };

    formData.forEach((value, key) => {
        const score = parseInt(value);

        // Classify each question into a category
        if (["mood", "connected", "positivity", "emotions", "joy"].includes(key)) {
            categories.emotional.total += score;
            categories.emotional.count++;
        } else if (["focus", "challenges", "clarity", "stress", "energy"].includes(key)) {
            categories.mental.total += score;
            categories.mental.count++;
        } else if (["workload", "motivation", "productivity", "balance", "appreciation"].includes(key)) {
            categories.work.total += score;
            categories.work.count++;
        }
    });

    // Calculate averages for each category
    const results = {
        emotional: categories.emotional.total / categories.emotional.count,
        mental: categories.mental.total / categories.mental.count,
        work: categories.work.total / categories.work.count,
    };

    // Store results in localStorage
    localStorage.setItem("wellbeingResults", JSON.stringify(results));

    // Redirect to results page
    window.location.href = "results.html";
}
