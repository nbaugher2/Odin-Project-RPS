function getComputerChoice(){
	let randNum = Math.random() * 100;
	if (randNum < 33){
		return "rock";
	}else if (randNum > 66){
		return "paper";
	}else{
		return "scissors";
	}
}

function playRound(playerSelection, computerSelection){
	let pS = playerSelection.toLowerCase();
	if (pS === "rock" && computerSelection ==="scissors"){
		return "You Win! Rock beats Scissors";
	}
	else if(pS === "paper" && computerSelection === "rock"){
		return "You Win! Paper beats rock";
	}
	else if(pS === "scissors" && computerSelection === "paper"){
		return "You Win! Scissors beats Paper";
	}
	else if(pS === computerSelection){
		return "A Tie!";
	}
	return `You Lose :< ${computerSelection} beats ${pS}`;
}

function game(){
	let score = 0;
	for (let i = 0; i < 5; i++){
		let outCome = playRound( prompt("Make your choice: "), getComputerChoice());
		if (outCome.substr(0,7) === "You Win"){
			score++;
		}
		console.log(outCome);
	}
	console.log("You won " + score + " times");
}

game();