let todosUl = document.querySelector("#todosUl");
let todos = document.querySelectorAll(".todos li");
let todoInput = document.querySelector(".todos input");
let addTodoButton = document.querySelector(".header img");
let deleteButton = document.querySelectorAll(".todos .deleteButton");
let todosCounter = document.querySelectorAll("li:not(.delete-todo)").length;

init();

function init() {
    mouseEvents();
    clickEvents();
    deleteEvents();
    addEvents();
    inputEvents();
}

function mouseEvents() {
    for(let i = 0; i < todos.length; i++) {
        todos[i].addEventListener("mouseover", function(){
            deleteButton[i].style.display = "inline";
        });
        
        todos[i].addEventListener("mouseout", function(){
            deleteButton[i].style.display = "none";
        });
    }
}

function clickEvents() {
    todosUl.addEventListener("click", function(event){
        const { target } = event;
        if (target.tagName !== 'LI') return;
        target.classList.toggle("todo-done");
    });
}

function deleteEvents() {
    for(let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function(){
            todos[i].classList.add("delete-todo");
            todosCounter = document.querySelectorAll("li:not(.delete-todo)").length;
        });
    }
}

function addEvents() {
    addTodoButton.addEventListener("click", function(){
        todoInput.classList.toggle("display-input");
    });
}

function inputEvents() {
    todoInput.addEventListener("keyup", function(event){
        if(event.keyCode === 13 && todosCounter < 13) {
            //Receive Todo
            let text = todoInput.value;
            let li = "<li><span class='deleteButton'>X</span>"+ text + "</li>"; 
            todoInput.value = "";
            
            //Updating Todo List Variables
            todosUl.insertAdjacentHTML('beforeend', li);
            todos = document.querySelectorAll(".todos li");
            deleteButton = document.querySelectorAll(".deleteButton");
            todosCounter = document.querySelectorAll("li:not(.delete-todo)").length;
            mouseEvents();
            deleteEvents();
        }
    });
}