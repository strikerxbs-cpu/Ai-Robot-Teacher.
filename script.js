/* =========================================
   AI ROBO TEACHER - MAIN SCRIPT
   ========================================= */

let currentQuestions = [];
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrong = 0;
let quizSize = 10;
let currentInstruction = "";


/* =========================================
   ROBO TEACHER
   ========================================= */

function askTeacher() {

    const input = document.getElementById("studentQuestion");
    const answerBox = document.getElementById("answer-box");
    const answerText = document.getElementById("teacherAnswerText");

    if (!input) return;

    const question = input.value.trim();

    if (question === "") {
        alert("আগে একটি প্রশ্ন লিখো।");
        return;
    }

    let answer = "";

    const q = question.toLowerCase();

    /* HTML */
    if (
        q.includes("html") ||
        q.includes("এইচটিএমএল")
    ) {
        answer =
        "HTML হলো ওয়েব পেজ তৈরির মূল কাঠামোর ভাষা। " +
        "HTML দিয়ে ওয়েবসাইটের লেখা, ছবি, বাটন ও বিভিন্ন অংশ তৈরি করা হয়।";
    }

    /* CSS */
    else if (
        q.includes("css") ||
        q.includes("সিএসএস")
    ) {
        answer =
        "CSS ব্যবহার করে ওয়েবসাইটের ডিজাইন ও সাজসজ্জা করা হয়। " +
        "যেমন রং, ফন্ট, আকার, দূরত্ব এবং বাটনের ডিজাইন।";
    }

    /* JavaScript */
    else if (
        q.includes("javascript") ||
        q.includes("জাভাস্ক্রিপ্ট")
    ) {
        answer =
        "JavaScript ওয়েবসাইটকে ইন্টার‌্যাকটিভ বা কাজ করার উপযোগী করে। " +
        "যেমন বাটনে ক্লিক করলে কাজ করা, Quiz চালানো এবং উত্তর দেখানো।";
    }

    /* AI */
    else if (
        q.includes("ai") ||
        q.includes("এআই") ||
        q.includes("কৃত্রিম বুদ্ধিমত্তা")
    ) {
        answer =
        "AI বা কৃত্রিম বুদ্ধিমত্তা হলো এমন প্রযুক্তি, " +
        "যার মাধ্যমে কম্পিউটার মানুষের মতো তথ্য বুঝতে, শেখতে এবং বিভিন্ন কাজ করতে পারে।";
    }

    /* Math */
    else if (
        q.includes("যোগ") ||
        q.includes("+")
    ) {
        answer = "যোগ করতে হলে সংখ্যাগুলো একসাথে যোগ করতে হয়।";
    }

    else if (
        q.includes("বিয়োগ") ||
        q.includes("বিয়োগ")
    ) {
        answer = "বিয়োগ হলো একটি সংখ্যা থেকে অন্য একটি সংখ্যা কমানো।";
    }

    else if (
        q.includes("গুণ")
    ) {
        answer = "গুণ হলো একই সংখ্যাকে নির্দিষ্ট সংখ্যক বার যোগ করার সংক্ষিপ্ত পদ্ধতি।";
    }

    else if (
        q.includes("ভাগ")
    ) {
        answer = "ভাগ হলো একটি সংখ্যাকে সমান কয়েকটি অংশে ভাগ করা।";
    }

    /* Science */
    else if (
        q.includes("বিজ্ঞান") ||
        q.includes("science")
    ) {
        answer =
        "বিজ্ঞান হলো পর্যবেক্ষণ, পরীক্ষা ও প্রমাণের মাধ্যমে প্রকৃতি ও পৃথিবী সম্পর্কে জ্ঞান অর্জনের পদ্ধতি।";
    }

    /* Bangladesh */
    else if (
        q.includes("বাংলাদেশ") ||
        q.includes("ঢাকা")
    ) {
        answer =
        "বাংলাদেশ দক্ষিণ এশিয়ার একটি দেশ। বাংলাদেশের রাজধানী ঢাকা।";
    }

    /* Greetings */
    else if (
        q.includes("হ্যালো") ||
        q.includes("হাই") ||
        q.includes("hello") ||
        q.includes("hi")
    ) {
        answer =
        "হ্যালো! আমি AI Robo Teacher। তোমার প্রশ্ন করো, আমি সাহায্য করার চেষ্টা করব।";
    }

    /* Default */
    else {
        answer =
        "তোমার প্রশ্নটি আমি বুঝেছি। এই বিষয়ে আরও নির্দিষ্টভাবে জানতে " +
        "প্রশ্নটি একটু বিস্তারিতভাবে লিখো। আমি সহজ ভাষায় ব্যাখ্যা করার চেষ্টা করব।";
    }

    currentInstruction = answer;

    if (answerText) {
        answerText.innerText = answer;
    }

    if (answerBox) {
        answerBox.style.display = "block";
    }
}


