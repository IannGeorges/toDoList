// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners


// Adds "todo item" to the list when the button is clicked
todoButton.addEventListener('click', addTodo)

// Functions
function addTodo(event){
   // Prevent form from subtmitting 
    event.preventDefault();
    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // Create 
}