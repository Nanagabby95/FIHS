// Sample quiz questions and answers
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Mars"
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
  
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      alert("Correct answer!");
    } else {
      alert("Incorrect answer. Try again!");
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      alert("Quiz completed! Thank you for participating.");
    }
  }
  
  // Load the first question when the page loads
  window.onload = loadQuestion;
  