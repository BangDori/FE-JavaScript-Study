const clearBtn = document.querySelector('#clear');
const remainWork = document.querySelector('#active');
const seeAll = document.querySelector('#all');
const compWork = document.querySelector('#completed');
clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    todoList.innerHTML = '';
    howManyRemain("0");
});

remainWork.addEventListener('click', (e) => {
    e.preventDefault();
    todoList.querySelectorAll('li').forEach((liElement) => {
        if (liElement.classList.contains("checked")) {
            liElement.style.display = 'none';
        }
        else {
            liElement.style.display = 'block';
        }
    });
});

compWork.addEventListener('click', (e) => {
    e.preventDefault();
    todoList.querySelectorAll('li').forEach((liElement) => {
        if (liElement.classList.contains("checked")) {
            liElement.style.display = 'block';
        }
        else {
            liElement.style.display = 'none';
        }
    });
});

seeAll.addEventListener('click', (e) => {
    e.preventDefault();
    todoList.querySelectorAll('li').forEach((liElement) => {
        liElement.style.display = 'block';
    });
});