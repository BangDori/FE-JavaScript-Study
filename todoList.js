/**
2. 투두리스트
 - 추가 (Enter, Button)
 - ToggleBox
 - 삭제
 - 수정
 - 중복 체크, 공백 체크
 - 전체 삭제
*/

const inputForm = document.getElementsByClassName("input-form")[0];
const todoList = document.getElementsByClassName("todo-list")[0];
const clrBtn = document.getElementById("clear");

const todoInput = inputForm.children[1];
const enter = inputForm.children[2];

/**
 * When input enter key
 */
todoInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        todoInput.blur();
        addList(e);
    }
})
/**
 * When click enter button
 */
enter.addEventListener('click', (e) => {
    e.preventDefault();
    addList(e);
})

function addList(e) {
    // Get user input
    const contents = todoInput.value.trim();

    // Space character checking 
    if (contents === "") return;

    // Duplicate checking
    if (duplicateCheck(contents)) {
        todoInput.value = "";
        return;
    }

    // create entry
    const li = document.createElement("li");
    li.setAttribute('class', 'todo-item');

    const checkBox = document.createElement("button");
    checkBox.setAttribute('class', 'checkbox');
    checkBox.innerText = "✔︎";
    checkBox.addEventListener('click', () => {
        if (!li.classList.contains('checked')) {
            li.setAttribute('class', 'todo-item checked');
            setTxt(-1);
        }
        else {
            li.setAttribute('class', 'todo-item');
            setTxt(1);
        }
    });

    const txtCnt = document.createElement("input");
    txtCnt.setAttribute('class', 'content');
    txtCnt.value = contents;

    // Temporarily save selected list contents
    let tmp;
    txtCnt.addEventListener('click', (e) => { tmp = txtCnt.value; });
    txtCnt.addEventListener("focusin", (e) => { tmp = txtCnt.value; });
    txtCnt.addEventListener("focusout", (e) => {
        txtCnt.blur();
        const contents = txtCnt.value.trim();

        // Space character checking
        if (contents === "") {
            txtCnt.value = tmp;
            tmp = "";
            return;
        }

        // Duplicate checking
        if (duplicateCheck2(contents)) {
            txtCnt.value = tmp;
            tmp = "";
            return;
        }

        txtCnt.value = contents;
    });
    txtCnt.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            txtCnt.blur();
            const contents = txtCnt.value.trim();

            // Space character checking
            if (contents === "") {
                txtCnt.value = tmp;
                tmp = "";
                return;
            }

            // Duplicate checking
            if (duplicateCheck2(contents)) {
                txtCnt.value = tmp;
                tmp = "";
                return;
            }

            txtCnt.value = contents;
        }
    });

    const delBtn = document.createElement("button");
    delBtn.setAttribute('class', 'delBtn');
    delBtn.innerText = "✖";
    delBtn.addEventListener('click', () => {
        todoList.removeChild(li);
        if (!li.classList.contains('checked'))
            setTxt(-1);
        else
            setTxt(0);
    });

    // assemble
    li.appendChild(checkBox);
    li.appendChild(txtCnt);
    li.appendChild(delBtn);

    // add to list
    todoList.appendChild(li);

    // init input text
    todoInput.value = "";

    setTxt(1);
}

function duplicateCheck(contents) {
    for (entry of todoList.children)
        if (entry.children[1].value == contents)
            return true;

    return false;
}

function duplicateCheck2(contents) {
    let cnt = false;
    for (entry of todoList.children)
        if (entry.children[1].value == contents)
            if (cnt) return true;
            else cnt = true;

    return false;
}

clrBtn.addEventListener('click', (e) => {
    setTxt(countOfLeft);
    todoList.replaceChildren();
})