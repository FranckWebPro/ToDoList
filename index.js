const todolist = document.getElementById('todo');
const addButton = document.getElementById('addButton');

const itemAdded = () => {
    addButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        const newTask = document.getElementById('task').value;
        newItem.innerText = newTask;
        todolist.appendChild(newItem);
    });
};

itemAdded();