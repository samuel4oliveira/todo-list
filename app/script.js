let todosUl = document.querySelector(".todos ul");
let todos = document.querySelectorAll(".todos li");
let todoInput = document.querySelector(".todos input");
let deleteButton = document.querySelectorAll(".todos .deleteButton");

init();

function init() {
    mouseEvents();
    deleteEvents();
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
            this.style.color = "#44445B";
            this.style.textDecoration = "line-through";
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

function inputEvents() {
    todoInput.addEventListener("keyup", function(event){
        if(event.keyCode === 13) {
            //Receive Todo
            let text = todoInput.value;
            let li = "<li><span class='deleteButton'>X</span>"+ text + "</li>"; 
            todoInput.value = "";
            
            //Updating Todo List
            todosUl.insertAdjacentHTML('beforeend', li);
            todos = document.querySelectorAll(".todos li");
            deleteButton = document.querySelectorAll(".deleteButton");
            mouseEvents();
            deleteEvents();
        }
    });
}