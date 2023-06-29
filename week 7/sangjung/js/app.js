import {initEvent} from './event.js';
import {addTodo} from './todo.js';
import {renderTodo} from './todo.js';
import {initTodoEvent} from './todo.js';
import {initClock} from './clock.js';

function init(){ //최초 실행 함수

    const Todo = class { //Todo list를 담기 위한 클래스
        
        static mode = 0;
        static todoItems = []; //Todo의 정보들을 리스트형태로 저장

        constructor(content, state = false){
            this.content = content;
            this.state = state;
            Todo.order.unshift(this);
        }

        getOrder(){
            return Todo.order.indexOf(this);
        }
    
        static has(value){
            const todoArray = Array.from(Todo.order, (v) => v.content);
            if (todoArray.includes(value)){
                return true;
            }
            return false;
        }
    
        static get(idx){
            return Todo.order[idx];
        }
    
        static remove(idx){
            Todo.order.splice(idx, 1);
        }
    
        static clear(){
            Todo.order = [];
        }

        static defaultMode(){
            Todo.mode = 0;
        }

        static allMode(){
            Todo.mode = 0;
        }      

        static activeMode(){
            Todo.mode = 1;
        }   

        static compltedMode(){
            Todo.mode = 2;
        }
    
    }

    // 실시간 타이머 표시
    initClock();
    //Todo 리스트 이벤트 추가 함수
    initTodoEvent(Todo);
    //입력 버튼 및 보기 버튼 이벤트 추가 함수
    initEvent(Todo, addTodo, renderTodo);
}

document.addEventListener('load',init());