function leftTodo(Todo){//남은 할일 업데이트
    let sum = 0;
    Todo.order.forEach((v)=>{
        if(!v.state){
            sum += 1;
        }
    })

    const LEFT_ITEMS = document.getElementsByClassName("left-items")[0];
    if(Todo.mode === 2){
        sum = Todo.order.length - sum;
        LEFT_ITEMS.innerText = `🥕 오늘 끝낸 일이 ${sum}개 있습니다 🥕`;
    }else{
        LEFT_ITEMS.innerText = `🥕 오늘 할 일이 ${sum}개 남았습니다 🥕`;
    }
}

function validation(Todo, value){// input에 입력된 값의 중복, 공백여부 판단
    if (value.length === 0 || value.trim().length === 0){
        alert("todo can not be empty");
        return 0;
    }
    if (value.length > 25 ){
        alert("todo is too long");
        return 1;
    }
    if (Todo.has(value)){
        alert("todo already exists");
        return 2;
    }
    return 3;
}

export function addTodo(Todo,TODO_INPUT) { // Todo 추가
    switch (validation(Todo, TODO_INPUT.value)){
        case 0:
            TODO_INPUT.value = "";
            break;
        case 3:
            new Todo(TODO_INPUT.value); // Todo 클래스의 스태틱 배열에 바로 값을 추가함
            TODO_INPUT.value = "";
            renderTodo(Todo);
            break;
    }
}

export function renderTodo(Todo) { //Todo-list 태그 렌더링
    leftTodo(Todo);//남은 할 일 업데이트
    const TODO_LIST = document.getElementsByClassName("todo-list")[0];
    while(TODO_LIST.firstChild){
        TODO_LIST.firstChild.remove();
    }

    Todo.order.forEach(function(todoItem){
        const VIEW = todoItem.state;
        if(Todo.mode === 1 && VIEW === true){
            return;
        }else if(Todo.mode === 2 && VIEW === false){
            return;
        }
        const LI = document.createElement("li");
        const CHECKBOX = document.createElement("button");
        const DELBTN = document.createElement("button");
        const INPUT = document.createElement("input");

        LI.setAttribute("class", "todo-item");
        LI.setAttribute("id", `todo_${todoItem.getOrder()}`);
        CHECKBOX.setAttribute("class", "checkbox");
        CHECKBOX.innerText = "✔︎";
        DELBTN.setAttribute("class", "delBtn");
        DELBTN.innerText = "🗑️";

        INPUT.setAttribute("class", "content");
        INPUT.setAttribute("type", "text");
        INPUT.setAttribute("placeholder", "할 일을 입력하세요!");
        INPUT.setAttribute("value", todoItem.content);
        if(VIEW){
            LI.setAttribute("class", "todo-item checked");
            INPUT.readOnly =true;
        }

        LI.appendChild(CHECKBOX);
        LI.appendChild(INPUT);
        LI.appendChild(DELBTN);
        TODO_LIST.appendChild(LI);
    })
}

export function initTodoEvent(Todo) { //초기 이벤트 설정
    const TODO_LIST = document.getElementsByClassName("todo-list")[0];
    TODO_LIST.addEventListener("click", function(e){
        const TARGET = e.target;
        
        if (TARGET.classList.contains("checkbox")){
            const LI = TARGET.closest("li");
            const IDX = Number(LI.id.slice(5, LI.id.length));
            const TODO_ITEM = Todo.get(IDX);

            TODO_ITEM.state = !TODO_ITEM.state;
            renderTodo(Todo);
        }else if(TARGET.classList.contains("delBtn")){
            const LI = TARGET.closest("li");
            const IDX = Number(LI.id.slice(5, LI.id.length));

            Todo.remove(IDX);
            renderTodo(Todo);
        }
    });

    TODO_LIST.addEventListener("focusout", function(e){
        const TARGET = e.target;
        
        if (TARGET.classList.contains("content")){
            const LI = TARGET.closest("li");
            const IDX = Number(LI.id.slice(5, LI.id.length));

            if (TARGET.value !== Todo.get(IDX).content){
                if (validation(Todo, TARGET.value, true) === 3){
                    Todo.get(IDX).content = TARGET.value;
                }
            }
            renderTodo(Todo);
        }
    });
}