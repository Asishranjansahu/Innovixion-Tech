function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');

    let score = 0;
    const answers = {
        q1: 'jupiter',
        q2: 'Naveen Pattnaik',
        q3: 'microsoft',
        q4: '10080',
        q5: 'Lamb',
    };

    for (const question in answers) {
        const selectedOption = form[question].value;
        if (selectedOption === answers[question]) {
            score++;
        }
    }
    resultContainer.style.display = 'block';
    scoreElement.textContent = `Your score: ${score} out of ${Object.keys(answers).length}`;
}
