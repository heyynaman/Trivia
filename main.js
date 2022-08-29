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
content.style.display = 'none'
start.addEventListener('click', () =>
{
    welcome.style.display = 'none'
    content.style.display = 'block'
});
let questions = [
     "Full form of IPL",
     "What is the Capital of India?"
]
let length = questions.length;
let pickRand = (questions) => {
let randNum = Math.floor(Math.random() * length)
let myquestion = questions[randNum]
return myquestion
}
//hidding options
for(let i=0;i<options.length;i++ )
{
options[i].style.display='none';
}

//hiding lifelines
let lf= document.querySelector(".lifelines")
lf.style.display='none';

//hiding questions
question.style.display='none';
lbQuestion.style.display='none';
//hidding restart and exit
restart.style.display='none';
exit.style.display='none'
//random qeustion
question.innerHTML=pickRand(questions);
restart.addEventListener('click', ()=>
{
    // for(let i=0;i<options.length;i++ )
    // {
    // options[i].style.display='none';
    // }
})
//starting game
start_game.addEventListener('click', ()=>
{
    for(let i=0;i<options.length;i++ )
    {
    options[i].style.display='block';
    }
    let lf= document.querySelector(".lifelines")
    lf.style.display='block';
    question.style.display='block';
    lbQuestion.style.display='block';
    restart.style.display='block';
    exit.style.display='block'
    start_game.style.display='none';

})
// let randQuestion = (questions) =>
// {
//     var pick = Object.keys(questions);
//     var picked = pick[]
//     return picked
// }

// let k = randQuestion(questions)
// let a = 
// question_picked = question[`"${}"`]


