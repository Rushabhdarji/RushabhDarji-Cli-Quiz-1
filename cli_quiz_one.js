//An app for question and answers
var readlineSync = require('readline-sync');
//Global variable to keep the track of score
var score = 0;
//Asking user for the input
var welcomeUser = readlineSync.question("What's your name? ");
//Welcome the user to the game
console.log("Welcome "+ welcomeUser +"!");
//An array consists the question and the answers
const questionsToBeAsked = [
  {
    question: "Which food do i like? ",
    answer: "PaniPuri"
  },
  {
    question: "Where do i live? ",
    answer: "Mumbai"
  },
  {
    question: "What's my age? ",
    answer: "19"
  },
  {
    question: "What's my hobby? ",
    answer: "Games"
  },
  {
    question: "What's my favourite song? ",
    answer: "Hall Of Fame"
  }
];
function play(question, answer){
  //Branching or checking the answer is right or wrong
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("You're right!");
    score = score + 1;
  }else{
    console.log("You're Wrong!");
  }
  
}

for(var i=0; i< questionsToBeAsked.length; i = i+1){
  play(questionsToBeAsked[i].question, questionsToBeAsked[i].answer);
}
var updatedScore = console.log(`Your Score is: ${score}`);