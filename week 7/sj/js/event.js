import { todoAdd } from './todo.js';
import { todoState } from './todo.js';
import { hal1Check } from './todo.js';

export function todoEvent() {                                             //이벤트 초기 세팅
    const clickAddBtn = document.querySelector(".enter");                 //할 일 추가(클릭)
    const enterAddBtn = document.querySelector(".todo-input");            //할 일 추가(엔터)
    const allCompleteBtn = document.querySelector(".complete-all-btn");   //모두 완료
    const allSeeBtn = document.getElementById("all");                     //모두 보기              
    const remainBtn = document.getElementById("active");                  //남은 일     
    const completedBtn = document.getElementById("completed");            //끝낸 일
    const allDeleteBtn = document.getElementById("clear");                //모두 지우기           

    clickAddBtn.addEventListener("click", () => { todoAdd(); });          //todo추가
    enterAddBtn.addEventListener("keydown", (event) => {
        if (event.key === "Enter") todoAdd();                             //todo추가
    });

    allCompleteBtn.addEventListener("click", () => {                      //모두 완료
        todoState.state.forEach((item, index) => {
            todoState.state[index] = true;
            const todo_item = document.getElementsByClassName("todo-item")[index];
            todo_item.classList.add('checked');
        });
        hal1Check();
    });

    allSeeBtn.addEventListener("click", () => {                           //모두 보기
        for (let todo_item of document.getElementsByClassName("todo-item"))
            todo_item.style.display = '';
    });

    remainBtn.addEventListener("click", () => { doneToggle(true); });     //남은 일
    
    completedBtn.addEventListener("click", () => { doneToggle(false); }); //끝낸 일

    allDeleteBtn.addEventListener("click", () => {                        //모두 지우기
        Array.from(document.getElementsByClassName("todo-item")).forEach( (todo_item) =>{
            todo_item.remove();
        });

        todoState.words = [];                                             //전부 초기화
        todoState.state = [];
        todoState.length = 0;
        hal1Check();
    });
}

function doneToggle(judge) {   //상태 토글
    Array.from(document.getElementsByClassName("todo-item")).forEach((todo_item, index) => {
        if (todoState.state[index] === judge) todo_item.style.display = 'none';
        else todo_item.style.display = '';
    })
}

export function clickCheckBtn(event) { // 남은 일, 끝낸 일 설정 함수
    const checkbox = event.target;          //checkbox
    const todo_item = checkbox.parentNode;  //todo-item
    const length = checkbox.dataset.key;    //버튼 키 값(length)

    todoState.state[length] = !todoState.state[length]; //state 값 토글
    todo_item.classList.toggle('checked');  //css 토글    
    hal1Check();
}

export function clickDelBtn(event) {   //del 버튼 누를 시 삭제
    const checkbox = event.target;          //delBtn
    const todo_item = checkbox.parentNode;  //todo-item
    const todo_list = todo_item.parentNode; //todo-list
    const btnKey = checkbox.dataset.key;    //버튼 키 값(length)

    todoState.words.splice(btnKey, 1);      //모든 정보 삭제
    todoState.state.splice(btnKey, 1);
    todoState.length--;
    todo_item.remove();

    setDataKey(todo_list);                  //키 값 재정렬
    hal1Check();
}

function setDataKey(todo_list) { // data-key 값 재설정(del버튼 시)   
    Array.from(todo_list.getElementsByClassName("checkbox")).forEach((setCheck, index) => {
        const setodoStateel = todo_list.getElementsByClassName("delBtn")[index];
        setCheck.setAttribute("data-key", index);
        setodoStateel.setAttribute("data-key", index);
    })
}
