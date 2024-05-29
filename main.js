let options = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => options[Math.floor(Math.random() * 3)]

let getHumanChoice = () => options[parseInt(prompt("0: rock, 1: paper, 2: scissors"))];

let humanScore = computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    console.log("Computer: " + computerChoice);
    console.log("human: " + humanChoice);
    if (humanChoice == computerChoice)
        {
        console.log("Draw!");
        }
    else if (
        (humanChoice == 'rock' && computerChoice == 'paper')     || 
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')
       )
       {
        console.log("Lose!");
        computerScore++;
       }
    else {
        console.log("Win!");
        humanScore++;
    }
    console.log("Scores:\nHuman: " + humanScore + "\nComputer: " + computerScore);
}

let playGame = rounds => {
    for (let i = 0;i < rounds;i++)
        playRound(getHumanChoice(), getComputerChoice());
}

playGame(5);
