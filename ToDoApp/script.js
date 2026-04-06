let tasks = [];

// craete
function add(){

    let task = document.getElementById("tasksEnter");
    let inputTask = task.value.trim();

    console.log(inputTask);
    if(inputTask === "") return;

    tasks.push(inputTask);

    render();

    task.value = "";

}

// render  - read
function render(){

    let container = document.getElementById("lists");

    container.innerHTML = "";

    tasks.forEach((task,index)=>{

        let child = document.createElement("div");
        child.classList.add("singleDiv");

        let span = document.createElement("span");
        span.classList.add("task");
        span.textContent = task;

        let btns = document.createElement("div");
        btns.classList.add("btns");
        
        // delete
        let dltbtn = document.createElement("button");
        dltbtn.textContent = `Delete`;
        dltbtn.classList.add("dlt");

        dltbtn.addEventListener("click",()=>{
            tasks.splice(index,1);
            render();
        });


        // update
        let updbtn = document.createElement("button");
        updbtn.textContent = `Update`;
        updbtn.classList.add("updt");

        updbtn.addEventListener("click",()=>{
            let newTask = prompt("Edit task",task);
            if(newTask.trim() !== "" ){
                tasks[index] = newTask;
                render();
            }
        });

            // append
            btns.appendChild(updbtn);
            btns.appendChild(dltbtn);

            child.appendChild(span);
            child.appendChild(btns);

            container.appendChild(child);
           
        })

    }



let addtask = document.getElementById("add");
addtask.addEventListener("click",add);
