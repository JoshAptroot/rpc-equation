const getuserchoice = () => {
  const userInput = ;
  if (userInput === 1) {
    console.log("You chose: Rock");
  }
  if (userInput === 2) {
    console.log("You chose: Paper");
  }
  if (userInput === 3) {
    console.log("You chose: Scissors");
  }
  return userInput;
};

const getcomputerchoice = () => {
  const choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) {
    console.log("Opponent chose: Rock");
  }
  if (choice === 2) {
    console.log("Opponent chose: Paper");
  }
  if (choice === 3) {
    console.log("Opponent chose: Scissors");
  }
  return choice;
};
const user = getuserchoice();
const computer = getcomputerchoice();

const userdifference = user - computer;
const computerdifference = computer - user;

const userresultstep1 = userdifference * userdifference;
const userresult = userresultstep1 + userdifference;

const computerresultstep1 = computerdifference * computerdifference;
const computerresult = computerresultstep1 + computerdifference;

if (userresult === 2) {
  console.log("You win!!");
}
if (computerresult === 2) {
  console.log("You Lose :(");
}
if (userresult === computerresult) {
  console.log("It's a tie!!");
}
