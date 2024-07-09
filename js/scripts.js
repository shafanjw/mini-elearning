function checkAnswers() {
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value === "HyperText Markup Language") score++;
    if (q2 && q2.value === "Cascading Style Sheets") score++;

    const results = document.getElementById('results');
    results.innerText = `Kamu berhasil menjawab ${score} dari 2 pertanyaan!`;
}