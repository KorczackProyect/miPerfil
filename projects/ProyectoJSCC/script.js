let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// 1. Genera un entero entre 0 y 9.
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Bonus: calcula la distancia entre dos números.
const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

// 2. Devuelve true si gana el humano, incluyendo empates.
const compareGuesses = (humanGuess, computerGuess, target) => {
  const humanDistance = getAbsoluteDistance(humanGuess, target);
  const computerDistance = getAbsoluteDistance(computerGuess, target);

  return humanDistance <= computerDistance;
};

// 3. Aumenta el puntaje del ganador.
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

// 4. Avanza a la siguiente ronda.
const advanceRound = () => {
  currentRoundNumber += 1;
};


// Restauramos los valores para comenzar el juego normalmente.
humanScore = 0;
computerScore = 0;
currentRoundNumber = 1;
// Comprueba la entrada al pulsar "Make a Guess".
document.getElementById('guess').addEventListener('click', event => {
  const input = document.getElementById('human-guess');
  const guess = Number(input.value);

  if (
    input.value === '' ||
    !Number.isInteger(guess) ||
    guess < 0 ||
    guess > 9
  ) {
    alert('Ingresa un número entero entre 0 y 9.');

    // Impide que game.js procese esta apuesta inválida.
    event.stopImmediatePropagation();
  }
});