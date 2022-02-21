
// function myFunction1()
// {
//   var y = document.getElementById("div_2");
//   var x = document.getElementById("div_1");
//   var z = document.getElementById("div_3");

//   y.style.display="block";
//   x.style.display="none";
//   z.style.display="none";

// }

// function myFunction2()
// {
//   var z = document.getElementById("div_3");
//   var x = document.getElementById("div_1");
//   var y = document.getElementById("div_2");

//   z.style.display="block";
//   x.style.display="none";
//   y.style.display="none";
// }


  let addData=[

    { "question" : "Which type of JavaScript language is ?"  , "option": [ "Object-Based", "Object-Oriented", "Assembly Language", "High-Level" ] , "answer" : "q1" },


    { "question" : "Inside which HTML element do we put the JavaScript?"  , "option": [ "<javascript>","<js>","<script>", "<src>" ] , "answer" : "q3" },
  
  
    { "question" : "Which of the following keywords is used to define a variable in Javascript?"  , "option": [ "var","let", "Both A & B", "None of the Above" ] , "answer" : "q3" },
  
  
    { "question" : "How can a datatype be declared to be a constant type?"  , "option": [ "const","var", "let", "constant" ] , "answer" : "q1" }
  ]
const question = document.querySelector('#question')
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const choice4 = document.querySelector('#choice4');
const answers = document.querySelectorAll('.answer');
const resultOutScore = document.querySelector('.score_content');
const div_1 = document.querySelector('#div_1');
const div_2 = document.querySelector('#div_2');
const div_3 = document.querySelector('#div_3');
const username = document.querySelector('.form-name');
const headerIndex = document.querySelector('#user');
const headerIndex_2 = document.querySelector('#user_2');
const correctAns =  document.querySelector('.correctdiv');
username.value = "";
var score=0;
let currentQues=0;


// document.getElementsByName("disableme")[0].disabled = true;
// console.log(question.textContent)
// question.textContent = "hii i have changed the question"
// console.log(question.textContent)

function nextQuestion(){

headerIndex_2.textContent=` Question ${currentQues+1} of ${addData.length}`;

question.textContent = addData[currentQues].question;
// console.log(question.textContent)
choice1.textContent= addData[currentQues].option[0];
// console.log(choice1.textContent);
choice2.textContent= addData[currentQues].option[1];
// console.log(choice2.textContent);
choice3.textContent= addData[currentQues].option[2];
// console.log(choice3.textContent);
choice4.textContent= addData[currentQues].option[3];
// console.log(choice4.textContent);
deSelect();
correctAns.textContent= "";
}
nextQuestion(); // calling the questions function


//function to check  whether the selected answer is correct or wrong
function deSelect(){
  
  answers.forEach(element =>{
    element.checked=false;
  })

}

function myFunction1(){
console.log(username.value)
   let usr = username.value

    div_1.classList.add('hidden')
    div_2.classList.remove('hidden')
    localStorage.setItem('username',usr)
    console.log(localStorage.getItem('username'))
    headerIndex.textContent = `Hello! ${localStorage.getItem('username')}`

}

//submit button
const submit= document.querySelector('.submit');
// console.log(submit);
submit.addEventListener('click',()=>{

  var correct = selectedAnswer()
  // console.log(correct)
  // consolA.log(addData[currentQues].answer)
  if(correct ===  addData[currentQues].answer){
    score++
    // console.log('i m here')
    correctAns.textContent=`Correct Answer! Go to the next question`
    correctAns.style.color = 'green';
  }
  else{
    correctAns.textContent= `Wrong Answer !  Please Try Again`;
    correctAns.style.color = 'red';
  }
  currentQues++;
if(currentQues<addData.length){
  // nextQuestion();
}else{
  displayScore(score,currentQues)
}

})

//function to display score and currentquestion
function displayScore(score,currentQues){
  // console.log(score)

  div_2.classList.add('hidden')
  div_3.classList.remove('hidden')
  resultOutScore.innerHTML = `<h2> You have Scored ${score} out of ${currentQues}`;
  document.getElementById('user-name').textContent = username.value;
  document.getElementById('sc').textContent = score;

}

//function to check the answer which is selected 
function selectedAnswer(){
  var ans
  console.log(answers)
  answers.forEach(element =>{
    if( element.checked){
      ans = element.id
    }
    // console.log(ans);
  })
  return ans
}