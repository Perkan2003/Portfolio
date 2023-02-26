'use strict';

const rock = document.querySelector('.player-rock');
const paper = document.querySelector('.player-paper');
const scissors = document.querySelector('.player-scissors');
const table = document.querySelector('.table');
const btnReset = document.querySelector('.btn-reset');
const scorePlayer = document.querySelector('.score-player');
const scoreOpponent = document.querySelector('.score-opponent');
let score1 = 0;
let score2 = 0;
let randomNum;
function opponentSelection() {
  randomNum = Math.round(Math.random() * 2 + 1);
  return randomNum;
}

rock.addEventListener('click', function () {
  table.innerHTML = '';
  opponentSelection();
  if (randomNum == 1) {
    table.innerHTML = `
    <p>Draw</p>
      <div>
        <span class="draw">Rock</span>
        <span class="draw">Rock</span>
      </div>
    `;
  }
  if (randomNum == 2) {
    table.innerHTML = `
    <p>Opponent win</p>
      <div>
        <span class="loser">Rock</span>
        <span class="winner">Paper</span>
      </div>
    `;
    score2++;
    scoreOpponent.textContent = score2;
  }
  if (randomNum == 3) {
    table.innerHTML = `
    <p>Player win</p>
      <div>
        <span class="winner">Rock</span>
        <span class="loser">Scissors</span>
      </div>
    `;
    score1++;
    scorePlayer.textContent = score1;
  }
});

paper.addEventListener('click', function () {
  table.innerHTML = '';
  opponentSelection();
  if (randomNum == 1) {
    table.innerHTML = `
    <p>Player win</p>
      <div>
        <span class="winner">Paper</span>
        <span class="loser">Rock</span>
      </div>
    `;
    score1++;
    scorePlayer.textContent = score1;
  }
  if (randomNum == 2) {
    table.innerHTML = `
    <p>Draw</p>
      <div>
        <span class="draw">Paper</span>
        <span class="draw">Paper</span>
      </div>
    `;
  }
  if (randomNum == 3) {
    table.innerHTML = `
    <p>Opponent win</p>
      <div>
        <span class="loser">Paper</span>
        <span class="winner">Scissors</span>
      </div>
    `;
    score2++;
    scoreOpponent.textContent = score2;
  }
});

scissors.addEventListener('click', function () {
  table.innerHTML = '';
  opponentSelection();
  if (randomNum == 1) {
    table.innerHTML = `
    <p>Opponent win</p>
      <div>
        <span class="loser">Scissors</span>
        <span class="winner">Rock</span>
      </div>
    `;
    score2++;
    scoreOpponent.textContent = score2;
  }
  if (randomNum == 2) {
    table.innerHTML = `
    <p>Player win</p>
      <div>
        <span class="winner">Scissors</span>
        <span class="loser">Paper</span>
      </div>
    `;
    score1++;
    scorePlayer.textContent = score1;
  }
  if (randomNum == 3) {
    table.innerHTML = `
    <p>Draw</p>
      <div>
        <span class="draw">Scissors</span>
        <span class="draw">Scissors</span>
      </div>
    `;
  }
});

btnReset.addEventListener('click', function () {
  table.innerHTML = '<p class="table-text">Choose to start game</p>';
  score1 = 0;
  scorePlayer.textContent = score1;
  score2 = 0;
  scoreOpponent.textContent = score1;
});
