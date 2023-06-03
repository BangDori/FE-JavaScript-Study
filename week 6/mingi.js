const name_ = document.getElementById('name');
const birthday = document.getElementById('birthday'); // type이 date인거 처음 써봄
const gender = document.getElementById('gender'); // type이 select? 신기함
const today = document.getElementById('today');
const submit = document.getElementById('submit');
const answer = document.getElementById('answer');

const total = new Date();
const year = total.getFullYear();
const month = total.getMonth() + 1;
const date = total.getDate();
const todayDate = year + "-" + month + "-" + date;
today.innerHTML += todayDate;

// Map을 이용해봄
submit.addEventListener('click', () => {
    const info = new Map();

    info.set(name_,name_.value);
    info.set(birthday,birthday.value);
    info.set(gender,gender.value);
    info.set(today,todayDate);

    if (!info.get(name_) || !info.get(birthday) || !info.get(gender) || !info.get(today)) {
        alert("데이터가 비었습니다."); // .has()를 사용할려고 햇는데 has는 키 값의 유무인듯
        return;
    }
    console.log(info);

    // 행운의 숫자 계산
    const luckyNumber = calculateLuckyNumber(info);

    // 결과 표시
    answer.innerHTML = `Your lucky number is: ${luckyNumber}`;
});

const calculateLuckyNumber = (info) => {
    // 각 정보를 이용하여 행운의 숫자 계산
    let luckyNumber = 0;

    // 이름 길이에 따른 변동값 추가
    // map에서는 size만 가능 length는 안됨 그래서 배열로 만들어서 length를 구해준다.
    const select_name = info.get(name_);
    const foundValue = Array.from(info.values()).find(value => value === select_name);
    luckyNumber += foundValue.length;
    console.log(foundValue.length);
    // 생년월일의 각 자리수를 합하여 변동값 추가
    const birthDate = new Date(info.get(birthday));
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth() + 1;
    const birthDay = birthDate.getDate();
    const birthSum = birthYear + birthMonth + birthDay;
    luckyNumber += sumDigits(birthSum);

    // 성별에 따른 변동값 추가
    if (info.get(gender) === 'male') {
        luckyNumber += 5;
    } else {
        luckyNumber += 10;
    }

    // 오늘 날짜의 각 자리수를 합하여 변동값 추가
    const todaySum = year + month + date;
    luckyNumber += sumDigits(todaySum);

    return luckyNumber;
}

const sumDigits = (number) => {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
