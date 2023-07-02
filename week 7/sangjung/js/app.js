import {initEvent} from './event.js';
import {addTodo} from './todo.js';
import {renderTodo} from './todo.js';
import {initTodoEvent} from './todo.js';
import {initClock} from './clock.js';

function init(){ //최초 실행 함수
 
    const Todo =  (function(){

        let mode = 0;
        return class { //Todo list를 담기 위한 클래스

            static get DEFAULT_MODE(){
                return 0;
            }
            static get ALL_MODE(){
                return 0;
            }
            static get ACTIVE_MODE(){
                return 1;
            }
            static get COMPLETED_MODE(){
                return 2;
            }
            static get mode(){
                return mode;
            }
            static set mode(pMode){
                if (pMode in [0,1,2]){
                    mode = pMode;
                }
            }

            static todoItems = []; //Todo의 정보들을 리스트형태로 저장

            constructor(content, state = false){
                this.content = content;
                this.state = state;
                Todo.todoItems.unshift(this);
            }

            getOrder(){
                return Todo.todoItems.indexOf(this);
            }
        
            static has(value){
                const todoArray = Array.from(Todo.todoItems, (v) => v.content);
                if (todoArray.includes(value)){
                    return true;
                }
                return false;
            }
        
            static get(idx){
                return Todo.todoItems[idx];
            }
        
            static remove(idx){
                Todo.todoItems.splice(idx, 1);
            }
        
            static clear(){
                Todo.todoItems = [];
            }
        
       }
    }());
    
    // 실시간 타이머 표시
    initClock();
    //Todo 리스트 이벤트 추가 함수
    initTodoEvent(Todo);
    //입력 버튼 및 보기 버튼 이벤트 추가 함수
    initEvent(Todo, addTodo, renderTodo);

}

document.addEventListener('load',init());