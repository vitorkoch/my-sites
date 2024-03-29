const input = document.querySelector("[todo-input]");
const addButton = document.querySelector("[todo-btn]");
const list = document.querySelector("[todo-list]");
addButton.addEventListener("click", addTodo);
list.addEventListener("click", deleteCheck);
document.addEventListener("keyup", (event) => {
    const name = event.key;
    switch (name) {
        case "Enter":
            addButton instanceof HTMLElement ? addButton.click() : "";
    }
});
function addTodo() {
    let inputValue = input instanceof HTMLInputElement ? input.value : "";
    if (inputValue != "") {
        console.log("Add button clicked");
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        newTodo.innerText = inputValue;
        newTodo.classList.add("item");
        todoDiv.appendChild(newTodo);
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        list.appendChild(todoDiv);
    }
    input instanceof HTMLInputElement ? (input.value = "") : "";
    input instanceof HTMLElement ? input.focus() : "";
}
function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        console.log("Trash button clicked");
        const todo = item.parentElement;
        todo.remove();
    }
    else if (item.classList[0] === "complete-btn") {
        console.log("Complete button clicked");
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    playSound("../../media/notification.mp3", 0.1);
}
function playSound(url, volume = 1) {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.play();
}
