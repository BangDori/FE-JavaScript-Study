import { clickCheckBtn } from './event.js';
import { clickDelBtn } from './event.js';
export function todoAdd(TD) {                                   // todo 추가 함수
    const todo = document.querySelector(".todo-input");         
    const regex = /^\s+$/;                                      // 스페이스 값 방지 
    if (todo.value == "" || regex.test(todo.value) == true) {   //공백 방지
        alert("입력해라.");
        todo.value = '';
        return;
    }
    if (TD.words.includes(todo.value) == true){                 //중복 방지
        alert("이미 추가한 일 입니다.");
        todo.value = '';
        return;
    } 
    
    todoList(todo.value, TD);
    todo.value = '';
}

function todoList(todo, TD) {                          //todo-list 생성
    const container = document.querySelector(".todo-list");
    const newTodo = document.createElement("li");
    const checkBtn = document.createElement("button");
    const text = document.createElement("input");
    const delBtn = document.createElement("button");

    newTodo.className = "todo-item";
    checkBtn.className = "checkbox";
    checkBtn.textContent = "✔︎";
    checkBtn.setAttribute("data-key", TD.length);   //키 값 설정(동적인 버튼요소의 위치를 찾기 위해)
    text.type = "text";
    text.className = "content";
    text.value = todo;
    delBtn.className = "delBtn";
    delBtn.textContent = "x";
    delBtn.setAttribute("data-key", TD.length);    //키 값 설정(동적인 버튼요소의 위치를 찾기 위해)
    
    newTodo.appendChild(checkBtn);
    newTodo.appendChild(text);
    newTodo.appendChild(delBtn);
    container.appendChild(newTodo);

    checkBtn.addEventListener("click", function (event) { clickCheckBtn(event,TD); });  // 완료 여부 설정
    delBtn.addEventListener("click", function (event) { clickDelBtn(event,TD); });      //del 버튼 누를 시
    
    TD.done[TD.length] = false; // 추가한 todo-item 정보 저장
    TD.words[TD.length] = todo;
    TD.length++;
    TD.hal1();
}