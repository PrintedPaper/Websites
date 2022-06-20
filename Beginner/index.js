const choices = ["rock", "paper", "scissors"]

function game(){
    for (let i = 0; i <= 5; i++){
        playRound()
    }
}

function playRound(){
    const playerChoice = playerSelection()
    const computerChoice = computerSelection()
    const winner = checkWinner(playerChoice,computerChoice)
    console.log(winner)
}

function playerSelection(){
    let input = prompt("Rock, Paper, or Scissors?")
    while(input == null){
        input = prompt("Rock, Paper, or Scissors?")
    }
    input = input.toLowerCase()
    let check = validateInput(input)
    while(check == false){
        input = prompt("Type Rock, Paper, Scissors. Spelling needs to be exact")
    }
    while (input == null){
        input = prompt("Rock, Paper, or Scissors?")
    }
    input = input.toLowerCase()
    check = validateInput(input)
    return input
}

function computerSelection(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice){
    return choices.includes(choice)
}

function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC){
        return 'Tie'
    }
    else if(
        (choiceP === "rock" && choiceC == "scissors") || 
        (choiceP === "paper" && choiceC == "rock") ||
        (choiceP === "scissors" && choiceC == "paper")
        ){
        return 'Player'
    }
    else{
        return 'Computer'
    }
}

game()