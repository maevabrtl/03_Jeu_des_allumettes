let amountOfMatches = 50;
let min = 1;
let max = 6;

function takeOffMatches(amountToRemove, amountOfMatches) {
	return (Number(amountOfMatches) - Number(amountToRemove))
}

function checkValidNumber(number, min, max) {
	if (typeof(number) === "number" && !isNaN(number) &&
	number >= min && number <= max)
		return true;
	return false;
}

let amountOfMatchesHTML = document.getElementById("amountOfMatchesLeft");
let inputField = document.getElementById("amountOfMatchesToRemove");
let button = document.getElementById("validButton");
let askAmountToRemoveMessage = document.getElementById("askMessage");
let controlInfos = document.querySelector("h4");

function gamePlay() {
	let amountToRemove = 0;
	askAmountToRemoveMessage.innerHTML = `How many matches would you like to take off ? (you can remove ${min} to ${max} matches at a time)`;
	button.addEventListener("click", () => {
		amountToRemove = Number(inputField.value);
		console.log(amountToRemove);
		if (!amountToRemove || !checkValidNumber(amountToRemove, min, max))
			return ;
		amountOfMatches = takeOffMatches(amountToRemove, amountOfMatches);
		console.log(amountOfMatches);
		amountOfMatchesHTML = amountOfMatches;
		if (amountOfMatches < max) {
			max = amountOfMatches;
			askAmountToRemoveMessage.innerHTML = `How many matches would you like to take off ? (you can remove ${min} to ${max} matches at a time)`;
		}
		controlInfos.innerHTML = `amount to remove = ${amountToRemove}, amount of matches = ${amountOfMatches}`;
	})
}

gamePlay();
