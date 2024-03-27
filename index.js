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

//création de l'élément tâche et ajout du contenu
const createTaskLine = (task, index) => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const span = document.createElement('span');
    input.classList.add('taskCheckBox');
    input.type = 'checkbox';
    li.setAttribute('data-index', index);
    li.appendChild(input);
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
            localStorage.setItem(`listItem${itemIndex}`, newTaskValue);
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
        let task = localStorage.getItem(`listItem${i}`);
        let taskKey = `listItem${i}`;
        itemObject[taskKey] = `${task}`;
        const newTask = createTaskLine(`${task}`, `listItem${i}`);
        todoList.appendChild(newTask);
    }
}

createTaskItem();
retrieveTaskItem();