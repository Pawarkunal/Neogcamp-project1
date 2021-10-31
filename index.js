var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("Hello! What is your name? ");

console.log("welcome to this short quiz ",userName);

//  function write
function play(question, answer){
  var userAnswer = readlineSync.question(question);

// branches

  if (userAnswer === answer){
    console.log("thats Great!");
    score = score + 1;
    
  }else {
    console.log("Oops... No Problem!");
  
  }
  console.log("current score is ", score);
  console.log("----------");
  
}

// objects
var questionOne = {
  question: "Do you know kunal? ",
  answer: "yes"
}

var questionTwo = {
  question:"where do kunal live? ",
  answer: "satara"
}

var questionThree = {
  question: "which mobile he is using? ",
  answer: "samsung m31s"
}

// arrays
var questions = [questionOne, questionTwo, questionThree];

// calling function
for (var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Congratulation!!!");
console.log("yeah! YOUR FINAL SCORE IS ", score);

console.log("Take screenshot of this and send it to KUNAL. He wants to know how much you've scored. ");
