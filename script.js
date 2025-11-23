let questions = [
    {
        question: "¿Qué es el hardware neuromórfico?",
        answers: ["Un sistema inspirado en el cerebro", "Un tipo de pantalla", "Un robot humanoide"],
        correct: 0
    },
    {
        question: "¿Qué imitan las redes neuromórficas?",
        answers: ["El sistema nervioso humano", "El sistema solar", "La red eléctrica"],
        correct: 0
    },
    {
        question: "¿Cuál es una ventaja del hardware neuromórfico?",
        answers: ["Bajo consumo de energía", "Hace café", "Solo sirve para videojuegos"],
        correct: 0
    },
    {
        question: "¿Qué elemento imitan las neuronas artificiales?",
        answers: ["Neurona biológica", "Célula sanguínea", "Glóbulos blancos"],
        correct: 0
    },
    {
        question: "¿Dónde se usa esta tecnología?",
        answers: ["Robótica e IA", "Agricultura", "Gastronomía"],
        correct: 0
    }
];

let index = 0;
let score = 0;

function startQuiz() {
    document.getElementById("start-box").style.display = "none";
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    let q = questions[index];
    document.getElementById("question").innerText = q.question;

    let answersHTML = "";
    q.answers.forEach((a, i) => {
        answersHTML += `<button onclick="selectAnswer(${i})">${a}</button>`;
    });
    document.getElementById("answers").innerHTML = answersHTML;
}

function selectAnswer(i) {
    if (i === questions[index].correct) score++;
    index++;

    if (index >= questions.length) finish();
    else loadQuestion();
}

function finish() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").innerHTML =
        `<h2>Resultado final</h2>
         <p>Aciertos: ${score}</p>
         <p>Fallos: ${questions.length - score}</p>`;
}
