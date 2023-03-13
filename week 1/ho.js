const inputValue = document.getElementById('inputValue');

const numValue = document.getElementById('numValue');
const strValue = document.getElementById('strValue');
const boolValue = document.getElementById('boolValue');

const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

let input
let typeOfInput

/**
 * 사용자 입력에 대해서 타입을 검사하고 출력하는 함수
 */
inputValue.addEventListener('submit', (e) => {
    e.preventDefault();
    input = inputValue[0].value;
    typeOfInput = getType(input);
    result1.innerText = typeOfInput;
});

numValue.addEventListener('click', (e) => {
    e.preventDefault();

    switch (typeOfInput) {
        case "number":
            alert('same type');
            break;
        case "boolean":
            if (input === "true")
                result2.innerText = 1;
            else
                result2.innerText = 0;
            result1.innerText = "number";
            break;
        case "string":
            if (isNaN(input))
                alert('cannot change');
            else {
                result2.innerText = input;
                result1.innerText = "number";
            }
            break;
        default:
            alert('cannot change');
            break;
    }
});
strValue.addEventListener('click', (e) => {
    e.preventDefault();

    switch (typeOfInput) {
        case "number":
            result2.innerText = String(input);
            result1.innerText = "string";
            break;
        case "boolean":
            if (input === "true" || input === "false")
                result1.innerText = "string";
            else
                alert("cannot change");
            break;
        case "string":
            alert('same type');
            break;
        default:
            alert('cannot change');
            break;
    }
});
boolValue.addEventListener('click', (e) => {
    e.preventDefault();

    switch (typeOfInput) {
        case "number":
            if (input === "0")
                result2.innerText = "false";
            else
                result2.innerText = "true";
            result1.innerText = "boolean";
            break;
        case "boolean":
            alert("same type");
            break;
        case "string":
            if (input === "true" || input === "false")
                result1.innerText = "boolean";
            else
                alert('cannot change');
            break;
        default:
            alert('cannot change');
            break;
    }
});

/**
 * 타입을 반환하는 함수
 * @param {*} input : 타입을 알고 싶은 변수
 * @returns         : 매개변수의 타입 반환
 */
function getType(input) {
    if (!isNaN(input)) {
        return "number";
    } else if (input === "true" || input === "false") {
        return "boolean";
    } else if (typeof input === "string") {
        return "string";
    } else {
        return "unknown";
    }
}