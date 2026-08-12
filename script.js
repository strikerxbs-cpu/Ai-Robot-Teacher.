// ========================================
// AI ROBO TEACHER - FINAL SCRIPT
// ========================================

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let wrong = 0;
let totalQuestions = 10;
let selectedSubject = "";

// ----------------------------------------
// Subject অনুযায়ী প্রশ্ন নেওয়া
// ----------------------------------------
function getQuestions(subject) {

    subject = String(subject).toLowerCase().trim();

    if (subject === "bangla") {
        return typeof banglaQuestions !== "undefined"
            ? banglaQuestions
            : [];
    }

    if (subject === "english") {
        return typeof englishQuestions !== "undefined"
            ? englishQuestions
            : [];
    }

    if (subject === "math") {
        return typeof mathQuestions !== "undefined"
            ? mathQuestions
            : [];
    }

    if (subject === "science") {
        return typeof scienceQuestions !== "undefined"
            ? scienceQuestions
            : [];
    }

    if (subject === "ict") {
        return typeof ictQuestions !== "undefined"
            ? ictQuestions
            : [];
    }

    if (subject === "bgs") {
        return typeof bgsQuestions !== "undefined"
            ? bgsQuestions
            : [];
    }

    return [];
}


// ----------------------------------------
// Quiz শুরু
// ----------------------------------------
function startQuiz(amount) {

    const subjectBox = document.getElementById("subjectSelect");

    if (!subjectBox) {
        alert("Subject নির্বাচন করার জায়গা পাওয়া যায়নি।");
        return;
    }

    selectedSubject = subjectBox.value;

    totalQuestions = Number(amount);

    let questions = getQuestions(selectedSubject);

    if (!questions || questions.length === 0) {

        alert(
            "এই বিষয়ের প্রশ্ন পাওয়া যায়নি।\n\n" +
            "Subject: " + selectedSubject
        );

        return;
    }

    // সর্বোচ্চ যত প্রশ্ন আছে
    totalQuestions = Math.min(
        totalQuestions,
        questions.length
    );

    // প্রশ্ন এলোমেলো
    currentQuestions = [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, totalQuestions);

    currentIndex = 0;
    score = 0;
    wrong = 0;

    // Quiz area দেখানো
    const quizArea = document.getElementById("quizArea");

    if (quizArea) {
        quizArea.style.display = "block";
    }

    showQuestion();
}


// ----------------------------------------
// প্রশ্ন দেখানো
// ----------------------------------------
function showQuestion() {

    if (
        !currentQuestions ||
        currentIndex >= currentQuestions.length
    ) {
        finishQuiz();
        return;
    }

    const q = currentQuestions[currentIndex];

    const questionBox =
        document.getElementById("question");

    const optionsBox =
        document.getElementById("options");

    const questionNumber =
        document.getElementById("questionNumber");

    const progressBar =
        document.getElementById("progressBar");

    const explanation =
        document.getElementById("explanation");

    const explanationText =
        document.getElementById("explanationText");

    const nextButton =
        document.getElementById("nextButton");


    // প্রশ্ন
    if (questionBox) {

        questionBox.innerText =
            q.question;
    }


    // প্রশ্ন নম্বর
    if (questionNumber) {

        questionNumber.innerText =
            "প্রশ্ন " +
            (currentIndex + 1) +
            " / " +
            totalQuestions;
    }


    // Progress bar
    if (progressBar) {

        const percent =
            ((currentIndex) / totalQuestions) * 100;

        progressBar.style.width =
            percent + "%";
    }


    // Explanation লুকানো
    if (explanation) {
        explanation.style.display = "none";
    }

    if (explanationText) {
        explanationText.innerText = "";
    }


    // Next button লুকানো
    if (nextButton) {
        nextButton.style.display = "none";
    }


    // Options
    if (optionsBox) {

        optionsBox.innerHTML = "";

        q.options.forEach(function(option, index) {

            const button =
                document.createElement("button");

            button.className =
                "option-btn";

            button.innerText =
                option;

            button.onclick = function() {

                checkAnswer(index);
            };

            optionsBox.appendChild(button);

        });
    }
}


