var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("what is your name? ");
console.log("Welcome " + userName + " DO YOU KNOW AMOGH? ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
  console.log("right!");
  score = score + 1;
} else {
  console.log("wrong!");
  score = score - 1;
  console.log("The right answer is: ", answer)
}
console.log("current score: ", score,);
console.log("------------")
}

var questions = [{
  question: "Where do I live? ",
  answer: "Mumbai"
}, {
  question: "My favorite superhero would be? ",
  answer: "Spiderman"
}, {
  question: "Who is my favourite actor? ",
  answer: "Hrithik Roshan"
}, {
  question: "What is my favourite food? ",
  answer: "Misal Pav"
}, {
  question: "Which is my favourite book? ",
  answer: "Rich dad poor dad"
}, {
  question: "Which is my favourite anime character? ",
  answer: "Sasuke Uchiha"
}];

for(var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You scored: ", score++);