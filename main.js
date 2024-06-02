let options = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => options[Math.floor(Math.random() * 3)]

let getHumanChoice = () => options[parseInt(prompt("0: rock, 1: paper, 2: scissors"))];

let humanScore = computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
    if (humanScore >= 5 || computerScore >= 5){
        alert(humanScore > computerScore ? 'human wins!' : 'computer wins!');
        return;
    }
    document.querySelector('.computer').textContent= ("Computer: " + computerChoice);
    document.querySelector('.human').textContent = ("human: " + humanChoice);
    if (humanChoice == computerChoice)
        {
        document.querySelector('.output').textContent = "Draw.";
        }
    else if (
        (humanChoice == 'rock' && computerChoice == 'paper')     || 
        (humanChoice == 'paper' && computerChoice == 'scissors') ||
        (humanChoice == 'scissors' && computerChoice == 'rock')
       )
       {
        document.querySelector('.output').textContent = "Lose!";
        computerScore++;
       }
    else {
        document.querySelector('.output').textContent = "Win!";
        humanScore++;
    }
    document.querySelector('.score').textContent = ("Scores:\nHuman: " + humanScore + "\nComputer: " + computerScore);
}

