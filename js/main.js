document.querySelectorAll(".dropdown-toggle").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const arrow = this.querySelector("i");
    arrow.classList.toggle("rotate");
  });
});

const steps = document.querySelectorAll(".steps .step");

steps.forEach((step) => {
  step.addEventListener("click", function () {
    steps.forEach((s) => s.classList.remove("active"));
    this.classList.add("active");
  });
});

const questions = document.querySelectorAll(".faq-question");


questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
      question.querySelector("span").textContent = "+";
    } else {
      answer.style.display = "block";
      question.querySelector("span").textContent = "-";
    }
  });
});


function changeText(step) {
  let text = document.getElementById("lockedText");
  let btn = document.getElementById("lockedBtn");

  if (step === 2) {
    text.innerText = "Start this challenge to submit a solution";
    btn.innerText = "START CHALLENGE";
  }

  if (step === 3) {
    text.innerText = "Start this challenge to view your solution report";
    btn.innerText = "START CHALLENGE";
  }

  if (step === 4) {
    text.innerText =
      "Complete this challenge to see solutions or upgrade to Pro to see solutions early";
    btn.innerText = "UNLOCK PRO";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".steps-toggle");
  const steps = document.querySelector(".steps");
  const stepButtons = document.querySelectorAll(".step");

  if (!toggle || !steps) return;

  toggle.addEventListener("click", () => {
    steps.classList.toggle("active");
  });

  stepButtons.forEach((step) => {
    step.addEventListener("click", () => {
      toggle.textContent = step.innerText.trim();
      steps.classList.remove("active");
    });
  });
});
