document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve answers
    let q1 = document.querySelector('input[name="q1"]:checked');
    // Add similar lines to retrieve answers for other questions

    // Calculate scores based on answers
    let scores = {
        'direct': 0,
        'indirect': 0,
        'shaded': 0
        // Add more options as needed
    };

    if (q1) {
        scores[q1.value]++;
    }
    // Add similar conditions to update scores for other questions

    // Determine result based on scores
    let maxScore = Math.max(scores.direct, scores.indirect, scores.shaded);
    let result = '';

    if (maxScore === scores.direct) {
        result = 'You should consider plants that thrive in direct sunlight.';
    } else if (maxScore === scores.indirect) {
        result = 'Plants suited for partial sunlight might be best for you.';
    } else if (maxScore === scores.shaded) {
        result = 'Shade-loving plants would be ideal for your space.';
    }

    // Display result
    document.getElementById('result').innerHTML = '<p>' + result + '</p>';
});
