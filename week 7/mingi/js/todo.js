let indexNum = 0;
export const todoData = new Map();

export const addTodo = (todo) => {
    if (!isDuplicateOrBlank(todo)) return;

    const todoItem = {
        index: ++indexNum,
        content: todo,
        checked: 'active' // 체크박스 유무 초기화
    }

    todoData.set(indexNum, todoItem);
}


const isDuplicateOrBlank = (todoInput) => {
    if (todoInput.trim() === "") {
        alert("내용이 비엇다");
        return false;
    }

    for (let value of todoData.values()) {
        if (value.content === todoInput) {
            alert("중복이 있다");
            todoInput = "";
            return false;
        }
    }

    return true;
}


export const updateTodo = (itemId) => { // 매개변수를 id로 받아라
    const parentDiv = document.getElementById(itemId);
    const contentInput = parentDiv.querySelector('.content');
    const savedValue = todoData.get(parseInt(itemId)); // Number -> parseInt

    if (isDuplicateOrBlank(contentInput.value)) {
        if (contentInput.value !== savedValue.content) {
            savedValue.content = contentInput.value; // content 속성만 업데이트
            todoData.set(Number(itemId), savedValue);
        } else {
            contentInput.value = savedValue.content;
            alert('내용이 비었습니다. 원래 데이터로 되돌립니다.');
        }
    }
}

export const toggleTodo = (itemId) => {
    const parentDiv = document.getElementById(itemId);
    const checkbox = parentDiv.querySelector('.checkbox');
    const item = todoData.get(itemId);
    item.checked = checkbox.checked ? 'completed' : 'active';

}

export const delTodo = (itemId) => {
    const parentDiv = document.getElementById(itemId);
    todoData.delete(itemId);
    parentDiv.remove();
}

export const delAll = () => {
    if (todoData.size === 0) {
        alert('삭제할 데이터가 없다');
        return;
    }

    indexNum = 0;
    todoData.clear();
}

