const inputText = document.getElementById('inputText');
const strVal = document.getElementById('strVal');
const numVal = document.getElementById('numVal');
const boolVal = document.getElementById('boolVal');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

let type;
let typeValue;

inputText.addEventListener('submit', (e) => {
    e.preventDefault();//submit 이벤트로 발생하는 사이트의 새로고침같은 이벤트 방지
    type = getType(inputText[0].value);
    typeValue = inputText[0].value;
    result1.innerText = type;
});


function getType(value) {
    if (!isNaN(value)) {
        return "number";
    }
    else if (value === "true" || value === "false") {
        return "boolean";
    }
    else if (typeof (value) === "string") {
        return "string";
    }
    else {
        return "nothing";
    }
}

strVal.addEventListener('click', (e) => {
    e.preventDefault();

    switch (type) {
        case "number":
            result2.innerText = String(input);
            result1.innerText = "string";
            break;
        case "boolean":
            if (typeValue === "true" || typeValue === "false")
                result1.innerText = "string";
            else
                alert("변경불가");
            break;
        case "string":
            alert('같음');
            break;
        default:
            alert('변경불가');
            break;
    }
});

boolVal.addEventListener('click', (e) => {
    e.preventDefault();

    switch (type) {
        case "number":
            if (typeValue === "0")
                result2.innerText = "false";
            else
                result2.innerText = "true";
            result1.innerText = "boolean";
            break;
        case "boolean":
            alert("같음");
            break;
        case "string":
            if (typeValue === "true" || typeValue === "false")
                result1.innerText = "boolean";
            else
                alert('변경불가');
            break;
        default:
            alert('변경불가');
            break;
    }
});

numVal.addEventListener('click', (e) => {
    e.preventDefault();

    switch (type) {
        case "number":
            alert('같음');
            break;
        case "boolean":
            if (typeValue === "true")
                result2.innerText = 1;
            else
                result2.innerText = 0;
            result1.innerText = "number";
            break;
        case "string":
            if (isNaN(typeValue))
                alert('변경불가');
            else {
                result2.innerText = input;
                result1.innerText = "number";
            }
            break;
        default:
            alert('변경불가');
            break;
    }
});
