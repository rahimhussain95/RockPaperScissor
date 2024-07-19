
let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let hand = Math.floor(Math.random() * 3);
        return hand; 
}

function Win(human, comp){
    humanScore++;
    return (`You Win! ${human} beats ${comp}!`);
}

function Lose(human, comp){
    computerScore++;
    return (`You Lose! ${comp} beats ${human}!`);
}

function playRound(getComputerChoice, humanchoice){
    let choices = ["Rock", "Paper", "Scissors"];
    const human = humanchoice;
    const comp = choices[getComputerChoice()];
            
    if (human == comp)
    {
        return ("It's a Tie!")
    }

    switch(human){
        case "Rock":
            switch(comp){
                case "Scissors":
                    return Win(human, comp);
                case "Paper":
                    return Lose(human, comp);
            }
        case "Paper":
            switch(comp){
                case "Rock":
                        return Win(human, comp);
                case "Scissors":
                        return Lose(human,comp);
            }
        case "Scissors":
            switch(comp){
                case "Paper":
                        return Win(human, comp);
                case "Rock":
                        return Lose(human, comp);
            }
    }
}

const rock = document.createElement("button");
const scissor = document.createElement("button");
const paper = document.createElement("button");
rock.textContent = 'Rock';
scissor.textContent = 'Scissors';
paper.textContent = 'Paper';

const choices = document.querySelector(".choices");
choices.appendChild(rock);
choices.appendChild(scissor);
choices.appendChild(paper);

const result = document.querySelector(".result");
const score = document.querySelector(".score");

choices.addEventListener("click", function(e){
    const human = e.target.textContent;
    result.textContent = playRound(getComputerChoice, human);
    score.textContent = `Score: Human - ${humanScore}  Computer - ${computerScore}`;
}); 

if (humanScore == 5 || computerScore == 5){
    const endgame = document.createElement("div");
    if (humanScore == 5){
        endgame.textContent = 'Congratulations! You beat the Computer';
    }
    else if (computerScore == 5){
        endgame.textContent = 'Sorry! You were beat by the Computer';
    }
    score.appendChild(endgame);
}


