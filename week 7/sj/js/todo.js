import { clickCheckBtn } from './event.js';
import { clickDelBtn } from './event.js';

export const todoState = {  //todo리스트의 상태 저장소
    words: [],     // 할 일 이름 저장(중복 방지)
    length: 0,    // 배열의 인덱스
    state: [],     // false: 남은 일 true: 끝낸 일
}

export function hal1Check() {      // 남은 할 일 계산
    let count = 0;
    todoState.state.forEach((state) => { if (!state) count++; });
    hal1Show(count);
}

function hal1Show(count) {
    const leftItems = document.querySelector(".left-items");
    leftItems.textContent = "🥕 오늘 할 일이 " + count + "개 남았습니다 🥕";
}

export function todoAdd() {                                     // todo 추가 함수
    const todo = document.querySelector(".todo-input");
    const regex = /^\s+$/;                                      // 스페이스 값 방지 
    if (todo.value === "" || regex.test(todo.value) === true) { //공백 방지
        alert("입력해라.");
        todo.value = '';
        return;
    }
    if (todoState.words.includes(todo.value) === true) {        //중복 방지
        alert("이미 추가한 일 입니다.");
        todo.value = '';
        return;
    }

    todoItem(todo.value);
    todo.value = '';
}

function todoItem(todo) {   //todo-Item 생성
    const container = document.querySelector(".todo-list");
    const newTodo = document.createElement("li");
    const checkBtn = document.createElement("button");
    const text = document.createElement("input");
    const delBtn = document.createElement("button");

    newTodo.className = "todo-item";
    checkBtn.className = "checkbox";
    checkBtn.textContent = "✔︎";
    checkBtn.setAttribute("data-key", todoState.length);   //키 값 설정(동적인 버튼요소의 위치를 찾기 위해)
    text.type = "text";
    text.className = "content";
    text.value = todo;
    delBtn.className = "delBtn";
    delBtn.textContent = "x";
    delBtn.setAttribute("data-key", todoState.length);     //키 값 설정(동적인 버튼요소의 위치를 찾기 위해)

    newTodo.appendChild(checkBtn);
    newTodo.appendChild(text);
    newTodo.appendChild(delBtn);
    container.appendChild(newTodo);

    checkBtn.addEventListener("click", function (event) { clickCheckBtn(event); });  // 완료 여부 설정
    delBtn.addEventListener("click", function (event) { clickDelBtn(event); });      //del 버튼 누를 시

    todoState.words[todoState.length] = todo; // 추가한 todo-item 초기값 저장
    todoState.state[todoState.length] = false;
    todoState.length++;
    hal1Check();
}