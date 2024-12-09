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

function incrementScore(player) {
  if (player === 'human') {
    humanScore++;
    score = document.getElementById('humanScore');
    score.textContent = humanScore;
  } else {
    computerScore++;
    score = document.getElementById('computerScore');
    score.textContent = computerScore;
  }
  
  if (humanScore === 5 || computerScore === 5) {
    const choices = document.getElementById('choices');
    choices.style.display = 'none';
    const result = document.getElementById('result');
    result.style.color = 'red';
    if (humanScore === 5) {
      result.textContent = 'You win the game!';
    } else {
      result.textContent = 'You lose the game!';
    }
    
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
      incrementScore("computer");
      return 'You lose! Paper beats rock.';
    } else {
      incrementScore("human");
      return 'You win! Rock beats scissors.';
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'scissors') {
      incrementScore("computer");
      return 'You lose! Scissors beats paper.';
    } else {
      incrementScore("human");
      return 'You win! Paper beats rock.';
    }
  } else {
    if (computerChoice === 'rock') {
      incrementScore("computer");
      return 'You lose! Rock beats scissors.';
    } else {
      incrementScore("human");
      return 'You win! Scissors beats paper.';
    }
  }
}

const choices = document.getElementById('choices');
choices.addEventListener('click', (e) => {
  let resultStr;
  if (e.target.tagName === 'BUTTON') {
    switch (e.target.id) {
      case 'rock':
        resultStr = playRound('rock', getComputerChoice());
        break;
      case 'paper':
        resultStr = playRound('paper', getComputerChoice());
        break;
      case 'scissors':
        resultStr = playRound('scissors', getComputerChoice());
        break;
    }
  }
  const result = document.getElementById('result');
  result.textContent = resultStr;
  result.style.color = 'blue';

});

document.getElementById("tryAgainButton").addEventListener('click', function() {
  location.reload(); // Reloads the current page
});
