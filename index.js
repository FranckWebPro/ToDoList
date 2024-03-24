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
    span.innerText = task;
    return li;
}

const createTaskItem = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTask = inputNewtask.value
        if (newTask !== "") {
            const newLi = createTaskLine(newTask);
            createTrashButton(newLi);
            localStorage.setItem("listItem", newTask);
            todoList.appendChild(newLi);
            inputNewtask.value = "";
        }
    });
}

createTaskItem();

// const createNewTask = () => {
//     addButton.addEventListener('click', () => {
//         if (document.getElementById('newTaskInput').value !== "") {
//             const newTask = document.getElementById('newTaskInput').value;
//             todo.push(newTask);
//         }
//         todoList.innerHTML = "";
//         for (let task of todo) {
//             createTaskItem(task);
//         }

//     });
// };



// const trashButton = document.querySelector('.trashContainer');

// const deleteTask = () => {
//     trashButton.forEach(button =>
//         button.addEventListener('click', () => {
//             const element = button.parentElement("div-02");
//         }));
// };