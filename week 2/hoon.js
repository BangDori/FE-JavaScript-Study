let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const resetButton = document.querySelector('.resetButton');
const wrong = document.querySelector('.wrong');
let guessCount = 1;


function addCount() {
    ++guessCount;
}//비순수함수

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: "
    }
    guesses.textContent += userGuess + ' ';
    if (guessCount > 9) {
        OverCount();
    }
    else if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! Your Guess is correct!';
        wrong.textContent = '';
        lastResult.style.backgroundColor = 'green';
        lastResult.style.color = 'white';
        lowOrHi.textContent = '';
        gameOver();
    }
    else if (userGuess >= randomNumber) {
        lowOrHi.textContent = "lower";
        wrong.textContent = 'Wrong';
        addCount();
    }
    else if (userGuess <= randomNumber) {
        lowOrHi.textContent = "higher";
        wrong.textContent = 'Wrong';
        addCount();
    }
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function resetGame() {
    guessCount = 1;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    lastResult.textContent = '';
    guesses.textContent = '';
    wrong.textContent = '';
    resetButton.style.display = 'none';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    guessField.textContent = '';
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', resetGame);
}
function OverCount() {
    gameOver();
    wrong.textContent = 'GAME OVER';
    lowOrHi.textContent = '';
}