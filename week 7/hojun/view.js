/**
3. View
 - 남은 할 일 개수
 - 모두 보기
 - 남은 일
 - 끝낸 일
*/

const todoBottom = document.getElementsByClassName("todo-bottom")[0];
const leftItems = todoBottom.children[0];

let countOfLeft = 0;
function setTxt(i = 0) {
    countOfLeft += i;
    let txtCountOfLeft = `🥕 오늘 할 일이 ${countOfLeft}개 남았습니다 🥕`;
    leftItems.innerText = txtCountOfLeft;
}

const allBtn = document.getElementById("all");
const atvBtn = document.getElementById("active");
const cltBtn = document.getElementById("completed");

allBtn.addEventListener('click', (e) => {
    for (entry of document.getElementsByClassName("todo-item"))
        entry.style.display = 'flex';
})
atvBtn.addEventListener('click', (e) => {
    for (entry of document.getElementsByClassName("todo-item"))
        if (entry.classList.contains('checked')) entry.style.display = 'none';
        else entry.style.display = 'flex';
})
cltBtn.addEventListener('click', (e) => {
    for (entry of document.getElementsByClassName("todo-item"))
        if (entry.classList.contains('checked')) entry.style.display = 'flex';
        else entry.style.display = 'none';
})