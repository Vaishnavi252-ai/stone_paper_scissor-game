let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = (userChoice) => {
    msg.innerText = `Game was draw both of you chooses same ${userChoice}, Please Try Again.`;
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congrats!! You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Opps!! You lose the game. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice){
        //Draw Game
        drawGame(userChoice);
    } else {
        let userWin = true;
        if(userChoice === "stone"){
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock, scissor 
            userWin = compChoice === "stone" ? true : false;
        } else{
            // rock, paper
            userWin = compChoice === "paper" ? true : false
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});