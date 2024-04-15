let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random(0, 9) * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  // True - Human Wins, False - Computer Wins, Tie - Human Wins
  return (
    getAbsoluteDistance(humanGuess, targetNumber) <=
    getAbsoluteDistance(computerGuess, targetNumber)
  );
};

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1, num2);
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};

const checkInput = (input) => {
  if (input < 0 || input > 9) {
    alert("Your number is out of range");
  }
};
