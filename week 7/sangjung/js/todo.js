function leftTodo(Todo){//남은 할일 업데이트
    let sum = 0;
    Todo.order.forEach((v)=>{
        if(!v.state){
            sum += 1;
        }
    })

    const leftItems = document.getElementsByClassName("left-items")[0];
    if(Todo.mode === 2){
        sum = Todo.order.length - sum;
        leftItems.innerText = `🥕 오늘 끝낸 일이 ${sum}개 있습니다 🥕`;
    }else{
        leftItems.innerText = `🥕 오늘 할 일이 ${sum}개 남았습니다 🥕`;
    }
}

function validation(Todo, value){// input에 입력된 값의 중복, 공백여부 판단
    if (value.trim().length === 0){
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

export function addTodo(Todo,todoInput) { // Todo 추가
    switch (validation(Todo, todoInput.value)){
        case 0:
            todoInput.value = "";
            break;
        case 3:
            new Todo(todoInput.value); // Todo 클래스의 스태틱 배열에 바로 값을 추가함
            todoInput.value = "";
            renderTodo(Todo);
            break;
    }
}

export function renderTodo(Todo) { //Todo-list 태그 렌더링
    leftTodo(Todo);//남은 할 일 업데이트
    const todoList = document.getElementsByClassName("todo-list")[0];
    while(todoList.firstChild){
        todoList.firstChild.remove();
    }

    Todo.order.forEach(function(todoItem){
        const view = todoItem.state;
        if(Todo.mode === 1 && view === true){
            return;
        }else if(Todo.mode === 2 && view === false){
            return;
        }
        const li = document.createElement("li");
        const checkbox = document.createElement("button");
        const delbtn = document.createElement("button");
        const input = document.createElement("input");

        li.setAttribute("class", "todo-item");
        li.setAttribute("id", `todo_${todoItem.getOrder()}`);
        checkbox.setAttribute("class", "checkbox");
        checkbox.innerText = "✔︎";
        delbtn.setAttribute("class", "delBtn");
        delbtn.innerText = "🗑️";

        input.setAttribute("class", "content");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "할 일을 입력하세요!");
        input.setAttribute("value", todoItem.content);
        if(view){
            li.setAttribute("class", "todo-item checked");
            input.readOnly =true;
        }

        li.appendChild(checkbox);
        li.appendChild(input);
        li.appendChild(delbtn);
        todoList.appendChild(li);
    })
}

export function initTodoEvent(Todo) { //초기 이벤트 설정
    const todoList = document.getElementsByClassName("todo-list")[0];
    todoList.addEventListener("click", function(e){
        const target = e.target;
        
        if (target.classList.contains("checkbox")){
            const li = target.closest("li");
            const idx = Number(li.id.slice(5, li.id.length));
            const todoItem = Todo.get(idx);

            todoItem.state = !todoItem.state;
            renderTodo(Todo);
        }else if(target.classList.contains("delBtn")){
            const li = target.closest("li");
            const idx = Number(li.id.slice(5, li.id.length));

            Todo.remove(idx);
            renderTodo(Todo);
        }
    });

    todoList.addEventListener("focusout", function(e){
        const target = e.target;
        
        if (target.classList.contains("content")){
            const li = target.closest("li");
            const idx = Number(li.id.slice(5, li.id.length));

            if (target.value !== Todo.get(idx).content){
                if (validation(Todo, target.value, true) === 3){
                    Todo.get(idx).content = target.value;
                }
            }
            renderTodo(Todo);
        }
    });
}