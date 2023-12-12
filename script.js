'use strict'
const question=[
    {
        question:"Which is the largest animal in the world?"
        ,answer:[
       {text:"Shark",correct:false},
       {text:"Elephant",correct:false},
       {text:"Blue Whale",correct:true},
       {text:"Giraffe",correct:false},

        ]
    },
    {
        question:"Which is capital city of Nepal?"
        ,answer:[
       {text:"Kathmandu",correct:true},
       {text:"Pokhara",correct:false},
       {text:"Biratnagar",correct:false},
       {text:"Lumbini",correct:false},

        ]
    },
    {
        question:"Where does Gautam Buddha born?"
        ,answer:[
       {text:"China",correct:false},
       {text:"Bangladesh",correct:false},
       {text:"Bhutan",correct:false},
       {text:"Nepal",correct:true},

        ]
    },
    {
        question:"What is height of Mount Everest?"
        ,answer:[
       {text:"8847m",correct:false},
       {text:"8848m",correct:true},
       {text:"8849m",correct:false},
       {text:"8845m",correct:false},

        ]
    },
    {
        question:"How much percentage of Nepal’s total land is cultivated for Farming?"
        ,answer:[
       {text:"16.97",correct:false},
       {text:"17.97",correct:true},
       {text:"18.97",correct:false},
       {text:"19,97",correct:false},

        ]
    },

    {
        question:"What is the name of Kathmandu – Pokhara road?"
        ,answer:[
       {text:"Prithivi highway",correct:true},
       {text:"tribhuvan highway",correct:false},
       {text:"Mahendra highway",correct:false},
       {text:"shiddarth higheay",correct:false},

        ]
    },

    {
        question:"How many MW of electricity has been produced in Nepal till now?"
        ,answer:[
       {text:"1182MW",correct:false},
       {text:"1152MW",correct:false},
       {text:"1142MW",correct:true},
       {text:"1152",correct:false},

        ]
    },

    {
        question:"When will the earthquake day be celebrated in Nepal?"
        ,answer:[
       {text:"Baishak-12",correct:false},
       {text:"Falgun-12",correct:false},
       {text:"Kartik-2",correct:false},
       {text:"Magh-2",correct:true},

        ]
    },

    



    
    

];
const app =document.querySelector(".app")
const questionElement=document.getElementById("question");
const answerBtn=document.getElementById("answer-btn");
const next=document.querySelector(".next");
let CurrentQuestionIndex=0;
let Score=0;
let startQuiz=function()
{
    CurrentQuestionIndex=0;
    Score=0;
    next.innerHTML = "Next";
    showQuestion();

}
let showQuestion=function()
{    reset();
    let currentQuestion=question[CurrentQuestionIndex];
    let questionNO=CurrentQuestionIndex+1;
    questionElement.innerHTML= questionNO + "." + currentQuestion.question;
    currentQuestion.answer.forEach(answer=>
        {
            const btn= document.createElement("button");
            btn.innerHTML=answer.text;
            btn.classList.add("btn");
            answerBtn.appendChild(btn);
            if(answer.correct)
            {
                btn.dataset.correct = answer.correct;
            }
            btn.addEventListener("click",selectAnswer)
        })
        }
const reset=function()
{
     next.style.display= "none";
    while(answerBtn.firstChild)
    {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

let selectAnswer = function(e)
{
  const selectedBtn=e.target;
  
const isCorrect= selectedBtn.dataset.correct === "true";
    if(isCorrect)
{    selectedBtn.classList.add("correct");
    Score++;
 }
 else
{
     selectedBtn.classList.add("incorrect");

 }
 Array.from(answerBtn.children).forEach(answer => {
    if (answer.dataset.correct === "true") {
        answer.classList.add("correct");
    }
    answer.disabled = true;

});
next.style.display="block";
}
const showResult= function()
{
    reset();
    questionElement.innerHTML=`You score ${Score} out of ${question.length}`
}
const nextBtn= function()
{  CurrentQuestionIndex++;
    if(CurrentQuestionIndex < question.length)
    {
        showQuestion();
    }
    else{
        showResult();
    }
}
next.addEventListener('click',function()
{
    if(CurrentQuestionIndex <  question.length)
        nextBtn();
else
startQuiz();
    
})


startQuiz();


    

