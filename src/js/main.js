let addButton = document.getElementById("addButton");
let userInput = document.getElementById("userInput");
let sortButton = document.getElementById("sortButton");

const toDos = [
  { title: "Städa", isDone: false },
  { title: "Tvätta", isDone: false },
  { title: "Handla", isDone: false },
  { title: "Mata katten", isDone: false },
];
const doneToDos = [];
const toDofake = [];

let toDoList = document.getElementById("toDo-list");
let doneList = document.getElementById("done-list");
let toDoContainer = document.getElementById("unchecked");
let doneContainer = document.getElementById("checked");

addButton.addEventListener("click", myAddButton);

renderList();

function renderList() {
  // gör så koden inte dupliceras
  toDoList.innerHTML = "";
  doneList.innerHTML = "";

  for (let i = 0; i < toDos.length; i++) {
    console.log(toDos[i]);
    let listItem = document.createElement("li");

    const wrapper = document.createElement("div");
    const buttonWrapper = document.createElement("div");
    const title = document.createElement("span");
    // skapas för att göra layoten lättare

    const checkbox = document.createElement("input");
    let button = document.createElement("button");
    let buttonUp = document.createElement("button");
    let buttonDown = document.createElement("button");
    // skapa checkbox

    checkbox.setAttribute("type", "checkbox");

    // Set checkbox checked if todo is done
    checkbox.checked = toDos[i].isDone; // true | false

    // Add an eventlistener to the checkbox that will fire on any "change"
    checkbox.addEventListener("change", (event) => {
      console.log("is Checked:", event.target.checked);
      // Update the todos isDone value to checkbox value. I.e. if checked = todo is done.
      toDos[i].isDone = event.target.checked;
      renderList();
    });
    button.addEventListener("click", () => removeToDo(i));
    buttonDown.addEventListener("click", () => moveDown(i));
    buttonUp.addEventListener("click", () => moveUp(i));

    title.innerText = toDos[i].title;
    button.innerHTML = "X";
    buttonUp.innerHTML = "▲";
    buttonDown.innerHTML = "▼";

    wrapper.appendChild(checkbox);
    wrapper.appendChild(title);

    listItem.appendChild(wrapper);
    listItem.appendChild(buttonWrapper);

    buttonWrapper.appendChild(buttonUp);
    buttonWrapper.appendChild(buttonDown);
    buttonWrapper.appendChild(button);

    if (toDos[i].isDone) {
      doneList.appendChild(listItem);
    } else {
      toDoList.appendChild(listItem);
    }
  }
}

function removeToDo(i) {
  //tar bort u listan
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

function sortButton() {
  console.log("sort");
}

function moveUp(i) {
  console.log("up");

  toDofake.push(toDos[i]);

  toDos.unshift(toDofake[i]);
  console.log(toDofake);
  renderList();
}

function moveDown(i) {
  console.log("down");
  toDos.push(toDos[i]);
  toDos.splice(i, 1);

  renderList();
}
