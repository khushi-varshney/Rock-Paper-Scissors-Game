let userScore = 0;
let compScore=0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText="Game was a Draw. Play Again";
    msg.style.backgroundColor ="yellow";
}

const genCompChoice = ()=> {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congrats! You Win. your choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is ", compChoice)

    if(userChoice==compChoice){
        drawGame();
    }else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})