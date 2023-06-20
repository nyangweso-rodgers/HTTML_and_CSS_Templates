// get Elements using querySelector()

let addToButton = document.querySelector('#addToDo');
let newToDoInput = document.querySelector('#newToDo');
let toDoList = document.querySelector('ul');

addToButton.addEventListener('click', function () {
    const newToDo = newToDoInput.value

    if (newToDo === '') {
        return;
    }

    const toDoItem = document.createElement('li');
    toDoItem.innerHTML = newToDo
    toDoList.appendChild(toDoItem);

    newToDoInput.value = ''
})