let input =document.querySelector(".input");
let submit= document.querySelector(".add");
let taskplace= document.querySelector(".tasks");

let thearray = [];

if (localStorage.getItem("tasks")) {
    thearray = JSON.parse(localStorage.getItem("tasks"));
}

getdata();

submit.onclick= function () {
    if (input.value !== ""){
        addtask(input.value);
        input.value= "";
    }
};

taskplace.addEventListener("click", (e) => { 
    if (e.target.classList.contains("del")) {
        e.target.parentElement.remove();
    }
  });

function addtask(text){
    let taskk = {
        id: Date.now(),
        title: text,
        completed: false,
    };
    thearray.push(taskk);
    addeletopage(thearray);
    addtostorgae(thearray);
}

function addeletopage(thearray) {
    // Empty Tasks Div
    taskplace.innerHTML = "";
    thearray.forEach((taskk) => { 
      let div = document.createElement("div");
      div.className = "task";
      if (taskk.completed){
        div.className = " task is done"
      }
      div.setAttribute("data-id", taskk.id);
      div.appendChild(document.createTextNode(taskk.title));
      let span = document.createElement("span");
      span.className = "del";
      span.appendChild(document.createTextNode("   (delete)"));
      div.appendChild(span);
      taskplace.appendChild(div);
    });
}

function addtostorgae(thearray){
    window.localStorage.setItem("tasks" , JSON.stringify(thearray));
}

function getdata(){
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addeletopage(tasks);
    }
}