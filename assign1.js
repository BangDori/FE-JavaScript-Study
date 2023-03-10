
function getType(data) {
    if (typeof data === "string") {
        if(data === "true" || data === "false")
            return "불리언";
        else if(data.indexOf('{') != -1 && data.indexOf('}') != -1){
            return "객체";
        }
        else {
            return "문자열";     
        }
    } else if (Array.isArray(data)) {
        return "배열"; 
    } else if (typeof data === "function") {
        return "함수";
    } else {
        return "알 수 없는 타입";
    }
}

function showType() {
    //input 요소 가져오기
    var input = document.getElementById("inputText");
    var data = input.value;

    // 데이터 타입 확인하기 
    var dataType;
    
    if(isNaN(data)) {
        dataType = getType(data);
    }
    else {
        dataType = "숫자";
    }
    

    // 결과 출력하기
    var result = document.getElementById("result");
    result.innerHTML = "데이터 타입: " + dataType;
}