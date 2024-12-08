const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// generate a number between 16 and 21
function pickBankScore() {
  return Math.floor(Math.random() * 6) + 16;
}
// generate a number between 1 and 11
function pickPlayerCard() {
  return Math.floor(Math.random() * 11) + 1;
}

// return the scores of both bank and player
function stateOfTheGame(player_score, bank_score) {
  return `Player'score is: ${player_score} and bank's score is: ${bank_score}`;
}

// check the score and gives result
function endGameMessage(player_score, bank_score) {
  if (player_score > 21) {
    return "You lost!";
  } else if (player_score === 21) {
    return "Black Jack";
  } else if (player_score > bank_score) {
    return "You win!";
  } else if (player_score === bank_score) {
    return "Push";
  } else {
    return "You lost";
  }
}

function game() {
  // define the scores
  let player_score = 0;
  let bank_score = 0;

  rl.question('Start the game (yes/no)', (answer)=> { 
    if (answer === 'yes') {
      playRound();
    } else { 
      rl.close;
    }
  })

  function playRound() {
    // add score to player and bank
    player_score += pickPlayerCard();
    bank_score = pickBankScore();

    // log the scores
    console.log(stateOfTheGame(player_score, bank_score));

    // check if score is greater than 21
    if (player_score > 21) {
      console.log(endGameMessage(player_score, bank_score));
      play_again();
    }

    // Ask if player wants another car and if yes, play another round
    rl.question("Do you want to pick another card? (yes/no) ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        playRound();
      } else {
        console.log(endGameMessage(player_score, bank_score));
        play_again();
      }
    });
  }

  // Ask if the player wants to play again.
  function play_again() {
    rl.question("Do you want to play again(yes/no)?", (answer) => {
      if (answer === "yes") {
        player_score = 0;
        bank_score = 0;
        playRound();
      } else {
        rl.close();
      }
    });
  }

  
}

game();

module.exports = {
  pickBankScore,
  pickPlayerCard,
  stateOfTheGame,
  endGameMessage,
};
