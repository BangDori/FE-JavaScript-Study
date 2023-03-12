// typeof 를 사용하여 데이터 타입 판별
function getType(data) {
    if (typeof data === "string") {
        if(data === "true" || data === "false")
            return "불리언";
        else if(data.indexOf('{') != -1 && data.indexOf('}') != -1) {
            return "객체";
        }
        else {
            return "문자열";     
        }
    } 
    else {
        return "알 수 없는 타입";
    }
}

function showType() {
    //input 요소 가져오기
    var input = document.getElementById("inputText");
    if(input.value==='') {
        alert("데이터를 입력하세요");
    }
    else{
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
        result.innerHTML = dataType;    
    } 
    
}

function ChangeType(buttonId) {
    var dataType = result.innerText;
    var resultCh = document.getElementById("inputText").value;
    //console.log(resultCh);

    switch(buttonId) {
        case "string":
            if(dataType === "문자열") {
                alert("같은 타입입니다.");
                break;
            }
            else {
                resultCh = resultCh.toString();
                // Object.prototype.toString 메서드 사용
            }
            break;
        case "number":
            if(dataType === "숫자") {
                alert("같은 타입입니다.");
                break;
            }
            else {
                if(resultCh==="true") {
                    resultCh = Number(true);
                }
                else if(resultCh==="false") {
                    resultCh = Number(false);
                }
                else resultCh = Number(resultCh);
                // Number 생성자 함수를 new 연산자 없이 호출
            }
            break;
        case "boolean":
            if(dataType === "불리언") {
                alert("같은 타입입니다.");
                break;
            }
            else {
                resultCh = !!resultCh;
                // ! 부정 논리 연산자를 두 번 사용
            }
            break;
    }
    
    var result1 = document.getElementById('result1');
    result1.innerHTML = resultCh;
    // 왜 innerHTML이 작동을 안할까용 시팔 
    // 따옴표를 안넣엇네 병신인가 ㅋㅋ
    
    //alert(resultCh);
    
    //console.log(dataType);
    //console.log(resultCh);

}