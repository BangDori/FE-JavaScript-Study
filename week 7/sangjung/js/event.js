export function initEvent(Todo, addTodo, renderTodo){ // 버튼들한테 이벤트 할당
    const TODO_INPUT = document.getElementsByClassName('todo-input')[0];
    const ENTER = document.getElementsByClassName('enter')[0];
    const ALL = document.getElementById('all');
    const ACTIVE = document.getElementById('active');
    const COMPLETED = document.getElementById('completed');
    const CLEAR = document.getElementById('clear');
    
    TODO_INPUT.addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            addTodo(Todo,TODO_INPUT);
        }
    });
    ENTER.addEventListener('click', function(){
        addTodo(Todo,TODO_INPUT);
    });
    CLEAR.addEventListener('click', function(){
        COMPLETED.setAttribute('class', 'show-completed-btn');
        ACTIVE.setAttribute('class', 'show-active-btn');
        ALL.setAttribute('class', 'show-all-btn selected');
        Todo.clear();
        Todo.mode = 0;
        renderTodo(Todo);
    });
    
    ALL.addEventListener('click', function(){
        COMPLETED.setAttribute('class', 'show-completed-btn');
        ACTIVE.setAttribute('class', 'show-active-btn');
        ALL.setAttribute('class', 'show-all-btn selected');
        Todo.mode = 0;
        renderTodo(Todo);
    });

    ACTIVE.addEventListener('click', function(){
        COMPLETED.setAttribute('class', 'show-completed-btn');
        ACTIVE.setAttribute('class', 'show-active-btn selected');
        ALL.setAttribute('class', 'show-all-btn');
        Todo.mode = 1;
        renderTodo(Todo);
    });
    
    COMPLETED.addEventListener('click', function(){
        COMPLETED.setAttribute('class', 'show-completed-btn selected');
        ACTIVE.setAttribute('class', 'show-active-btn');
        ALL.setAttribute('class', 'show-all-btn');
        Todo.mode = 2;
        renderTodo(Todo);
    });
}


