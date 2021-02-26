let roundsTxt = document.getElementsByClassName("roundsTxt");
let roundInput = document.getElementsByClassName("roundInput");
let scoreUserTxt = document.getElementById("scoreUserTxt");
let scoreComputerTxt = document.getElementById("scoreComputerTxt");
let scoreUserValue = 0;
let scoreComputerValue = 0;
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
let counter = 0;

const startGame = () => {
  if (roundInput[0].checked) {
    roundsTxt[1].innerHTML = "5";
  } else if (roundInput[1].checked) {
    roundsTxt[1].innerHTML = "10";
  } else if (roundInput[2].checked) {
    roundsTxt[1].innerHTML = "15";
  } else if (roundInput[3].checked) {
    roundsTxt[1].innerHTML = "20";
  }

  scoreUserTxt.innerHTML = `${scoreUserValue}`;
  scoreComputerTxt.innerHTML = `${scoreComputerValue}`;
};

//Start and  Reset buttons
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);

//Weapons Array

let weaponsArray = ["Rock", "Paper", "Scissors"];
//Computer Random Weapon
let computerWeapon = () => weaponsArray[Math.floor(Math.random() * 3)];

//User Weapons
// const chooseWeaponRock = () => weaponsArray[0];
const chooseWeaponPaper = () => weaponsArray[1];
const chooseWeaponScissors = () => weaponsArray[2];

//Battle with Rock Function
const battleWithRock = () => {
  let computerChoosenWeapon = computerWeapon();
  console.log(`Computer has choosen ${computerChoosenWeapon}`);
  if (weaponsArray[0] === computerChoosenWeapon) {
  } else if (
    weaponsArray[0] !== computerChoosenWeapon &&
    computerChoosenWeapon === weaponsArray[1]
  ) {
    scoreComputerValue = scoreComputerValue + 1;
    scoreComputerTxt.innerHTML = `${scoreComputerValue}`;
  } else if (
    weaponsArray[0] !== computerChoosenWeapon &&
    computerChoosenWeapon === weaponsArray[2]
  ) {
    scoreUserValue = scoreUserValue + 1;
    scoreUserTxt.innerHTML = `${scoreUserValue}`;
  }
};

//Battle with Paper Function
const battleWithPaper = () => {
  let computerChoosenWeapon1 = computerWeapon();
  console.log(`Computer has choosen ${computerChoosenWeapon1}`);
  if (weaponsArray[1] === computerChoosenWeapon1) {
  } else if (
    weaponsArray[1] !== computerChoosenWeapon1 &&
    computerChoosenWeapon1 === weaponsArray[0]
  ) {
    scoreUserValue = scoreUserValue + 1;
    scoreUserTxt.innerHTML = `${scoreUserValue}`;
  } else if (
    weaponsArray[1] !== computerChoosenWeapon1 &&
    computerChoosenWeapon1 === weaponsArray[2]
  ) {
    scoreComputerValue = scoreComputerValue + 1;
    scoreComputerTxt.innerHTML = `${scoreComputerValue}`;
  }
};

//Battle with Scissors Function
const battleWithScissors = () => {
  let computerChoosenWeapon2 = computerWeapon();
  console.log(`Computer has choosen ${computerChoosenWeapon2}`);
  if (weaponsArray[2] === computerChoosenWeapon2) {
  } else if (
    weaponsArray[2] !== computerChoosenWeapon2 &&
    computerChoosenWeapon2 === weaponsArray[0]
  ) {
    scoreComputerValue = scoreComputerValue + 1;
    scoreComputerTxt.innerHTML = `${scoreComputerValue}`;
  } else if (
    weaponsArray[2] !== computerChoosenWeapon2 &&
    computerChoosenWeapon2 === weaponsArray[1]
  ) {
    scoreUserValue = scoreUserValue + 1;
    scoreUserTxt.innerHTML = `${scoreUserValue}`;
  }
};

const compareFunction = () => {
  if (scoreUserValue === scoreComputerValue) {
    console.log("This was a draw, try again");
  } else if (scoreUserValue > scoreComputerValue) {
    console.log(
      `You Won with ${scoreUserValue} to ${scoreComputerValue} to the Computer`
    );
  } else if (scoreUserValue < scoreComputerValue) {
    console.log(
      `You Lost with ${scoreUserValue} to ${scoreComputerValue} to the Computer`
    );
  }
};

//Counter function

const CounterFunctionRock = () => {
  if (counter < Number(roundsTxt[1].innerHTML) - 1) {
    counter = counter + 1;
    roundsTxt[0].innerHTML = `${counter}`;
    battleWithRock();
  } else if (counter < Number(roundsTxt[1].innerHTML)) {
    battleWithRock();
    counter = counter + 1;
    roundsTxt[0].innerHTML = `${counter}`;
    compareFunction();
  }
};
const CounterFunctionPaper = () => {
  if (counter < Number(roundsTxt[1].innerHTML) - 1) {
    counter = counter + 1;
    roundsTxt[0].innerHTML = `${counter}`;
    battleWithPaper();
  } else if (counter < Number(roundsTxt[1].innerHTML)) {
    battleWithPaper();
    counter = counter + 1;
    roundsTxt[0].innerHTML = `${counter}`;
    compareFunction();
  }
};

const CounterFunctionScissors = () => {
  if (counter < Number(roundsTxt[1].innerHTML) - 1) {
    counter = counter + 1;
    roundsTxt[0].innerHTML = `${counter}`;
    battleWithScissors();
  } else if (counter < Number(roundsTxt[1].innerHTML)) {
    battleWithScissors();
    counter = counter + 1;
    roundsTxt[0].innerHTML = `${counter}`;

    compareFunction();
  }
};

function resetGame() {
  startGame();
  scoreUserValue = 0;
  scoreComputerValue = 0;
  scoreComputerTxt.innerHTML = `${scoreComputerValue}`;
  scoreUserTxt.innerHTML = `${scoreUserValue}`;
  counter = 0;
  roundsTxt[0].innerHTML = `${counter}`;
}

rockBtn.addEventListener("click", CounterFunctionRock);

// paperBtn.addEventListener("click", chooseWeaponPaper);
paperBtn.addEventListener("click", CounterFunctionPaper);
// scissorsBtn.addEventListener("click", chooseWeaponScissors);
scissorsBtn.addEventListener("click", CounterFunctionScissors);
