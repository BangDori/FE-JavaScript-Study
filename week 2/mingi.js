let answer = Math.floor(Math.random()*100)+1;
var guessCount = 0;

function CheckGuess() {
    const inputNum = Number(document.getElementById('inputNum').value);  //const로
    const result = document.getElementById('result');

    guessCount++;

    if(inputNum===answer) {
        result.textContent='맞췃노 ㅋㅋ';
    } else if (inputNum<answer) {
        result.textContent='UP';
    } else {
        result.textContent='Down';
    }

    if(guessCount>=10 && inputNum !== answer) {
        result.textContent = "실패했다. 정답은 " + answer + "임ㅋㅋ";
        document.getElementById('submit').disabled = true;
    }

}

function Reset() {
    answer = Math.floor(Math.random()*100)+1;
    guessCount=0;
    document.getElementById('inputNum').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('submit').disabled = false;
}