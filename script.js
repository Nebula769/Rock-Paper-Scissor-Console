let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let choice = getRandomInt(3);
  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getHumanChoice() {
  let choice =
      prompt('Enter your choice: rock, paper, or scissors').toLowerCase();

  while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    choice =
        prompt('Invalid choice. Enter your choice: rock, paper, or scissors')
            .toLowerCase();
  }

  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      return 'You lose! Paper beats rock.';
    } else {
      humanScore++;
      return 'You win! Rock beats scissors.';
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      return 'You lose! Scissors beats paper.';
    } else {
      humanScore++;
      return 'You win! Paper beats rock.';
    }
  } else {
    if (computerChoice === 'rock') {
      computerScore++;
      return 'You lose! Rock beats scissors.';
    } else {
      humanScore++;
      return 'You win! Scissors beats paper.';
    }
  }
}
