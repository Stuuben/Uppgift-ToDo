let addButton = document.getElementById("addButton");
let sortButton = document.getElementById("sortButton");
let sortButton2 = document.getElementById("sortButton2");
let resetButton = document.getElementById("resetButton");
let userInput = document.getElementById("userInput");
let toDoList = document.getElementById("toDo-list");
let doneList = document.getElementById("done-list");
let toDoContainer = document.getElementById("unchecked");
let doneContainer = document.getElementById("checked");

const myToDos = [
  { title: "Städa", isDone: false },
  { title: "Tvätta", isDone: false },
  { title: "Handla", isDone: false },
  { title: "Mata katten", isDone: false },
];

const todosFromString = localStorage.getItem("myTodos");

let toDos = JSON.parse(todosFromString) || myToDos;

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});
addButton.addEventListener("click", myAddButton);
sortButton.addEventListener("click", sortList);
sortButton2.addEventListener("click", sortListOtherWay);
resetButton.addEventListener("click", function () {
  toDos = myToDos;
  renderList();
});

renderList();

function renderList() {
  toDoList.innerHTML = "";
  doneList.innerHTML = "";

  const toDosString = JSON.stringify(toDos);
  localStorage.setItem("myTodos", toDosString);

  for (let i = 0; i < toDos.length; i++) {
    console.log(toDos[i]);
    let listItem = document.createElement("li");
    const wrapper = document.createElement("div");
    const buttonWrapper = document.createElement("div");
    const title = document.createElement("span");
    const checkbox = document.createElement("input");
    const button = document.createElement("button");

    checkbox.setAttribute("type", "checkbox");

    checkbox.checked = toDos[i].isDone;

    checkbox.addEventListener("change", (event) => {
      toDos[i].isDone = event.target.checked;
      renderList();
    });

    button.addEventListener("click", () => removeToDo(i));

    title.innerText = toDos[i].title;
    button.innerHTML = "X";

    wrapper.append(checkbox, title);
    buttonWrapper.appendChild(button);

    listItem.appendChild(wrapper);
    listItem.appendChild(buttonWrapper);

    if (toDos[i].isDone) {
      doneList.appendChild(listItem);
    } else {
      toDoList.appendChild(listItem);
    }
  }
}

function sortList() {
  toDos.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLocaleLowerCase()) {
      return -1;
    }
    if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
      return 1;
    }
    return 0;
  });

  renderList();
}

function sortListOtherWay() {
  toDos.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLocaleLowerCase()) {
      return 1;
    }
    if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
      return -1;
    }
    return 0;
  });

  renderList();
}

function removeToDo(i) {
  console.log("click");
  toDos.splice(i, 1);
  renderList();
}

function myAddButton() {
  if (userInput.value !== "") {
    const todoToAdd = { title: userInput.value, isDone: false };

    toDos.push(todoToAdd);
    userInput.value = "";
    renderList();
    console.log(toDos);
  }
}
