const todoInput = document.querySelector('.todo-input');
const enter = document.querySelector('.enter');
const todoList = document.querySelector('.todo-list');
const remainer = document.querySelector('.left-items');
const checkBox = document.querySelector('.checkbox');
const delBtn = document.querySelector('.delBtn');
const allBtn = document.querySelector('.complete-all-btn');

let listCount = 0;
let previoustxt = "";

// 입력
enter.addEventListener('click', (e) => {
    e.preventDefault();
    addList(e);
});

todoInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
        addList(e);
    }
});


// 일 완료/삭제
todoList.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains("checkbox")) {
        compList(target);
    }
    if (target.classList.contains("delBtn")) {
        delList(target);
    }
})

// 전부완료
allBtn.addEventListener('click', (e) => {
    e.preventDefault();
    todoList.querySelectorAll('li').forEach((liElement) => {
        liElement.classList.add('checked');
    });
})

// 일 수정
todoList.addEventListener('focusin', (e) => {
    e.preventDefault();
    const focusTarget = e.target;
    previoustxt = focusTarget.value;
});
 
todoList.addEventListener('focusout', (e) => {
    e.preventDefault();
    const target = e.target;
    const liElements = todoList.querySelectorAll('li');
    let index = null;
    for (let i = 0; i < liElements.length; i++) {
        const liElement = liElements[i];
        if (liElement == e.target.parentNode) {
            index = i;
            break;
        }
    }
    if (target.classList.contains("content")) {
        const inputTarget = target.value;
        if (!inputTarget) {
            alert("Empty");
            target.value = previoustxt;
        }
        if (dupCheck(inputTarget, index)) {
            alert("Duplicate");
            target.value = previoustxt;
        }
    }
});

// 일 추가
const addList = (e) => {
    const target = e.target;
    const content = todoInput.value.trim();
    if (!content) {
        alert("Empty");
        return;
    }
    if (dupCheck(content)) {
        alert("Duplicate");
        return;
    }
    //Li 추가
    const liElement = document.createElement('li');
    liElement.classList.add('todo-item');
    todoList.appendChild(liElement);
    //✔︎버튼 추가
    const btn = document.createElement('button');
    btn.classList.add('checkbox');
    btn.textContent = "✔︎";
    liElement.appendChild(btn);
    //내용추가
    const txt = document.createElement('input');
    txt.classList.add('content');
    txt.value = todoInput.value;
    liElement.appendChild(txt);
    //✖버튼 추가
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = "✖";
    liElement.appendChild(delBtn);
    todoInput.value = "";
    howManyRemain("add");
}

const compList = (target) => {
    liElement = target.parentNode;
    if (liElement.classList.contains("checked")) {
        liElement.classList.remove('checked');
        howManyRemain("add");
    }
    else {
        liElement.classList.add('checked');
        howManyRemain("min");
    }
}

const delList = (target) => {
    liElement = target.parentNode;
    liElement.remove();
    howManyRemain("min");
}

const dupCheck = (content, index) => {
    const liElements = todoList.querySelectorAll('li');
    for (let i = 0; i < liElements.length; i++) {
        const liElement = liElements[i];
        const inputData = liElement.querySelector('.content');
        if (content === inputData.value && index !== i) {
            return true;
        }
    }
    return false;
}

const howManyRemain = (cnt) => {
    if(cnt==="add"){
        remainer.textContent = `🥕 오늘 할 일이 ${++listCount}개 남았습니다 🥕`;
    }
    else if(cnt==="min"){
        remainer.textContent = `🥕 오늘 할 일이 ${--listCount}개 남았습니다 🥕`;
    }
    else{
        remainer.textContent = `🥕 오늘 할 일이 0개 남았습니다 🥕`;
    }
}