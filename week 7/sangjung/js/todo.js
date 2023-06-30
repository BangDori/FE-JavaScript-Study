function leftTodo(Todo){//남은 할일 업데이트
    let sum = 0;
    Todo.todoItems.forEach((v)=>{
        if(!v.state){
            sum += 1;
        }
    })

    const leftItems = document.querySelector(".left-items");
    if(Todo.mode === Todo.COMPLETED_MODE.get()) {
        sum = Todo.todoItems.length - sum;
        leftItems.textContent = `🥕 오늘 끝낸 일이 ${sum}개 있습니다 🥕`;
    }else{
        leftItems.textContent = `🥕 오늘 할 일이 ${sum}개 남았습니다 🥕`;
    }
}

function validation(Todo, value){// input에 입력된 값의 중복, 공백여부 판단
    if (value.trim().length === 0){
        alert("todo can not be empty");
        return 'empty';
    }
    if (value.length > 25 ){
        alert("todo is too long");
        return 'long';
    }
    if (Todo.has(value)){
        alert("todo already exists");
        return 'exists';
    }
    return true;
}

export function addTodo(Todo,todoInput) { // Todo 추가
    switch (validation(Todo, todoInput.value)){
        case 'empty':
            todoInput.value = "";
            break;
        case true:
            new Todo(todoInput.value); // Todo 클래스의 스태틱 배열에 바로 값을 추가함
            todoInput.value = "";
            renderTodo(Todo);
            break;
    }
}

export function renderTodo(Todo) { //Todo-list 태그 렌더링
    leftTodo(Todo);//남은 할 일 업데이트
    const todoList = document.querySelector(".todo-list");
    while(todoList.firstChild){
        todoList.firstChild.remove();
    }

    Todo.todoItems.forEach(function(todoItem){
        const view = todoItem.state;
        if(Todo.mode === Todo.ACTIVE_MODE.get() && view === true){
            return;
        }else if(Todo.mode === Todo.COMPLETED_MODE.get() && view === false){
            return;
        }
        const li = document.createElement("li");
        const checkbox = document.createElement("button");
        const delbtn = document.createElement("button");
        const input = document.createElement("input");

        li.className = "todo-item";
        li.dataset.order = todoItem.getOrder();
        checkbox.className = "checkbox";
        checkbox.innerText = "✔︎";
        delbtn.className = "delBtn";
        delbtn.innerText = "🗑️";

        input.className = "content";
        input.type = "text";
        input.placeholder = "할 일을 입력하세요!";
        input.value = todoItem.content;
        if(view){
            li.className = "todo-item checked";
            input.readOnly =true;
        }

        li.appendChild(checkbox);
        li.appendChild(input);
        li.appendChild(delbtn);
        todoList.appendChild(li);
    })
}

export function initTodoEvent(Todo) { //초기 이벤트 설정
    const todoList = document.querySelector(".todo-list");
    todoList.addEventListener("click", function(e){
        const target = e.target;
        
        if (target.classList.contains("checkbox")){
            const li = target.closest("li");
            const idx = li.dataset.order;
            const todoItem = Todo.get(idx);

            todoItem.state = !todoItem.state;
            renderTodo(Todo);
        }else if(target.classList.contains("delBtn")){
            const li = target.closest("li");
            const idx = li.dataset.order;

            Todo.remove(idx);
            renderTodo(Todo);
        }
    });

    todoList.addEventListener("focusout", function(e){
        const target = e.target;
        
        if (target.classList.contains("content")){
            const li = target.closest("li");
            const idx = li.dataset.order;

            if (target.value !== Todo.get(idx).content){
                if (validation(Todo, target.value, true) === true){
                    Todo.get(idx).content = target.value;
                }
            }
            renderTodo(Todo);
        }
    });
}