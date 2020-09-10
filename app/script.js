let inputCounter = 0;
let todosUl = document.querySelector(".todos ul");
let todos = document.querySelectorAll(".todos li");
let todoInput = document.querySelector(".todos input");
let addTodoButton = document.querySelector(".header img");
let deleteButton = document.querySelectorAll(".todos .deleteButton");

init();

function init() {
    mouseEvents();
    deleteEvents();
    addTodoEvent();
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
        
        todos[i].addEventListener("click", function(){
            this.classList.toggle("todo-done");
        });
    }
}

function deleteEvents() {
    for(let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function(){
            todos[i].style.display = "none";
        });
    }
}

function addTodoEvent() {
    addTodoButton.addEventListener("click", function(){
        todoInput.classList.toggle("display-input");
    });
}

function inputEvents() {
    todoInput.addEventListener("keyup", function(event){
        if(event.keyCode === 13 && inputCounter < 21) {
            //Receive Todo
            let text = todoInput.value;
            let li = "<li><span class='deleteButton'>X</span>"+ text + "</li>"; 
            todoInput.value = "";
            inputCounter++;
            
            //Updating Todo List
            todosUl.insertAdjacentHTML('beforeend', li);
            todos = document.querySelectorAll(".todos li");
            deleteButton = document.querySelectorAll(".deleteButton");
            mouseEvents();
            deleteEvents();
        }
    });
}