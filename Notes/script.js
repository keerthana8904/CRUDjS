let add = document.getElementById("btn");
let lists = document.getElementById("lists")
let notes = [];

// create
function craeteNote(){
    let title = document.getElementById("title");
    let titleVal = title.value.trim();
    
    let text = document.getElementById("notes");
    let textCon = text.value.trim();
    
    let now = new Date();

    let newObj = {
        title:titleVal,
        value:textCon,
        date : now.toLocaleString()
    };

    if(titleVal === "") {
        alert(`Kindly give note title `);
         return;
 }
    notes.push(newObj);
    console.log(notes)
   
    render();
    title.value = "";
    text.value = "";
    
}

// render

function render(){
    lists.innerHTML = "";
    
    notes.forEach((note,index)=>{

       // child each container 
        let oneNote = document.createElement("div");
        oneNote.classList.add("oneNote");

        // title ,contet and date
        let singleDiv = document.createElement("div");
        singleDiv.classList.add("textAndDate");
    
        let titleMain = document.createElement("div");
        titleMain.textContent = note.title;
        titleMain.classList.add("large");

        let content =  document.createElement("div");
        content.textContent = note.value;
        content.classList.add("small");

      
        let date = document.createElement("div");
        date.textContent = note.date;
        date.classList.add("smaller");

        // two btns  - update n delete
        let btn = document.createElement("div");
        btn.classList.add("btns")

      
        let dlt = document.createElement("button");
        dlt.textContent = `Delete`;
        dlt.classList.add("dltbtn");

   
        let upd = document.createElement("button");
        upd.textContent = `Update`;
        upd.classList.add("updbtn");

        upd.addEventListener("click",()=>{
            console.log(" update button clicked");
            let newTitle = prompt(`Update the Title:`,note.title);
            let newValue = prompt(`Update the Note:`,note.value);

            let now = new Date();
        
            if(newTitle  && newTitle.trim() !== ""){
                note.title = newTitle;
            };

            if(newValue  && newValue.trim() !== ""){
                 note.value = newValue;
            }

             note.date = now.toLocaleString()

            render();

            
        })

           dlt.addEventListener("click",()=>{
            console.log(" delete button clicked");
            notes.splice(index,1);
            render();
        })


        // update the title


    singleDiv.appendChild(titleMain);
    singleDiv.appendChild(date);
    singleDiv.appendChild(content);
   

    btn.appendChild(upd);
    btn.appendChild(dlt);

    oneNote.appendChild(singleDiv);
    oneNote.appendChild(btn);



    lists.appendChild(oneNote)

    });


  
    
}
add.addEventListener("click",craeteNote);