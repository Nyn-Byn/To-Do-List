//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);




//Functions
function addTodo(event) {
    event.preventDefault();
    console.log("hello"); //Prevent form from submitting

//To do div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

//Create <li>

const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo); //<li> is now in the <div>


//Check mark button
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>'
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//Check trash button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>'
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//Append to List
todoList.appendChild(todoDiv);

//Clear To do input value
todoInput.value = "";

};

function deleteCheck(e){
    const item = e.target;
    //Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        
        todo.addEventListener('transitioned', e => {
            todo.remove();

        });
    }
    // Check mark
    
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
