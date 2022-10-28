let addButton = document.getElementById("addButton");
let userInput = document.getElementById("userInput");

let toDo = ["Städa", "Tvätta", "Handla", "Mata katten"];

let info = document.createElement("ul");

for (let i = 0; i < toDo.length; i++) {
  console.log(toDo[i]);

  let container = document.getElementById("container");

  let list = document.createElement("li");
  let button = document.createElement("button");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  addButton.addEventListener("click", myAddButton);
  button.addEventListener("click", clicker);

  list.innerHTML = toDo[i];
  button.innerHTML = "Ta bort";

  document.body.appendChild(container);
  container.appendChild(info);
  info.appendChild(list);
  list.appendChild(checkbox);
  list.appendChild(button);
}

function clicker() {
  //ta bort li taggen
  console.log("click");
}

function myAddButton() {
  //adda det som skrivits i inputen till listan
  toDo.push(userInput.value);
  console.log(userInput.value);
}
