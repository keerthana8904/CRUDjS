let add = document.getElementById("btn");
let lists = document.getElementById("lists")
let notes = [];
 let found =[];

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
   
    render.call(notes);
    title.value = "";
    text.value = "";
    
}

function seacrch(){
// take the title
    let searchEle = document.getElementById("search");
    let searchValue = searchEle.value;
    console.log(searchValue);

    if(searchValue.trim() === ""){
        render.call(notes);
        alert(`please enter title to be seach`)
    }
    
// search by letters
   let found = notes.filter((note)=>note.title.toLowerCase().includes(searchValue.toLowerCase()));
   console.log(found);
   if(found.length === 0){
    render.call(notes); 
     alert(`note not found`);
     

   }else{
    render.call(found);
   }

   
}

let searchBtn = document.getElementById("searchBar");
searchBtn.addEventListener("click",seacrch);


function render(){
    lists.innerHTML = "";
    
    this.forEach((note,index)=>{

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
            let newValue = prompt(`Update the value:`,note.value);

            let now = new Date();
            if(newValue  && newValue.trim() !== ""){
             note.value = newValue;
             note.date = now.toLocaleString()
            };

            render.call(notes);
            
        })

           dlt.addEventListener("click",()=>{
            console.log(" delete button clicked");
            notes.splice(index,1);
            render.call(notes);
        })


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