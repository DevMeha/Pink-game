'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// ROLLING DICE FUNCTIONALITY

btnRoll.addEventListener('click', function () {
  if (playing) {
    // GENERATTING A RANDOM DICE ROLL
    // DISPLAY DICE
    // CHECK FOR ROLLED IF TRUE SWITCH TO NEXT PLAYER
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      // ADD CURRENT SCORE BO JEST INNE OD 1
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // SWITCH NEXT PLAYER BO WYSLOWALA SIE 1
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    // ADD CURRENT SCORE TO ACTIVE PLAYER SCORE
    // CHECK IF PLAYER SCORE IS >=100
    // IF NO >=100 SWITCH PLAYER
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      // FINISH GAME
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playing = true;
});

// function calcAge(birthYear) {
//   const Age = 2037 - birthYear;
//   function printAge() {
//     const output = `you are ${Age}, born in ${birthYear}`;
//     console.log(output);
//   }
//   return Age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
document
  .getElementById('Next-page-calculator')
  .addEventListener('click', function () {
    const page = document.getElementById('page');
    page.classList.add('side-left');

    setTimeout(() => {
      window.location.href = '../CAL/cal.html';
    }, 500);
  });
