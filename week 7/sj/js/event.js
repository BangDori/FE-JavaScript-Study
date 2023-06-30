import { todoAdd } from './todo.js';

export function todoEvent(TD){                                            //이벤트 초기 세팅
    const todoClick = document.querySelector(".enter");                  //할 일 추가(클릭)
    const todoEnter = document.querySelector(".todo-input");              //할 일 추가(엔터)
    const completeAllBtn = document.querySelector(".complete-all-btn");   //모두 선택
    const allBtn = document.getElementById("all");                        //모두 보기              
    const activeBtn = document.getElementById("active");                  //남은 일     
    const completedBtn = document.getElementById("completed");            //끝낸 일
    const clearBtn = document.getElementById("clear");                    //모두 지우기           

    todoClick.addEventListener("click", function(){ clickAddBtn(TD); });
    todoEnter.addEventListener("keydown", function(event){ enterAddBtn(event,TD); });
    completeAllBtn.addEventListener("click", function(){ allCheckBtn(TD); });
    allBtn.addEventListener("click", function(){ allSeeBtn(TD); });
    activeBtn.addEventListener("click", function(){ remainBtn(TD); });
    completedBtn.addEventListener("click", function(){ doneBtn(TD); }); 
    clearBtn.addEventListener("click", function(){ allDelBtn(TD); });

}

function clickAddBtn(TD){                                  //할 일 추가(클릭)
    todoAdd(TD);                                      //todo추가
}
function enterAddBtn(event,TD){                            //할 일 추가(엔터)
    if (event.key === "Enter" ) todoAdd(TD);         //todo추가
}

function allCheckBtn(TD){                                  // 전체 클릭(모두 완료)
    for (let i = 0; i < TD.length; i++) {
        TD.done[i] = true;
        const todo_ltem = document.getElementsByClassName("todo-item")[i];
        todo_ltem.classList.add('checked');
    }
    TD.hal1();
}

function allSeeBtn(TD){                                   //모두 보기
    for (let i = 0; i < TD.length; i++) {
        const todo_ltem = document.getElementsByClassName("todo-item")[i];
        todo_ltem.style.display = '';
    }
}

function remainBtn(TD){                                   //남은 일
    doneToggle(TD,true);
}

function doneBtn(TD){                                     //끝낸 일
    doneToggle(TD,false);
}

function doneToggle(TD, judge){
    for (let i = 0; i < TD.length; i++) {  
        if (TD.done[i] == judge) {
            const todo_ltem = document.getElementsByClassName("todo-item")[i];
            todo_ltem.style.display = 'none';
        }
        else {
            const todo_ltem = document.getElementsByClassName("todo-item")[i];
            todo_ltem.style.display = '';
        }
    }
}

function allDelBtn(TD){                                 //모두 지우기
    const todo_item = document.getElementsByClassName("todo-item");
    for (let i = 0; i < TD.length; i++) todo_item[0].remove();

    TD.words = [];  //전부 초기화
    TD.done = [];
    TD.length = 0;
    TD.hal1();
}

export function clickCheckBtn(event,TD){               // 남은 일, 끝낸 일 설정 함수
    const checkbox = event.target; //checkbox
    const todo_item = checkbox.parentNode; //todo-item
    const length = checkbox.dataset.key; //버튼 키 값(length)

    TD.done[length] = TD.done[length] == true ? false : true; //done 값 토글
    todo_item.classList.toggle('checked'); //css 토글    
    TD.hal1();
}

export function clickDelBtn(event,TD){                //del 버튼 누를 시 삭제
    const checkbox = event.target; //delBtn
    const todo_item = checkbox.parentNode; //todo-item
    const todo_list = todo_item.parentNode; //todo-list
    const length = checkbox.dataset.key; //버튼 키 값(length)

    TD.words.splice(length,1);  //모든 정보 삭제
    TD.done.splice(length,1);
    
    setDataKey(todo_list,length,TD);  //키 값 재정렬
    TD.length--;
    todo_item.remove();
    
    TD.hal1();
}

function setDataKey(todo_list,length,TD){                    // data-key 값 재설정(del버튼 시)    
    for(let i = Number(length)+1 ; i<TD.length; i++){
        const setCheck = todo_list.getElementsByClassName("checkbox")[i];
        const setDel = todo_list.getElementsByClassName("delBtn")[i];
        setCheck.setAttribute("data-key",i-1);
        setDel.setAttribute("data-key",i-1);
    }
}