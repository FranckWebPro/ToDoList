const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const form = document.getElementById('form');
const inputNewtask = document.getElementById('newTaskInput');

const createTrashButton = (parent) => {
    const trashContainer = document.createElement('div');
    const trashImg = document.createElement('img');
    trashImg.src = 'images/trash.png';
    trashImg.classList.add('trashImg');
    trashContainer.classList.add('trashContainer');
    trashContainer.appendChild(trashImg);
    return parent.appendChild(trashContainer);
}

const createTaskLine = (task) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    input.classList.add('taskCheckBox');
    input.type = 'checkbox';
    li.appendChild(input);
    li.appendChild(span);
    createTrashButton(li);
    span.innerText = task;
    return li;
}

const createTaskItem = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let i = 0;
        const newTaskValue = inputNewtask.value;
        if (newTaskValue !== "") {
            const newTask = createTaskLine(newTaskValue);
            let itemIndex = localStorage.length + 1;
            localStorage.setItem(`listItem${itemIndex}`, newTaskValue);
            todoList.appendChild(newTask);
            inputNewtask.value = "";
        }
    });
}

const retrieveTaskItem = () => {
    const itemObject = {};
    const storageLength = localStorage.length;
    for (let i = 1; i <= storageLength; i++) {
        let task = localStorage.getItem(`listItem${i}`);
        let taskKey = `listItem${i}`;
        itemObject[taskKey] = `${task}`;
        const newTask = createTaskLine(`${task}`);
        todoList.appendChild(newTask);
    }
}

createTaskItem();
retrieveTaskItem();
