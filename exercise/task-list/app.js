//Elementos importantes
const taskList = document.getElementById("task-list")
const inputId = document.getElementById("input-id")
const btnAdd = document.getElementById("btn-add")

// Clase tarea

// 

class Task {
  constructor(id, text, isCompleted = false) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
    this.element = null;

    this.createElement();
  }

  createElement() {
    let li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
      <div class="task-container">
        <button class="btn-check">✓</button>
        <span class="task-name">${this.text}</span>
      </div>
      <button class="btn-delete" onclick="deleteTask()">🗑️</button>
    `;

    const btnDelete = li.querySelector(".btn-delete");
    btnDelete.addEventListener("click", () => {
      this.deleteTask();
    });

    console.log(li);
    this.element = li;
  }

  deleteTask() {
    this.element.remove();
  }

}

function addTask() {
  const id = new Date().getTime();
  const taskText = inputId.value.trim(); // Se utiliza la variable text obtenida del input

  if (taskText !== ""){
    const taskToAdd = new Task(id, taskText);
    taskList.prepend(taskToAdd.element);
    inputId.value = "";
  }   
}

function deleteTask() 
