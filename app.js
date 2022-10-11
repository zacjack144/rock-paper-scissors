//const scoreComputer = document.querySelector('.computer-score');
//const scorePlayer = document.querySelector('.player-score');


let scoreComputer = parseInt(0);
let scorePlayer = parseInt(0);



//Computer
function getComputerSelection() {
    let computerNumber = random(3);
    let computerGuess = '';

    switch (computerNumber) {
        case 1:
            computerGuess = 'rock';
            break;
        case 2:
            computerGuess = 'paper';
            break;
        case 3:
            computerGuess = 'scissors';
            break;
            default:
            break;
    }
    console.log("Computer chose: ", computerGuess);
    return computerGuess;
}


function playerChoice() {
    //Get prompt by the user
    let player = prompt("What's your weapon of choice ?: ");
    playerResult = player.toLowerCase();
    //Prompt is caps sensitive and should only be 3 choices
    if (player == "rock" || player == "paper" || player == "scissors" ) {
      
        console.log("Player choose: ", playerResult);

        return playerResult;
    }
    
    else {
        alert("Invalid choice");
    }
}
// Round function
function playRound(playerSelection, computerSelection) {
    //Tie condition
    if(playerSelection === computerSelection ) {
        alert("It's a tie!");
    // Lost conditions
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ){
        alert('You Lost!');
        scoreComputer++;
        console.log("Computer has" ,scoreComputer, "point");
        console.log('Player has' , scorePlayer, "point");

    }

    else {
        alert('You Won!');
        scorePlayer++;
        console.log("Computer has" ,scoreComputer, "point");
        console.log('Player has' , scorePlayer, "point");
        
    }
}

function game() {  
for(let i = 1; i < 10; i++) {
    console.log("Round " + i);
    const playerSelection = playerChoice();
    const computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    if (scorePlayer >= 5 && scoreComputer < 5) {
        alert('Game Over. You Win!');
        break;
      } else if (scorePlayer < 5 && scoreComputer >= 5) {
        alert('Game Over. You Lose!');
        break;
      }
    }  
}


game();











//Helper
function random(number) {
    return Math.floor(Math.random() * number + 1);
}