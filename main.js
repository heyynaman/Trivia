// alert("Welcome to the trivia game!")
console.log("Welcome")
let content = document.querySelector(".game")
let start = document.querySelector(".start-btn")
let welcome = document.querySelector(".welcome")
let question = document.querySelector("#myQuestion")
let options = document.querySelectorAll(".op")
let restart = document.querySelector("#restart")
let exit = document.querySelector("#exit")
let lbQuestion = document.querySelector("#question")
let start_game = document.querySelector("#start-game")
let ques_opts = document.querySelector("#ques-opts");
let ansContainer = document.querySelector("#answers")
let dispOp1 = document.querySelector("#opt1")
let dispOp2 = document.querySelector("#opt2")
let dispOp3 = document.querySelector("#opt3")
let dispOp4 = document.querySelector("#opt4")
let op1 = document.querySelector("#op1")
let op2 = document.querySelector("#op2")
let op3 = document.querySelector("#op3")
let op4 = document.querySelector("#op4")
let lf= document.querySelector(".lifelines")
content.style.display = 'block'
let myans,score=0;
let myarr=[];  
// start.addEventListener('click', () =>
// {
//     welcome.style.display = 'none'
//     content.style.display = 'block'
// });

// hidding options
for(let i=0;i<options.length;i++ )
{
options[i].style.display='none';
}
lf.style.display = 'none'
ques_opts.style.display='none'
lbQuestion.style.display = 'none'
question.style.display ='none'
restart.style.display ='none'
exit.style.display = 'none'
// Displaying Game
start_game.addEventListener('click', ()=>
{
   for(let i=0;i<options.length;i++ )
   {
      options[i].style.display='block';
   }
   lf.style.display = 'block'
   ques_opts.style.display='flex'
   lbQuestion.style.display = 'block'
   question.style.display ='block'  
   restart.style.display ='block'
   exit.style.display = 'block'
   start_game.style.display='none'
})
let num;
//Question
let questions = [
        {
           question: "What is the capital of India?",
           op1: "Delhi",
           op2: "Mumbai",
           op3: "Kolkata",
           op4: "Amritsar",
           answer: "Delhi"
        },
        {
           question:"What is the largest animal in the world?",
           op1: "The Blue Whale",
           op2: "Elephant",
           op3: "Giraffe",
           op4: "Lion",
           answer: "The Blue Whale"
        },
        {
         question: "Who is Mickey Mouse's wife?",
         op1: "Clarabelle Cow.",
         op2: "Roxanne",
         op3: "Minnie Mouse",
         op4: "Daisy Duck.",
         answer: "Minnie Mouse"
        },
        {
         question: "Who discovered America?",
         op1: "Alexander Hamilton",
         op2: "John F. Kennedy",
         op3: "George Washington",
         op4: "Christopher Columbus",
         answer: "Christopher Columbus"
        },
        {
         question: "How many tentacles does an Octopus have?",
         op1: "5",
         op2: "8",
         op4: "2",
         op3: "4",
         answer: "8"
        },
        {
         question: "Who is SpongeBob’s best friend?",
         op1:"Patrick Star",
         op2: "Plankton",
         op3: "Squidward",
         op4:"Mr. Krabs",
         answer: "Squidward",
         },
         {
          question:"What is the name of Harry Potter's father?",
          op1:"James",
          op2:"Remus",
          op3:"Sirius",
          op4:"Draco",
          answer:"James",
         },
            {
          question:"Who is Batman’s sidekick?",
          op1:"Joker",
          op2:"Barbara",
          op3:"Robin",
          op4:"Ellen",
          answer:"Robin"
         },
         {
          question:"Which Pixar film has Woody and Buzz Lightyear?",
          op1:"Cars",
          op2:"Up",
          op3:"Soul",
          op4:"Toy Story",
          answer:"Toy Story"
         },
   //    {
   //    question:
   //    op1:
   //    op2:
   //    op3:
   //    op4:
   //    answer:
   //   },
   //   {
   //    question:
   //    op1:
   //    op2:
   //    op3:
   //    op4:
   //    answer:
   //   },
   //   {
   //    question:
   //    op1:
   //    op2:
   //    op3:
   //    op4:
   //    answer:
   //   },

];
let arr = [0,1,2,3]
for(let i=0; i<questions.length-1; i++)
{
   arr[i]=i
}
size = arr.length-1
var myNum, arrLast, Ele;
function pickNum()
{
   if(size<0)
   {
      Ele = -1
   }
   else
   {
      let num = Math.floor(Math.random() * size)
      console.log("random num: ", num)
      Ele = arr[num]
      myNum = arr[num] 
      arrLast = arr[size]
      arr[size] = myNum
      arr[num] =  arrLast

      size -=1
      
      console.log(arr)
   
   }
   return Ele
}
var randNum = pickNum()
function pickRandomQuestion()
{
   

      if(randNum===-1)
      {
         console.log("break")

      }
      else
      {
         // console.log("gg")
         
         let getQuestion = questions[randNum].question
         var ShowOP1 = questions[randNum][`${"op1"}`];
         var ShowOP2 = questions[randNum][`${"op2"}`];
         var ShowOP3 = questions[randNum][`${"op3"}`];
         var ShowOP4 = questions[randNum][`${"op4"}`];
         // ques_opts.innerHTML = `Option1: ${ShowOP1}<br> ${ShowOP2} <br> ${ShowOP3} <br> ${ShowOP4} <br> `
         dispOp1.innerHTML = `${ShowOP1}`
         dispOp2.innerHTML = `${ShowOP2}`
         dispOp3.innerHTML = `${ShowOP3}`
         dispOp4.innerHTML = `${ShowOP4}`
         console.log("Question Fetched")
         return getQuestion 
      }

      

   
}

// printing Question 
question.innerHTML=pickRandomQuestion(questions);

//Checking Correct Answer
op1.addEventListener('click', () =>
{
   let correctAns = questions[randNum]['answer']
   let opt1 = questions[randNum]['op1']
   if(correctAns==opt1)
   {

      alert("Correct")
      randNum = pickNum()
      question.innerHTML=pickRandomQuestion(questions);
   }
   else{
      console.log(correctAns)
      console.log(opt1)
      alert("game over")
   }
})
op2.addEventListener('click', () =>
{
   let correctAns = questions[randNum]['answer']
   let opt2 = questions[randNum]['op2']
   if(correctAns==opt2)
   {
      alert("Correct")
      randNum = pickNum()
      question.innerHTML=pickRandomQuestion(questions);
   }
   else{
      console.log(correctAns)
      console.log(opt2)
      alert("game over")
   }
})
op3.addEventListener('click', () =>
{
   let correctAns = questions[randNum]['answer']
   let opt3 = questions[randNum]['op3']
   if(correctAns==opt3)
   {
      alert("Correct")
      randNum = pickNum()
      question.innerHTML=pickRandomQuestion(questions);
   }

   else{
      console.log(correctAns)
      console.log(opt3)
      alert("game over")
   }
})
op4.addEventListener('click', () =>
{
   let correctAns = questions[randNum]['answer']
   let opt4 = questions[randNum]['op4']
   if(correctAns==opt4)
   {
      alert("Correct")
      randNum = pickNum()
      question.innerHTML=pickRandomQuestion(questions);
   }
   else{
      console.log("Correct Answer:"+correctAns)
      console.log("Your Answer:"+opt4)
      alert("game over")
   }
})



