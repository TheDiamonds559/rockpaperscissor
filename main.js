let options = ['rock', 'paper', 'scissors'];

let getComputerChoice = () => options[Math.floor(Math.random() * 3)]

let getHumanChoice = () => options[parseInt(prompt("0: rock, 1: paper, 2: scissors"))];

console.log(getHumanChoice());