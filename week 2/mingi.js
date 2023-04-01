let answer = Math.floor(Math.random()*100)+1;
let guesses =[];
var guessCount = 0;

function CheckGuess() {
    let inputNum = Number(document.getElementById('inputNum').value);
    let result = document.getElementById('result');
    let list = document.getElementById('guesses');

    guesses.push(inputNum);
    guessCount++;

    if(inputNum===answer) {
        result.textContent='맞췃노 ㅋㅋ';
    } else if (inputNum<answer) {
        result.textContent='UP';
    } else {
        result.textContent='Down';
    }

    let list_items="";
    for(var i=0;i<guesses.length;i++){
        list_items += guesses[i] + " ";
    }
    list.innerHTML = list_items;

    if(guessCount>=10 && inputNum !== answer) {
        result.textContent = "실패했다. 정답은 " + answer + "임ㅋㅋ";
        document.getElementById('submit').disabled = true;
    }

}

function Reset() {
    answer = Math.floor(Math.random()*100)+1;
    guesses=[];
    guessCount=0;
    document.getElementById('inputNum').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('guesses').innerHTML="";
    document.getElementById('submit').disabled = false;
}