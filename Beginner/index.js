function game(){
    const randNum = Math.floor(Math.random() * 3) + 1

    switch(randNum){
        case 1:
            computerSelection == "Rock";
            break;
        case 2:
            computerSelection == "Scissors";
            break;
        case 3:
            computerSelection == "Paper";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Enter a string: ")
    if (playerSelection == "Rock"){
        if(computerSelection == "Paper"){
            return false
        }
        else{
            return true
        }
    } 
    else if (playerSelection == "Paper"){
        if(computerSelection == "Scissors"){
            console.log(computerSelection)
            console.log("Computer wins")
        }
        else{
            console.log("You win")
        }
    }
    else if (playerSelection == "Scissors"){
        if(computerSelection == "Rock"){
            console.log(computerSelection)
            console.log("Computer wins")
        }
        else{
            console.log("You win")
        }
    }
    else if(playerSelection == computerSelection){
        console.log(computerSelection)
        console.log("Tied")
    }
    else{
        console.log("Invalid")
    }
}

let computerSelection;
let playerSelection; 
console.log(playRound(playerSelection, computerSelection))