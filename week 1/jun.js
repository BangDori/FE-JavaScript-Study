// 입력 값 가져오기
const input = document.getElementById("inputText");

// 입력 값의 데이터 타입을 출력하기 위한 paragraph
const result = document.getElementById("result");

// 데이터 타입 변경 값을 출력하기 위한 paragraph
const changeResult = document.getElementById("changeResult");

// 타입 상수
const STRING = "문자열";
const NUMBER = "숫자";
const BOOLEAN = "불리언";
const SPECIAL = "특수 문자";
const trueOrFalse = ["true", "false"];

// 공백 체크를 위한 정규표현식
const regExpWhitePattern = /[\s]/g;

// 특수문자 체크를 위한 정규표현식
const regExpSpecPattern = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

// 타입 표시 함수
function showType() {
  // 입력값 가져오기
  const value = input.value;

  // 공백이 존재하는지 확인
  if (regExpWhitePattern.test(value)) {
    result.textContent = "공백이 존재합니다.";
    return;
  }

  // 입력값이 존재하는지 확인
  if (value.length === 0) {
    result.textContent = "데이터를 입력해주세요.";
    return;
  }

  // 데이터 타입 확인하기
  result.textContent = getType(value);
}

// 데이터 타입 판별
function getType(value) {
  if (isNaN(value)) {
    if (trueOrFalse.includes(value)) return BOOLEAN;
    else if (regExpSpecPattern.test(value)) return SPECIAL;

    return STRING;
  } else {
    return NUMBER;
  }
}

// 타입 변환 함수
function ChangeType(type) {
  const dataType = result.textContent;
  let resultCh = input.value;
  let message = "";

  switch (type) {
    // String type으로 변경하는 경우
    case STRING:
      if (dataType === STRING) message = "같은 타입입니다.";
      else message = resultCh.toString();

      break;

    // Number type으로 변경하는 경우
    case NUMBER:
      if (dataType === NUMBER) message = "같은 타입입니다.";
      else {
        if (dataType === BOOLEAN)
          message = resultCh === "true" ? Number(true) : Number(false);
        else message = Number(resultCh);
      }

      break;

    // Boolean type으로 변경하는 경우
    case BOOLEAN:
      if (dataType === "불리언") message = "같은 타입입니다.";
      else message = !!resultCh;

      break;

    // 존재하지 않는 타입
    default:
      message = "에러";
      break;
  }

  // 변경된 타입의 값 출력
  changeResult.textContent = message;
}
