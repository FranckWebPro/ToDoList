const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const addButton = document.getElementById('addButton');
const todo = [];
const done = [];

const createTrashButton = (parent) => {
    const trashContainer = document.createElement('div');
    const trashImg = document.createElement('img');
    trashImg.src = 'images/trash.png';
    trashImg.classList.add('trashImg');
    trashContainer.classList.add('trashContainer');
    trashContainer.appendChild(trashImg);
    return parent.appendChild(trashContainer);
}

const createTaskItem = (newTask) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.type = 'checkbox';
    li.appendChild(input);
    li.appendChild(label);
    createTrashButton(li);
    label.innerText = newTask;
    return li;
}

const createNewTask = () => {
    addButton.addEventListener('click', () => {
        if (document.getElementById('newTaskInput').value !== "") {
            const newTask = document.getElementById('newTaskInput').value;
            todo.push(newTask);
        }
        todoList.innerHTML = "";
        for (let task of todo) {
            createTaskItem(task);
        }

    });
};

createNewTask();


// const trashButton = document.querySelector('.trashContainer');

// const deleteTask = () => {
//     trashButton.forEach(button =>
//         button.addEventListener('click', () => {
//             const element = button.parentElement("div-02");
//         }));
// };