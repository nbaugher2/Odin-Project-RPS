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

let score = 0;
let compScore = 0;
//retrieve results div
let divResults = document.querySelector(".results");

function playRound(event){
	let pS = this.name
	let computerSelection = getComputerChoice();
	if (pS === "rock" && computerSelection ==="scissors"){
		score++;
		divResults.textContent = `You Win! Rock beats Scissors ${score}:${compScore}`;
		
	}
	else if(pS === "paper" && computerSelection === "rock"){
		score++;
		divResults.textContent = `You Win! Paper beats rock${score}:${compScore}`;
	}
	else if(pS === "scissors" && computerSelection === "paper"){
		score++;
		divResults.textContent = `You Win! Scissors beats Paper ${score}:${compScore}`;
		
	}
	else if(pS === computerSelection){
		divResults.textContent = `A Tie! ${score}:${compScore}`;
	}
	else{
		compScore++;
		divResults.textContent = `You Lose :< ${computerSelection} beats ${pS} ${score}:${compScore}`;
		
	}
	if (score === 5 || compScore === 5){
		divResults.textContent = `Thanks for playng: final results = ${score}:${compScore}`;
		rockButton.removeEventListener("click", playRound);
		paperButton.removeEventListener("click", playRound);
		scissorButton.removeEventListener("click", playRound);
	}

}

//add listener to rock button
let rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", playRound);

//add listener to paper button
let paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", playRound);

//add listener to scissor button
let scissorButton = document.querySelector(".scissors");
scissorButton.addEventListener("click", playRound);
