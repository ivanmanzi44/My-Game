let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/

function playGame(playerMove) {
  const Computermover = pickComputerMove();
  
  let Result1 = '';
  
  if (playerMove === 'scissors') {
    if (Computermover === 'rock') {
      Result1 = 'You lose';
    }
    else if (Computermover === 'paper') {
      Result1 = 'You win';
    }
    else if (Computermover === 'scissors') {
      Result1 = 'Tie';
    }
    
  } else if (playerMove === 'paper') {
    if (Computermover === 'rock') {
      Result1 = 'You win';
    }
    else if (Computermover === 'paper') {
      Result1 = 'Tie';
    }
    else if (Computermover === 'scissors') {
      Result1 = 'You lose';
    }
    
  } else if (playerMove === 'rock') {
    if (Computermover === 'rock') {
      Result1 = 'Tie';
    }
    else if (Computermover === 'paper') {
      Result1 = 'You lose';
    }
    else if (Computermover === 'scissors') {
      Result1 = 'You win';
    }
  }
  
  if (Result1 === 'You win') {
    score.wins = score.wins + 1;
  } else if (Result1 === 'You lose') {
    score.losses = score.losses + 1;
  } else if (Result1 === 'Tie') {
    score.ties = score.ties + 1;
  }
  
  localStorage.setItem('score', JSON.stringify(score));
  
  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = Result1;
  
  
  document.querySelector('.js-moves').innerHTML = `You
      <img src="${playerMove}-emoji.jpeg" class="move-icon">
      <img src="${Computermover}-emoji.jpeg" class="move-icon">
      Computer`;
  
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  
  const Randomnumber = Math.random();
  
  
  let Computermover = '';
  
  if (Randomnumber >= 0 && Randomnumber < 1 / 3) {
    Computermover = 'rock';
  }
  else if (Randomnumber >= 1 / 3 && Randomnumber < 2 / 3) {
    Computermover = 'paper';
  }
  else if (Randomnumber >= 2 / 3 && Randomnumber < 1) {
    Computermover = 'scissors';
  }
  
  return Computermover;
}