/* =========================================
   VOICE - বাংলা
   ========================================= */

function speakText() {

    let text = currentInstruction;

    if (!text) {
        const answerText = document.getElementById("teacherAnswerText");

        if (answerText) {
            text = answerText.innerText;
        }
    }

    if (!text || text.trim() === "") {
        alert("আগে Robo Teacher-কে একটি প্রশ্ন করো।");
        return;
    }

    if (!("speechSynthesis" in window)) {
        alert("এই ব্রাউজারে Voice সুবিধা পাওয়া যাচ্ছে না। Chrome ব্যবহার করে চেষ্টা করো।");
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "bn-BD";
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    let banglaVoice = voices.find(function(voice) {
        return (
            voice.lang &&
            (
                voice.lang.toLowerCase().startsWith("bn")
            )
        );
    });

    if (banglaVoice) {
        speech.voice = banglaVoice;
    }

    window.speechSynthesis.speak(speech);
}


/* =========================================
   STOP VOICE
   ========================================= */

function stopVoice() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
}


/* =========================================
   QUIZ START
   ========================================= */

function startQuiz(numberOfQuestions) {

    quizSize = Number(numberOfQuestions);

    const subjectSelect = document.getElementById("subjectSelect");

    if (!subjectSelect) {
        alert("Subject নির্বাচন করা যাচ্ছে না।");
        return;
    }

    const subject = subjectSelect.value;

    let questions = [];

    /* Subject অনুযায়ী Question নেওয়া */

    if (subject === "bangla") {
        questions = window.banglaQuestions || [];
    }

    else if (subject === "english") {
        questions = window.englishQuestions || [];
    }

    else if (subject === "math") {
        questions = window.mathQuestions || [];
    }

    else if (subject === "science") {
        questions = window.scienceQuestions || [];
    }

    else if (subject === "ict") {
        questions = window.ictQuestions || [];
    }

    else if (subject === "bgs") {
        questions = window.bgsQuestions || [];
    }

    if (!Array.isArray(questions) || questions.length === 0) {
        alert("এই বিষয়ের প্রশ্ন পাওয়া যায়নি।");
        return;
    }

    currentQuestions = questions;

    /*
       ৬০টি Quiz করার জন্য প্রশ্ন কম থাকলেও
       প্রশ্নগুলো আবার ব্যবহার করা হবে।
    */

    quizQuestions = [];

    for (let i = 0; i < quizSize; i++) {
        quizQuestions.push(
            currentQuestions[i % currentQuestions.length]
        );
    }

    currentQuestionIndex = 0;
    score = 0;
    wrong = 0;

    showQuizArea();

    showQuestion();
}


/* =========================================
   SHOW QUIZ AREA
   ========================================= */

function showQuizArea() {

    const quizArea = document.getElementById("quizArea");
    const resultArea = document.getElementById("resultArea");

    if (quizArea) {
        quizArea.style.display = "block";
    }

    if (resultArea) {
        resultArea.style.display = "none";
    }

    window.scrollTo({
        top: quizArea ? quizArea.offsetTop : 0,
        behavior: "smooth"
    });
}


/* =========================================
   SHOW QUESTION
   ========================================= */

function showQuestion() {

    if (
        currentQuestionIndex >= quizQuestions.length
    ) {
        finishQuiz();
        return;
    }

    const item = quizQuestions[currentQuestionIndex];

    if (!item) {
        finishQuiz();
        return;
    }

    const questionElement =
        document.getElementById("question");

    const optionsElement =
        document.getElementById("options");

    const numberElement =
        document.getElementById("questionNumber");

    const explanationElement =
        document.getElementById("explanation");

    const explanationText =
        document.getElementById("explanationText");

    const nextButton =
        document.getElementById("nextButton");

    /* Question */

    if (questionElement) {
        questionElement.innerText =
            item.question || "প্রশ্ন পাওয়া যায়নি।";
    }

    /* Number */

    if (numberElement) {
        numberElement.innerText =
            "প্রশ্ন " +
            (currentQuestionIndex + 1) +
            " / " +
            quizQuestions.length;
    }

    /* Options */

    if (optionsElement) {

        optionsElement.innerHTML = "";

        const options = item.options || [];

        options.forEach(function(option, index) {

            const button =
                document.createElement("button");

            button.className = "option-btn";

            button.innerText = option;

            button.onclick = function() {

                checkAnswer(index, item);

            };

            optionsElement.appendChild(button);
        });
    }

    /* Explanation hide */

    if (explanationElement) {
        explanationElement.style.display = "none";
    }

    if (explanationText) {
        explanationText.innerText = "";
    }

    if (nextButton) {
        nextButton.style.display = "none";
    }

    updateProgress();
}


