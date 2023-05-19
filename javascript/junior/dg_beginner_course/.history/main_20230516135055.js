let playGame = confirm('Shall we play rock, paper, or scissors?');

if (playGame) {
  // play
  const playerChoice = prompt('Please enter rock, paper, or scissors.');
  if (playerChoice || playerChoice === '') {
    const playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === 'rock' ||
      playerOne === 'paper' ||
      playerOne === 'scissors'
    ) {
      const computerChoice = Math.floor(Math.floor(Math.random() * 3 + 1));
      const rpsArray = ['rock', 'paper', 'scissors']
      const computer = rpsArray[computerChoice]

      const result =
        playerOne === computer
          ? 'Tie game!'
          : playerOne === 'rock' && computer === 'paper'
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === 'paper' && computer === 'scissors'
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === 'scissors' && computer === 'rock'
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins`;

    alert(result)
    const playAgain = confirm('play again?')
    playAgain ? location.reload() : alert('ok, thanks for playing.')
    } else {
        alert("You didn't enter rock, paper, or scissors")
    }
  } else {
    alert('I guess you changed your mind. Maybe next time')
  }
} else {
    alert('Ok, maybe next time.')
}