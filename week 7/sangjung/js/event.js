export const initEvent = (Todo, addTodo, renderTodo) => { // 버튼들한테 이벤트 할당
    const todoInput = document.querySelector('.todo-input');
    const enter = document.querySelector('.enter');
    const all = document.getElementById('all');
    const active = document.getElementById('active');
    const completed = document.getElementById('completed');
    const clear = document.getElementById('clear');
    
    todoInput.addEventListener('keyup', (e) =>{
        if(e.key === "Enter"){
            addTodo(Todo,todoInput);
        }
    });
    enter.addEventListener('click', () =>{
        addTodo(Todo,todoInput);
    });
    clear.addEventListener('click', () =>{
        document.querySelector('.selected').classList.remove("selected");
        all.classList.add("selected");
        Todo.clear();
        Todo.mode=Todo.DEFAULT_MODE;
        renderTodo(Todo);
    });
    
    all.addEventListener('click', () =>{
        document.querySelector('.selected').classList.remove("selected");
        all.classList.add("selected");
        Todo.mode=Todo.ALL_MODE;
        renderTodo(Todo);
    });

    active.addEventListener('click', () =>{
        document.querySelector('.selected').classList.remove("selected");
        active.classList.add("selected");
        Todo.mode=Todo.ACTIVE_MODE;
        renderTodo(Todo);
    });
    
    completed.addEventListener('click', () =>{
        document.querySelector('.selected').classList.remove("selected");
        completed.classList.add("selected");
        Todo.mode=Todo.COMPLETED_MODE;
        renderTodo(Todo);
    });
}


