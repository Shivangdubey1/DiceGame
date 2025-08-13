// script.js (interactive version)
let scores = [0, 0];
let players = ["Player 1", "Player 2"];
let currentPlayer = 0;
const MAX_SCORE = 50;

function startGame() {
  players[0] = document.getElementById("p1").value.trim() || "Player 1";
  players[1] = document.getElementById("p2").value.trim() || "Player 2";

  document.getElementById("p1nmlb").innerText = players[0];
  document.getElementById("p2nmlb").innerText = players[1];
  document.getElementById("p1name").innerText = players[0];
  document.getElementById("p2name").innerText = players[1];

  scores = [0, 0];
  updateScoresUI();

  currentPlayer = 0;
  document.getElementById("start").disabled = true;
  document.getElementById("restart").disabled = false;
  document.getElementById("rolldice1").disabled = false;
  document.getElementById("rolldice2").disabled = true;

  setActivePlayer(0);
  clearWinnerBanner();
}

function restartGame() {
  if (confirm("Are you sure you want to restart the game?")) {
    location.reload();
  }
}

function updateScoresUI() {
  document.getElementById("p1sc").innerText = scores[0];
  document.getElementById("p1sc-table").innerText = scores[0];
  document.getElementById("p2sc").innerText = scores[1];
  document.getElementById("p2sc-table").innerText = scores[1];
}

function setActivePlayer(index) {
  // add visual active class
  const p1 = document.getElementById("player1");
  const p2 = document.getElementById("player2");
  if (!p1 || !p2) return;
  if (index === 0) {
    p1.classList.add("active");
    p2.classList.remove("active");
  } else {
    p2.classList.add("active");
    p1.classList.remove("active");
  }
}

function clearWinnerBanner() {
  // remove any existing banner
  const existing = document.querySelector(".winner-banner");
  if (existing) existing.remove();
}

function announceWinner(name) {
  clearWinnerBanner();
  const banner = document.createElement("div");
  banner.className = "winner-banner";
  banner.innerText = `🎉 Winner: ${name} 🎉`;
  // place banner under controls (container). Insert after board.
  const container = document.querySelector(".container");
  if (container) container.insertBefore(banner, container.querySelector(".rules"));
  // disable roll buttons
  document.getElementById("rolldice1").disabled = true;
  document.getElementById("rolldice2").disabled = true;
}

function switchPlayer() {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  document.getElementById("rolldice1").disabled = currentPlayer !== 0;
  document.getElementById("rolldice2").disabled = currentPlayer !== 1;
  setActivePlayer(currentPlayer);
}

/* rollDiceFor(playerIndex) with shake and winner UI */
function rollDiceFor(playerIndex) {
  const dice = Math.floor(Math.random() * 6) + 1;
  const diceImg = document.getElementById(`p${playerIndex + 1}dice`);
  if (diceImg) {
    diceImg.src = `./images/${dice}.png`;
    // animate shake
    diceImg.classList.remove("shake");
    // force reflow to restart animation
    void diceImg.offsetWidth;
    diceImg.classList.add("shake");
  }

  // if roll is 6 or would exceed MAX_SCORE → turn ends (no score change)
  if (dice === 6 || scores[playerIndex] + dice > MAX_SCORE) {
    // small toast-like info could be added; for now just switch
    switchPlayer();
    return;
  }

  // otherwise add score and update UI
  scores[playerIndex] += dice;
  updateScoresUI();

  // check winner
  if (scores[playerIndex] === MAX_SCORE) {
    announceWinner(players[playerIndex]);
  }
}

function p1Play() {
  if (document.getElementById("rolldice1").disabled) return;
  rollDiceFor(0);
}

function p2Play() {
  if (document.getElementById("rolldice2").disabled) return;
  rollDiceFor(1);
}
