const todoItem = document.querySelector("#todoItem");

const addTodoBtn = document.querySelector('.btn');

window.onload = () => {
    todoItem.addEventListener("click", removeTodo);
}

addTodoBtn.addEventListener("click", () => {
    const todoInput = document.querySelector('.add-todoInput');
    if (todoInput.value == '')
        return;
    else {
        const todo = document.createElement('li');
        todo.appendChild(document.createTextNode(todoInput.value));
        const isCompleted = document.createElement('button');
        isCompleted.classList.add('isCompleted');
        isCompleted.appendChild(document.createTextNode("Pending"));
        todo.appendChild(isCompleted);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteTodo');
        deleteButton.appendChild(document.createTextNode("Delete"));
        todo.appendChild(deleteButton);
        todoItem.appendChild(todo);
        todoInput.value = "";
    }
})

function removeTodo(e) {
    if (e.target.classList.contains('isCompleted')) {
        e.target.innerText = "Compeleted";
        e.target.classList.add('disabled');
    } else if (e.target.classList.contains('deleteTodo')) {
        let li = e.target.parentNode;
        console.log(li);
        todoItem.removeChild(li);
    }
}