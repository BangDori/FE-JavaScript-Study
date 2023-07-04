export function timer() {   // 현재 시간 출력
    const timeSet = document.querySelector(".todo-title");
    const presentTime = new Date();
    timeSet.textContent = String(presentTime).substring(16, 24);

    setInterval(() => {  // 매 초마다 반복
        const timeSet = document.querySelector(".todo-title");
        const presentTime = new Date();
        timeSet.textContent = String(presentTime).substring(16, 24);
    }, 1000);
}