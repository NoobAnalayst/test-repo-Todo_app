
let ctr = 1;
//button funtion. add todo onclick of button
function addTodo() {
    // const inputEl=document.querySelector("input");
    // const value = inputEl.value;
    // console.log(value);

    const divEl = document.createElement("div");
    divEl.setAttribute("id",ctr);
    
    value = document.querySelector("input").value;
    divEl.innerHTML= "<div>"+ ctr+".  " +value+"</div><button onclick='newdeleteTodo("+ ctr +")'>Delete</button>"
    const parentEl = document.querySelector("body");
    parentEl.appendChild(divEl);
    ctr= ctr+1;

};


// updating elements
// let ctr = 0;
// function callback(){ 
//     document.querySelectorAll("h4")[1].innerHTML=ctr;
//     ctr=ctr+1;

// };
// setInterval(callback,1000);

// deleting todo

function deleteTodo(index) {
    const element= document.getElementById("todo-"+index);
    element.parentNode.removeChild(element);
};

function newdeleteTodo(index) {
    const element= document.getElementById(index);
    element.parentNode.removeChild(element);
};


//Adding elements

// const divEl = document.createElement("div");
// divEl.innerHTML= document.querySelector("input").value;
// const parentEl = document.querySelector("body");
// parentEl.appendChild(divEl);