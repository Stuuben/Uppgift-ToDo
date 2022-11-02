let addButton = document.getElementById("addButton");
let userInput = document.getElementById("userInput");

const toDos = [
  { title: "Städa", isDone: false },
  { title: "Tvätta", isDone: false },
  { title: "Handla", isDone: false },
  { title: "Mata katten", isDone: false },
];
const doneToDos = [];

let toDoList = document.getElementById("toDo-list");
let doneList = document.getElementById("done-list");
let toDoContainer = document.getElementById("unchecked");
let doneContainer = document.getElementById("checked");

addButton.addEventListener("click", myAddButton);

renderList();

function renderList() {
  toDoList.innerHTML = "";
  doneList.innerHTML = "";

  for (let i = 0; i < toDos.length; i++) {
    console.log(toDos[i]);
    let listItem = document.createElement("li");

    
    const wrapper = document.createElement("div");
    const title = document.createElement("span");

    const checkbox = document.createElement("input");
    let button = document.createElement("button");
    // Create checkbox

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

    title.innerText = toDos[i].title;
    button.innerHTML = "X";

    // <listItem>
    //   <wrapper>
    //     <checkbox></checkbox>
    //     <title></title>
    //   </wrapper>
    //   // Här blir det space
    //   <button></button>
    // </listItem>

    // THIS IS NEW
    wrapper.append(checkbox, title);

    listItem.appendChild(wrapper);
    listItem.appendChild(button);

    if (toDos[i].isDone) {
      doneList.appendChild(listItem);
    } else {
      toDoList.appendChild(listItem);
    }
  }
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