// ----------------------------------------
// উত্তর যাচাই
// ----------------------------------------
function checkAnswer(selectedAnswer) {

    const q =
        currentQuestions[currentIndex];

    if (!q) return;


    const buttons =
        document.querySelectorAll(".option-btn");


    // সব button বন্ধ
    buttons.forEach(function(button) {

        button.disabled = true;

    });


    // সঠিক উত্তর
    if (selectedAnswer === Number(q.answer)) {

        score++;

    } else {

        wrong++;

    }


    // সঠিক/ভুল দেখানো
    buttons.forEach(function(button, index) {

        if (index === Number(q.answer)) {

            button.style.border =
                "3px solid green";

        }

        if (
            index === selectedAnswer &&
            selectedAnswer !== Number(q.answer)
        ) {

            button.style.border =
                "3px solid red";

        }

    });


    // Explanation
    const explanation =
        document.getElementById("explanation");

    const explanationText =
        document.getElementById("explanationText");

    if (explanation && explanationText) {

        explanation.style.display =
            "block";

        explanationText.innerText =
            selectedAnswer === Number(q.answer)
                ? "✅ সঠিক উত্তর!"
                : "❌ ভুল উত্তর। সঠিক উত্তর: " +
                  q.options[q.answer];

    }


    // Next button
    const nextButton =
        document.getElementById("nextButton");

    if (nextButton) {

        nextButton.style.display =
            "block";
    }
}


// ----------------------------------------
// পরের প্রশ্ন
// ----------------------------------------
function nextQuestion() {

    currentIndex++;

    if (
        currentIndex <
        currentQuestions.length
    ) {

        showQuestion();

    } else {

        finishQuiz();

    }
}


// ----------------------------------------
// Quiz শেষ
// ----------------------------------------
function finishQuiz() {

    const quizArea =
        document.getElementById("quizArea");

    const resultArea =
        document.getElementById("resultArea");

    const correctCount =
        document.getElementById("correctCount");

    const wrongCount =
        document.getElementById("wrongCount");

    const resultText =
        document.getElementById("resultText");

    const progressBar =
        document.getElementById("progressBar");


    if (quizArea) {

        quizArea.style.display =
            "none";
    }


    if (resultArea) {

        resultArea.style.display =
            "block";
    }


    if (correctCount) {

        correctCount.innerText =
            score;
    }


    if (wrongCount) {

        wrongCount.innerText =
            wrong;
    }


    if (resultText) {

        const percentage =
            Math.round(
                (score / totalQuestions) * 100
            );

        resultText.innerText =
            "তোমার স্কোর: " +
            score +
            " / " +
            totalQuestions +
            " (" +
            percentage +
            "%)";
    }


    if (progressBar) {

        progressBar.style.width =
            "100%";
    }
}


// ----------------------------------------
// আবার Quiz
// ----------------------------------------
function restartQuiz() {

    const resultArea =
        document.getElementById("resultArea");

    if (resultArea) {

        resultArea.style.display =
            "none";
    }

    startQuiz(totalQuestions);
}


// ----------------------------------------
// Robo Teacher
// ----------------------------------------
function askTeacher() {

    const input =
        document.getElementById("studentQuestion");

    const answerBox =
        document.getElementById("teacherAnswer");

    const answerText =
        document.getElementById("teacherAnswerText");

    if (!input) return;

    const question =
        input.value.trim();

    if (!question) {

        alert("আগে একটি প্রশ্ন লিখুন।");

        return;
    }


    let answer =
        "আমি Robo Teacher। তোমার প্রশ্নটি বুঝে উত্তর দেওয়ার চেষ্টা করছি।";


    if (
        question.includes("HTML") ||
        question.includes("html")
    ) {

        answer =
            "HTML হলো ওয়েব পেজ তৈরির মূল কাঠামোর ভাষা।";

    } else if (
        question.includes("CSS") ||
        question.includes("css")
    ) {

        answer =
            "CSS ওয়েব পেজের ডিজাইন ও সাজসজ্জা নিয়ন্ত্রণ করে।";

    } else if (
        question.includes("বাংলা")
    ) {

        answer =
            "বাংলা আমাদের মাতৃভাষা।";

    } else if (
        question.includes("গণিত")
    ) {

        answer =
            "গণিত হলো সংখ্যা, পরিমাণ, আকৃতি ও সম্পর্ক নিয়ে অধ্যয়ন।";
    }


    if (answerText) {

        answerText.innerText =
            answer;
    }


    if (answerBox) {

        answerBox.style.display =
            "block";
    }
}


// ----------------------------------------
// Voice
// ----------------------------------------
function speakText() {

    const answerText =
        document.getElementById(
            "teacherAnswerText"
        );

    if (!answerText) return;

    const text =
        answerText.innerText;

    if (!text) return;

    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();

        const speech =
            new SpeechSynthesisUtterance(text);

        speech.lang = "bn-BD";

        speech.rate = 0.9;

        speech.pitch = 1;

        speech.volume = 1;

        window.speechSynthesis.speak(
            speech
        );

    } else {

        alert(
            "এই ফোনে Voice সুবিধা পাওয়া যায়নি।"
        );
    }
}


// ----------------------------------------
// Page Ready
// ----------------------------------------
document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "AI Robo Teacher Ready!"
        );

    }
);
