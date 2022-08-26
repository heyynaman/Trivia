// alert("Welcome to the trivia game!")
console.log("Welcome")
let content = document.querySelector(".game")
let start = document.querySelector(".start-btn")
let welcome = document.querySelector(".welcome")
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
// let randQuestion = (questions) =>
// {
//     var pick = Object.keys(questions);
//     var picked = pick[]
//     return picked
// }

// let k = randQuestion(questions)
// let a = 
// question_picked = question[`"${}"`]


