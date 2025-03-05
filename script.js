const lessons = [
    { title: "Lesson 1: Greetings", content: "Hello = नमस्ते", audio: "hello.mp3" },
    { title: "Lesson 2: Common Words", content: "Thank you = धन्यवाद", audio: "thankyou.mp3" },
    { title: "Lesson 3: Asking for Help", content: "Help me = मेरी मदद करो", audio: "helpme.mp3" }
];

let lessonIndex = 0;

function loadLesson() {
    if (lessonIndex < lessons.length) {
        document.getElementById("lesson-title").innerText = lessons[lessonIndex].title;
        document.getElementById("lesson-content").innerText = lessons[lessonIndex].content;
        document.getElementById("lesson-audio").src = lessons[lessonIndex].audio;
    } else {
        document.getElementById("lesson-container").classList.add("hidden");
        document.getElementById("quiz-container").classList.remove("hidden");
    }
}

function nextLesson() {
    lessonIndex++;
    loadLesson();
}

const quiz = [
    { question: "How do you say 'Hello' in Hindi?", answer: "namaste" },
    { question: "Translate 'Thank you' into Hindi.", answer: "dhanyavad" }
];

let quizIndex = 0;

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim();
    if (userAnswer === quiz[quizIndex].answer) {
        document.getElementById("feedback").innerText = "✅ Correct!";
        quizIndex++;
        if (quizIndex < quiz.length) {
            document.getElementById("question").innerText = quiz[quizIndex].question;
            document.getElementById("answer").value = "";
        } else {
            document.getElementById("feedback").innerText += " 🎉 Quiz Completed!";
        }
    } else {
        document.getElementById("feedback").innerText = "❌ Try Again!";
    }
}

document.getElementById("question").innerText = quiz[0].question;

loadLesson();
