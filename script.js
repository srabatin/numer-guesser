let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//function to generate random target integer between 0 and 10
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const targetNumber = generateTarget();

//function to get absolute distance
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

//function to compare guesses
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    
    //determine deviation from targetnumber using function for absolute distance
    let humanDeviation = getAbsoluteDistance(targetNumber, humanGuess);
    let computerDeviation = getAbsoluteDistance(targetNumber, computerGuess);
    
    //make positive if needed
    /*
    if (humanDeviation < 0) {
        humanDeviation *= -1;
    }
    if (computerDeviation < 0) {
        computerDeviation *= -1;
    }*/

    //compare deviations
    if (humanDeviation <= computerDeviation) {
        return true;
    } else { 
        return false;
    }
}

//function to update score
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

//function to advance round
const advanceRound = () => {
    currentRoundNumber += 1;
}

// compareGuesses(5, 7, targetNumber);




