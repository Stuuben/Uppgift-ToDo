let addButton = document.getElementById("addButton");
let userInput = document.getElementById("userInput");
let toDoList = document.getElementById("toDo-list");
let doneList = document.getElementById("done-list");
let toDoContainer = document.getElementById("unchecked");
let doneContainer = document.getElementById("checked");


let toDos = [
  { title: "Städa", isDone: false },
  { title: "Tvätta", isDone: false },
  { title: "Handla", isDone: false },
  { title: "Mata katten", isDone: false },
];
const doneToDos = [];


addButton.addEventListener("click", myAddButton);

renderList();

function renderList() {
  toDoList.innerHTML = "";
  doneList.innerHTML = "";

  for (let i = 0; i < toDos.length; i++) {
    console.log(toDos[i]);
    let listItem = document.createElement("li");
    const wrapper = document.createElement("div");
    const buttonWrapper = document.createElement("div")
    const title = document.createElement("span");
    const checkbox = document.createElement("input");
    let button = document.createElement("button");
    let downButton = document.createElement("button")


    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = toDos[i].isDone;
    checkbox.addEventListener("change", (event) => {

      toDos[i].isDone = event.target.checked;
      renderList();
    });

    button.addEventListener("click", () => removeToDo(i));
    downButton.addEventListener("click", () => moveDown(i));

    title.innerText = toDos[i].title;
    button.innerHTML = "X";
    downButton.innerHTML = "↓"


    wrapper.append(checkbox, title);
    buttonWrapper.append(downButton, button)
   
    listItem.appendChild(wrapper);
    listItem.appendChild(buttonWrapper)
   
   

    if (toDos[i].isDone) {
      doneList.appendChild(listItem);
    } else {
      toDoList.appendChild(listItem);
    }
  }
}

function moveDown(i) {
    
    console.log(toDos[i])
   
    toDos.push(toDos[i])
    toDos.splice(i, 1)
    
    renderList();
}

function removeToDo(i) {
  //tar bort ut listan
  console.log("click");
  toDos.splice(i, 1);
  renderList();
}

function myAddButton() {
  // Om man inte skriver något så kan man inte lägga till
  if (userInput.value !== "") {
    const todoToAdd = { title: userInput.value, isDone: false };

    toDos.push(todoToAdd);
    userInput.value = "";
    renderList();
    console.log(toDos);
  }
}
