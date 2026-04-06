let addBtn = document.getElementById("add");

function add() {
    let inputBox = document.getElementById("tasksEnter");
    let inputTask = inputBox.value.trim();

    if (inputTask === "") {
        alert("Enter task!");
        return;
    }

    let container = document.getElementById("lists");

    // MAIN TASK DIV
    let child = document.createElement("div");
    child.classList.add("singleDiv");

    // TEXT
    let span = document.createElement("span");
    span.textContent = inputTask;
    span.classList.add("task");

    // BUTTON CONTAINER
    let btns = document.createElement("div");
    btns.classList.add("btns");

    // DELETE BUTTON
    let dltbtn = document.createElement("button");
    dltbtn.classList.add("dlt");
    dltbtn.textContent = "Delete";

    dltbtn.addEventListener("click", () => {
        child.remove();
    });

    // UPDATE BUTTON
    let upbtn = document.createElement("button");
    upbtn.classList.add("updt");
    upbtn.textContent = "Update";

    upbtn.addEventListener("click", () => {
        
        let newTask = prompt("Edit task:", span.textContent);

        if (newTask && newTask.trim() !== "") {
            span.textContent = newTask;
        }
    });

    // APPEND STRUCTURE
    btns.appendChild(dltbtn);
    btns.appendChild(upbtn);

    child.appendChild(span);
    child.appendChild(btns);

    container.appendChild(child);

    inputBox.value = "";
}

addBtn.addEventListener("click", add);