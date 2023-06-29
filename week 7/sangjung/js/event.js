export function initEvent(Todo, addTodo, renderTodo){ // 버튼들한테 이벤트 할당
    const todoInput = document.getElementsByClassName('todo-input')[0];
    const enter = document.getElementsByClassName('enter')[0];
    const all = document.getElementById('all');
    const active = document.getElementById('active');
    const completed = document.getElementById('completed');
    const clear = document.getElementById('clear');
    
    todoInput.addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            addTodo(Todo,todoInput);
        }
    });
    enter.addEventListener('click', function(){
        addTodo(Todo,todoInput);
    });
    clear.addEventListener('click', function(){
        completed.setAttribute('class', 'show-completed-btn');
        active.setAttribute('class', 'show-active-btn');
        all.setAttribute('class', 'show-all-btn selected');
        Todo.clear();
        Todo.DEFAULT_MODE.set();
        renderTodo(Todo);
    });
    
    all.addEventListener('click', function(){
        completed.setAttribute('class', 'show-completed-btn');
        active.setAttribute('class', 'show-active-btn');
        all.setAttribute('class', 'show-all-btn selected');
        Todo.ALL_MODE.set();
        renderTodo(Todo);
    });

    active.addEventListener('click', function(){
        completed.setAttribute('class', 'show-completed-btn');
        active.setAttribute('class', 'show-active-btn selected');
        all.setAttribute('class', 'show-all-btn');
        Todo.ACTIVE_MODE.set();
        renderTodo(Todo);
    });
    
    completed.addEventListener('click', function(){
        completed.setAttribute('class', 'show-completed-btn selected');
        active.setAttribute('class', 'show-active-btn');
        all.setAttribute('class', 'show-all-btn');
        Todo.COMPLETED_MODE.set();
        renderTodo(Todo);
    });
}