/* =========================================
   CHECK ANSWER
   ========================================= */

function checkAnswer(selectedIndex, item) {

    const optionsElement =
        document.getElementById("options");

    if (!optionsElement) return;

    const buttons =
        optionsElement.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    let correctAnswer = Number(item.answer);

    /*
       তোমার Question ফাইলে answer:
       1 = প্রথম option
       2 = দ্বিতীয় option
       3 = তৃতীয় option
       4 = চতুর্থ option

       তাই answer-কে index-এ রূপান্তর করছি।
    */

    if (correctAnswer >= 1) {
        correctAnswer = correctAnswer - 1;
    }

    if (selectedIndex === correctAnswer) {

        score++;

        if (buttons[selectedIndex]) {
            buttons[selectedIndex].classList.add("correct");
        }

    } else {

        wrong++;

        if (buttons[selectedIndex]) {
            buttons[selectedIndex].classList.add("wrong");
        }

        if (buttons[correctAnswer]) {
            buttons[correctAnswer].classList.add("correct");
        }
    }

    /* Explanation */

    const explanationElement =
        document.getElementById("explanation");

    const explanationText =
        document.getElementById("explanationText");

    if (explanationElement) {
        explanationElement.style.display = "block";
    }

    if (explanationText) {

        explanationText.innerText =
            item.explanation ||
            "সঠিক উত্তরটি হলো: " +
            (
                item.options &&
                item.options[correctAnswer]
                    ? item.options[correctAnswer]
                    : "উল্লেখ করা হয়নি"
            );
    }

    const nextButton =
        document.getElementById("nextButton");

    if (nextButton) {
        nextButton.style.display = "block";
    }

    updateProgress();
}


/* =========================================
   NEXT QUESTION
   ========================================= */

function nextQuestion() {

    currentQuestionIndex++;

    if (
        currentQuestionIndex >= quizQuestions.length
    ) {
        finishQuiz();
        return;
    }

    showQuestion();
}


/* =========================================
   PROGRESS
   ========================================= */

function updateProgress() {

    const progressBar =
        document.getElementById("progressBar");

    if (!progressBar) return;

    const total = quizQuestions.length;

    const current =
        currentQuestionIndex + 1;

    const percent =
        Math.round((current / total) * 100);

    progressBar.style.width =
        percent + "%";
}


/* =========================================
   QUIZ RESULT
   ========================================= */

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

    if (quizArea) {
        quizArea.style.display = "none";
    }

    if (resultArea) {
        resultArea.style.display = "block";
    }

    if (correctCount) {
        correctCount.innerText = score;
    }

    if (wrongCount) {
        wrongCount.innerText = wrong;
    }

    const percentage =
        quizSize > 0
            ? Math.round((score / quizSize) * 100)
            : 0;

    if (resultText) {

        resultText.innerText =
            "তোমার স্কোর: " +
            score +
            " / " +
            quizSize +
            " (" +
            percentage +
            "%)";
    }

    window.scrollTo({
        top: resultArea ? resultArea.offsetTop : 0,
        behavior: "smooth"
    });
}


/* =========================================
   RESTART QUIZ
   ========================================= */

function restartQuiz() {

    const resultArea =
        document.getElementById("resultArea");

    if (resultArea) {
        resultArea.style.display = "none";
    }

    startQuiz(quizSize);
}


/* =========================================
   VOICE READY
   ========================================= */

if ("speechSynthesis" in window) {

    window.speechSynthesis.onvoiceschanged =
        function() {

            window.speechSynthesis.getVoices();

        };
}


/* =========================================
   PAGE READY
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "AI Robo Teacher Ready!"
        );

    }
);
