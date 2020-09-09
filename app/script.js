let todosUl = document.querySelector(".todos ul");
let todos = document.querySelectorAll(".todos li");
let todoInput = document.querySelector(".todos input");
let deleteButton = document.querySelectorAll(".deleteButton");

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

for(let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function(){
        todos[i].style.display = "none";
    });
}

todoInput.addEventListener("click", function(){
    let text = todoInput.value;
    let li = "<li>"+ text + "</li>"; 
    todosUl.insertAdjacentHTML('beforeend', li);
    todoInput.value = "";
});