// range and ranmdom number
const range = 100;
let randomNumber = getRandom();
// entered nums
let inputArr = [];

// 입력 = input
// 출력 = entered, result
const inputForm = document.querySelector('form');
const entered = document.querySelector('#entered');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');

const input = inputForm[0];
input.placeholder = `1 ~ ${range}`;

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(randomNumber);
    console.dir(inputForm);
    console.dir(entered);
    console.dir(result);

    const inputNum = Number(input.value);

    if (!checkRange(inputNum)) {
        alert('Out of Range');
        resetInput();
        return;
    }

    if (checkGuess(inputNum)) {
        // correct
        correct();
    }
    else {
        // wrong
        inputArr.push(inputNum);
        setEntered(inputNum);

        // Game Over -> Reset Game
        if (inputArr.length >= 10) {
            gameOver();
        }
    }
});


reset.addEventListener('click', (e) => {
    e.preventDefault();

    inputArr = [];
    randomNumber = getRandom();
    gameReset();
});

/**
 * input range : 1 ~ range
 * @param {*} value : user input
 * @returns : in range = true
 */
function checkRange(value) {
    if (value < 1 || value > range) return false;
    else return true;
}

/**
 * check user input
 * @param {*} value : user input 
 * @returns : compare user input to randomNumber
 */
function checkGuess(value) {
    resetInput();

    if (value === randomNumber) return true;
    else {
        if (value < randomNumber) setResult('higher');
        else setResult('lower');

        return false;
    }
}

/**
 * when user input is right
 */
function correct() {
    disableInput(true);
    resetEntered();
    setResult('Correct!');
    showResetButton(true);
}

function gameOver() {
    disableInput(true);
    resetEntered();
    setResult('Game Over');
    showResetButton(true);
}

function gameReset() {
    disableInput(false);
    setEntered('Previous Guess :');
    setResult('');
    showResetButton(false);
}

// funcs
function getRandom() {
    return Math.floor(Math.random() * range) + 1;
}
function setEntered(value) {
    entered.innerText += ` ${value}`;
}
function setResult(value) {
    result.innerText = value;
}
function resetEntered() {
    entered.innerText = '';
}
function resetInput() {
    input.value = null;
}
function showResetButton(value) {
    if (value) reset.style.display = 'block';
    else reset.style.display = 'none';
}
function disableInput(value) {
    if (value) input.disabled = true;
    else input.disabled = false;
}
