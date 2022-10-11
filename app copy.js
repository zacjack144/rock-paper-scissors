
//Computer
const choice = ["rock", "paper", "scissors"]
//Computer's Choice
function getComputerChoice() {
//Pick one of the choice
    const random = Math.floor(Math.random() * choice.length);
//Return the choice
    computerResult = choice[random];
    console.log("Computer choose: ", computerResult);
}

function playerChoice() {
    //Get prompt by the user
    let player = prompt("What's your weapon of choice ?: ");
    playerResult = player.toLowerCase();
    //Prompt is caps sensitive and should only be 3 choices
    if (player == "rock" || player == "paper" || player == "scissors" ) {
      
        console.log("Player choose: ", playerResult);
    }
    
    else {
        alert("Invalid choice");
    }
}
 const playerSelection = "rock";
 computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection ) {
        alert("It's a tie!");
    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")
    ){
        alert("you lost");
    }

    else {
        alert("you won");
    }
}



playRound(playerSelection, computerSelection);









