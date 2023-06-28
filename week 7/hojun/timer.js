const todoTitle = document.getElementsByClassName("todo-title");
let timeBoard = todoTitle[0];   // 값이 입력될 공간

function getTime() {
    const d = new Date();	    // 현재 날짜와 시간
    let hur = d.getHours();     // 시
    let min = d.getMinutes();	// 분
    let sec = d.getSeconds();	// 초

    // Formatting
    if (hur < 10) hur = "0" + hur;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    // Formatting
    const time = hur + ":" + min + ":" + sec

    // 출력
    timeBoard.innerHTML = time;
    // console.dir(timeBoard.innerHTML);

    setTimeout(getTime, 1000);	//1000밀리초(1초) 마다 반복
}

getTime();