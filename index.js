const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const form = document.getElementById('form');
const inputNewtask = document.getElementById('newTaskInput');

//création du bouton de suppression et ajout au parent
const createTrashButton = (parent, index) => {
    const trashContainer = document.createElement('div');
    const trashImg = document.createElement('img');
    trashImg.src = 'images/trash.png';
    trashImg.classList.add('trashImg');
    trashContainer.classList.add('trashContainer');
    trashContainer.setAttribute('data-index', index);
    trashContainer.appendChild(trashImg);
    // Attache un écouteur d'événements de clic directement sur le nouveau bouton de suppression
    trashContainer.addEventListener('click', () => {
        const li = document.querySelector(`li[data-index='${index}']`);
        if (li) {
            localStorage.removeItem(index);
            li.remove();
        }
    });
    return parent.appendChild(trashContainer);
}

//création de l'élément tâche et ajout du contenu (task) et de l'input checkbox
const createTaskLine = (task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    checkbox.classList.add('taskCheckBox');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        const liToCheck = document.querySelector(`li[data-index='${index}']`);
        if (checkbox.checked) {
            liToCheck.remove();
            doneList.appendChild(liToCheck);
        } else {
            liToCheck.remove();
            todoList.appendChild(liToCheck);
        }
    });
    li.setAttribute('data-index', index);
    li.appendChild(checkbox);
    li.appendChild(span);
    createTrashButton(li, index);
    span.innerText = task;
    return li;
}

//ajout de la tâche à la liste et au locale storage
const createTaskItem = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTaskValue = inputNewtask.value;
        if (newTaskValue !== "") {
            let itemIndex = localStorage.length + 1;
            const newTask = createTaskLine(newTaskValue, `listItem${itemIndex}`);
            localStorage.setItem(`listItem${itemIndex}`, JSON.stringify({ value: newTaskValue, done: false }));
            todoList.appendChild(newTask);
            inputNewtask.value = "";
        }
    });
}

/* récuperation des tâches et ajout de l'attribut de données afin de 
pouvoir supprimier l'élément et le locale storage */
const retrieveTaskItem = () => {
    const itemObject = {};
    const storageLength = localStorage.length;
    for (let i = 1; i <= storageLength; i++) {
        let task = JSON.parse(localStorage.getItem(`listItem${i}`));
        if (task.done === false) {
            let taskKey = `listItem${i}`;
            itemObject[taskKey] = `${task}`;
            const newTask = createTaskLine(`${task.value}`, `listItem${i}`);
            todoList.appendChild(newTask);
        } else {
            let taskKey = `listItem${i}`;
            itemObject[taskKey] = `${task}`;
            const newTask = createTaskLine(`${task.value}`, `listItem${i}`);
            doneList.appendChild(newTask);
        }
    }
}


createTaskItem();
retrieveTaskItem();