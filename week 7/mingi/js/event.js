import {
    addTodo,
    updateTodo,
    toggleTodo,
    delTodo,
    delAll,
    todoData,
} from "./todo.js";

const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const enter = document.querySelector(".enter");
const leftItems = document.querySelector(".left-items");
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
const clear = document.getElementById("clear");

const ALL = "all";
const ACTIVE = "active";
const COMPLETED = "completed";

let status = ALL;

const filterTodo = (todoData, checked) => {
    const filterMap = new Map();
    todoData.forEach((_, itemId) => {
        const todoItem = todoData.get(itemId);
        if (todoItem.checked === checked) {
            filterMap.set(itemId, todoItem);
        }
    });

    return filterMap;
}

const changeStatus = () => {
    if (status === ACTIVE) return filterTodo(todoData, ACTIVE);
    else if (status === COMPLETED) return filterTodo(todoData, COMPLETED);

    return todoData;
}


const renderTodo = () => {
    todoList.innerHTML = "";
    const renderTodos = changeStatus();

    let checkedCount = 0;
    for (const item of todoData.values()) {
        if (item.checked === 'completed') {
            checkedCount++;
        }
    }
    const restItems = todoData.size - checkedCount;

    renderTodos.forEach((todo) => {
        if (!todo) return;

        const div = document.createElement('div');
        div.setAttribute("class", "todo-item");
        div.setAttribute("id", todo.index);

        const input = document.createElement('input');
        input.setAttribute("class", "content");
        input.value = todo.content;

        const checkbox = document.createElement('input');
        checkbox.setAttribute("class", "checkbox");
        checkbox.setAttribute("data-checked", todo.checked)
        checkbox.type = "checkbox";
        checkbox.checked = todo.checked === 'completed';

        if (todo.checked === 'completed') {
            input.style.textDecoration = 'line-through';
            input.disabled = true;
        } else {
            input.style.textDecoration = 'none';
            input.disabled = false;
        }

        const delBtn = document.createElement('button');
        delBtn.setAttribute("class", 'delBtn');
        delBtn.innerHTML = 'X';

        div.appendChild(checkbox);
        div.appendChild(input);
        div.appendChild(delBtn);

        const todoList = document.querySelector('.todo-list');
        todoList.appendChild(div);
    });

    console.log(renderTodos);
    leftItems.innerHTML = `🥕 오늘 할 일이 ${restItems}개 남았습니다 🥕`;
}

// 자식노드를 제거한는 방법이랑 그냥 innerHTML = ""으로 하는거중에 뭐가 낫나여?

const changeBtn = (ch) => {
    status = ch;
    document.querySelector('.selected').classList.remove("selected");

    switch (ch) {
        case ALL:
            all.classList.add("selected");
            break;
        case ACTIVE:
            active.classList.add("selected");
            break;
        case COMPLETED:
            completed.classList.add("selected");
            break;
        default:
            break;
    }
}


export const activeEventListner = () => {
    // Create to enter
    todoInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo(todoInput.value);
            todoInput.value = "";
            renderTodo();
        }
    });

    // Create to click
    enter.addEventListener('click', () => {
        addTodo(todoInput.value);
        todoInput.value = "";
        renderTodo();
    });

    // Update
    todoList.addEventListener("dblclick", (event) => {
        if (event.target.className === "content") {
            event.target.addEventListener('keydown', (event) => {
                if (event.key === "Enter") {
                    const itemId = parseInt(event.target.parentNode.id);
                    updateTodo(itemId);
                    renderTodo();
                }
            });
        }
    });

    todoList.addEventListener("click", (event) => {
        if (event.target.className === "checkbox") {
            const itemId = parseInt(event.target.parentNode.id);
            toggleTodo(itemId);
            renderTodo();
        } else if (event.target.className === "delBtn") {
            const itemId = parseInt(event.target.parentNode.id);
            delTodo(itemId);
            renderTodo();
        }
    });

    all.addEventListener('click', () => {
        changeBtn(ALL);
        renderTodo();
    });

    active.addEventListener('click', () => {
        changeBtn(ACTIVE);
        renderTodo();
    });

    completed.addEventListener('click', () => {
        changeBtn(COMPLETED);
        renderTodo();
    });

    clear.addEventListener('click', () => {
        delAll();
        renderTodo();
    });

}