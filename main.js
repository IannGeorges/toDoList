// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");
const todoItem = document.querySelector(".todo-item");
const alertMsg = document.querySelector(".alert")
const closeBtnz = document.querySelector(".close-btn")


// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoList.addEventListener('click', deleteCheck);
// Adds "todo item" to the list when the button is clicked
todoButton.addEventListener('click', addTodo);


filterOption.addEventListener('click', filterTodo);
closeBtnz.addEventListener('click', closeButton);


function plzWork (){
    console.log('hello');
    
}
// Functions
function addTodo(event){
   // Prevent form from subtmitting 
    event.preventDefault();
    
    if(todoInput.value.length===0)
    {
        /*let text;
        text = "Input not valid"
        console.log("this is invalid name");
        document.getElementById("errorMsg").innerHTML = text;
        */
        alertMsg.classList.add("show");
        alertMsg.classList.remove("hide");
        alertMsg.classList.add("showAlert");
        console.log('wtf')
        
        
        setTimeout(function(){
            alertMsg.classList.remove("show");
            alertMsg.classList.add("hide");
            
        }, 5000);
        return;
        
    } /* else {
        document.getElementById("errorMsg").innerHTML = "";
        console.log("wtf");
    }
    */
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add todo to LOCAL STORAGE
    saveLocalTodos(todoInput.value);
    
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);



    
    // Save todo input and parent element to add ID to then later filter and remove the repeating todo items
    
    // filterID(newTodo, todoInput.value, todoList.childNodes);
    
    
    //CLEAR todo Input Value    
    todoInput.value = "";
    
}

/*
function filterID(addID, todoID, idList){
    // ADD ID to each list element to later filter & delete every instance on todo list
    //addID = reference for specific li class of list element
    //todoID = name of ID, same name as the todoInput.value
    //idList = list of id's to filter through
    
    // assign todo text input as id
    addID.id = todoID

    console.log(addID.id);
    
    console.log(addID);
   
}
*/

function deleteCheck(e) {
    const item = e.target;
    // Delete TODO
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }

    // Check MARK 
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
 // Check do I already have the same items saved in here?
 let todos;
 
 if (localStorage.getItem("todos") === null) {
     todos = [];
 } else {
     todos = JSON.parse(localStorage.getItem("todos"));
 }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function getTodos(){
    // Check do I already have the same items saved in here?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
       todos.forEach(function(todo){
    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
       });
}

function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    
    localStorage.setItem("todos", JSON.stringify(todos));
}
            




function closeButton (){
    //remove class
    alertMsg.classList.remove("show");
            alertMsg.classList.add("hide");
            console.log("working?");
}