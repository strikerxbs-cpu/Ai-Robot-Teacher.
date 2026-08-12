// ===============================
// AI SCHOOL QUIZ - script.js
// ===============================

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedSubject = "";
let totalQuestions = 10;

// সব Subject
const subjects = {
  bangla: typeof banglaQuestions !== "undefined" ? banglaQuestions : [],
  english: typeof englishQuestions !== "undefined" ? englishQuestions : [],
  math: typeof mathQuestions !== "undefined" ? mathQuestions : [],
  science: typeof scienceQuestions !== "undefined" ? scienceQuestions : [],
  ict: typeof ictQuestions !== "undefined" ? ictQuestions : [],
  bgs: typeof bgsQuestions !== "undefined" ? bgsQuestions : []
};

// Quiz শুরু
function startQuiz(subject, amount) {

  selectedSubject = subject;
  totalQuestions = Number(amount);

  if (!subjects[subject] || subjects[subject].length === 0) {
    alert("এই বিষয়ের প্রশ্ন পাওয়া যায়নি।");
    return;
  }

  // যত প্রশ্ন আছে, তার বেশি নেওয়া হবে না
  totalQuestions = Math.min(totalQuestions, subjects[subject].length);

  // প্রশ্ন এলোমেলো করা
  currentQuestions = [...subjects[subject]]
    .sort(() => Math.random() - 0.5)
    .slice(0, totalQuestions);

  currentIndex = 0;
  score = 0;

  showQuestion();
}

// প্রশ্ন দেখানো
function showQuestion() {

  const question = currentQuestions[currentIndex];

  if (!question) {
    finishQuiz();
    return;
  }

  const questionBox =
    document.getElementById("question") ||
    document.getElementById("questionText");

  const optionsBox =
    document.getElementById("options") ||
    document.getElementById("optionsContainer");

  const progress =
    document.getElementById("progress");

  if (questionBox) {
    questionBox.innerText =
      (currentIndex + 1) + ". " + question.question;
  }

  if (optionsBox) {

    optionsBox.innerHTML = "";

    question.options.forEach((option, index) => {

      const button = document.createElement("button");

      button.className = "option-btn";
      button.innerText = option;

      button.onclick = function () {
        checkAnswer(index);
      };

      optionsBox.appendChild(button);
    });
  }

  if (progress) {
    progress.innerText =
      "প্রশ্ন " +
      (currentIndex + 1) +
      " / " +
      totalQuestions;
  }
}

// উত্তর যাচাই
function checkAnswer(selectedAnswer) {

  const question = currentQuestions[currentIndex];

  if (!question) return;

  const buttons =
    document.querySelectorAll(".option-btn");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (selectedAnswer === question.answer) {
    score++;
  }

  setTimeout(function () {

    currentIndex++;

    if (currentIndex < totalQuestions) {
      showQuestion();
    } else {
      finishQuiz();
    }

  }, 500);
}

// Quiz শেষ
function finishQuiz() {

  const questionBox =
    document.getElementById("question") ||
    document.getElementById("questionText");

  const optionsBox =
    document.getElementById("options") ||
    document.getElementById("optionsContainer");

  if (questionBox) {
    questionBox.innerHTML =
      "🎉 কুইজ শেষ!";
  }

  if (optionsBox) {

    const percentage =
      Math.round((score / totalQuestions) * 100);

    optionsBox.innerHTML = `
      <div class="result-box">
        <h2>ফলাফল</h2>

        <p>
          মোট প্রশ্ন:
          <strong>${totalQuestions}</strong>
        </p>

        <p>
          সঠিক উত্তর:
          <strong>${score}</strong>
        </p>

        <p>
          ভুল উত্তর:
          <strong>${totalQuestions - score}</strong>
        </p>

        <p>
          নম্বর:
          <strong>${percentage}%</strong>
        </p>

        <button class="restart-btn" onclick="location.reload()">
          🔄 আবার শুরু করুন
        </button>
      </div>
    `;
  }
}

// Subject নির্বাচন
function selectSubject(subject) {

  selectedSubject = subject;

  const amountBox =
    document.getElementById("amountBox");

  if (amountBox) {
    amountBox.style.display = "block";
  }
}

// 10 / 20 / 30 / 40 / 50 / 60 প্রশ্ন নির্বাচন
function chooseQuestions(amount) {

  if (!selectedSubject) {
    alert("আগে একটি Subject নির্বাচন করুন।");
    return;
  }

  startQuiz(selectedSubject, amount);
}

// Page load
document.addEventListener("DOMContentLoaded", function () {

  console.log("AI School Quiz loaded successfully.");

});
