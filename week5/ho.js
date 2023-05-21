/*
    화살표 함수,
    배열,
    Number,
    Math,
    Date,
    RegExp,
    String,
    Symbol,
    Iterable,
    Spread,
    Destructuring Allocation
*/

// Horoscopes of the day

const Name = document.getElementById('Name');
const Gender = document.getElementById('Gender');
const Birthday = document.getElementById('Birthday');
const Today = document.getElementById('Today');
const Form = document.getElementById('Form');

const Answer = document.getElementById('Answer');

const calculateLifePathNumber = ({ name, gender, birthday, today }) => {
    // Calculate life path number based on birthdate
    let lifePath = 0;
    let birthDigits = birthday.replaceAll('-', '').split('');
    for (let i = 0; i < birthDigits.length; i++) {
        lifePath += parseInt(birthDigits[i]);
    }
    while (lifePath > 9) {
        let digits = lifePath.toString().split('');
        lifePath = 0;
        for (let i = 0; i < digits.length; i++) {
            lifePath += parseInt(digits[i]);
        }
    }

    // Calculate expression number based on name
    let expression = 0;
    let nameDigits = name.toUpperCase().split('');
    for (let i = 0; i < nameDigits.length; i++) {
        let value = 0;
        switch (nameDigits[i]) {
            case 'A': case 'J': case 'S':
                value = 1; break;
            case 'B': case 'K': case 'T':
                value = 2; break;
            case 'C': case 'L': case 'U':
                value = 3; break;
            case 'D': case 'M': case 'V':
                value = 4; break;
            case 'E': case 'N': case 'W':
                value = 5; break;
            case 'F': case 'O': case 'X':
                value = 6; break;
            case 'G': case 'P': case 'Y':
                value = 7; break;
            case 'H': case 'Q': case 'Z':
                value = 8; break;
            case 'I': case 'R':
                value = 9; break;
        }
        expression += value;
    }
    while (expression > 9) {
        let digits = expression.toString().split('');
        expression = 0;
        for (let i = 0; i < digits.length; i++) {
            expression += parseInt(digits[i]);
        }
    }

    // Determine gender and calculate soul urge number
    let genderFactor = 1;
    if (gender === 'female') {
        genderFactor = 2;
    }
    let soulUrge = 0;
    let todayDigits = today.replaceAll('-', '').split('');
    for (let i = 0; i < todayDigits.length; i++) {
        if (parseInt(todayDigits[i]) === genderFactor) {
            soulUrge++;
        }
    }

    return {
        'Life Path Number': lifePath,
        'Expression Number': expression,
        'Soul Urge Number': soulUrge
    };
}

Form.addEventListener('submit', (event) => {
    event.preventDefault();

    const info = [
        Name.value,
        Gender.value,
        Birthday.value,
        Today.value
    ];
    const result = calculateLifePathNumber(info);

    let s = '';
    let ss = JSON.stringify(result).split(',');

    for (let i = 0; i < ss.length; i++) {
        ss[i] = ss[i].replace(/["{}\\]/g, '').concat('\n');
        s += ss[i];
    }

    Answer.innerText = s;
});
