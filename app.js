const todoInput = document.querySelector("#todo--input")
const toAddBtn = document.querySelector(".todo--add--btn")
const body = document.body;

toAddBtn.addEventListener("click",()=>{
    const inputValue = todoInput.value
    const todoListUl = document.querySelector(".todo--list")
    const li = document.createElement("li")
    const liInnerHtml = `<li class="todo--list--lis">
        <div>${inputValue}</div>
        <div>
             <button class="done">completed</button>
             <button class="remove">Delete</button>
        </div>
    </li>`
    li.innerHTML = liInnerHtml
    if(inputValue === ""){
        alert("Please enter a value")
    }else{
        todoListUl.append(li)
    }
})

body.addEventListener("click", (eventObject)=>{
    if(eventObject.target.classList.contains("done")){
        const todoTask = eventObject.target.parentElement.previousElementSibling;
        todoTask.style.textDecoration = "line-through"
        todoTask.style.color = "hsla(57,88,86,0.600)"
    }
    if(eventObject.target.classList.contains("remove")){
        const removeTodoTask = eventObject.target.parentElement.parentElement;
        removeTodoTask.remove()
    }   
})