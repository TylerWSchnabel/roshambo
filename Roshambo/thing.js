var items = ["rock", "paper", "scissors"];
function computerPlay(items) {
    return items[Math.floor(Math.random()*items.length)];
}

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var computerSelection = computerPlay(items);
var playerScore = 0;
var computerScore = 0;

const scoreBoard = document.querySelector('.scoreBoard');
const content = document.createElement('p');
const score = document.createElement('p');
const win = document.createElement('p');
var gameOn = true;
function checkWin(){
    if ((playerScore >= 5)||(computerScore >= 5)){
            declareWinner();
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            playAgain();
        }
    }

function playRound(playerSelection, computerSelection) {
    var computerSelection = computerPlay(items);

    console.log("Player: "+playerSelection +"; Locals: " + computerSelection);
    if (playerSelection === computerSelection){
        win.textContent = "Tie :|";
        } else if (playerSelection === "rock") {
        if  (computerSelection === "paper") {
           computerScore +=1;
                    win.textContent = "You Lose :(";
        } else if (computerSelection === "scissors") {
            playerScore +=1;
            win.textContent = "You Win :)"
        }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock"){
                playerScore +=1;
                win.textContent = "Your Win :)";
            } else if (computerSelection === "scissors") {
            computerScore +=1;
            win.textContent = "You Lose :(";
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock"){
                computerScore +=1;
                win.textContent = "Your Lose :(";
            } else if (computerSelection === "paper") {
                playerScore +=1;
                 win.textContent = "Your Win :)";
            }
        }
            
    content.classList.add('content');
    content.textContent = "Player: "+playerSelection[0].toUpperCase() + playerSelection.substring(1) +" ~ Locals: " + computerSelection[0].toUpperCase()+ computerSelection.substring(1);
    score.textContent = "Player Score: " + playerScore+ " Locals Score: "+computerScore;  
    checkWin();        
    }
        
    function game(){
            
        rock.addEventListener('click', function(){
            playRound(playerSelection="rock", computerSelection);
                    
        })

        paper.addEventListener('click', function(){
            playRound(playerSelection="paper", computerSelection);
                    
        })

        scissors.addEventListener('click', function(){
            playRound(playerSelection="scissors", computerSelection);
                    
        })
        }


function playAgain(){
    let btn = document.createElement('button');
    btn.innerHTML = "Play Again?";
    btn.addEventListener('click', function(){
        window.location.reload();
    });
    btn.id = "playBtn"
    scoreBoard.appendChild(btn);
}
        
function declareWinner(){
    if (playerScore > computerScore){
        win.textContent = "You win! Rip some waves bruh!";
    } else if (playerScore < computerScore){
        win.textContent = "Locals wins. Beat it kook!";
    }}    
scoreBoard.appendChild(content);
scoreBoard.appendChild(win);
scoreBoard.appendChild(score)
            

game();
        
        