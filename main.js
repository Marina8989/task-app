//Define UI vars first
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear_tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListers();

//Load all events listeners function
function loadEventListers() {
  //add task event
  form.addEventListener("submit", addTask);
  //remove task event
  taskList.addEventListener("click", removeTask);
  //clear task event
  clearBtn.addEventListener("click", clearTasks);

  //filter through the tasks
  filter.addEventListener("keyup", filterTasks);
}
//Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  //create li element
  const li = document.createElement("li");
  //add class
  li.className = "collection-item";
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement("a");
  //add class
  link.className = "delete-item secondary-content";
  //add the icon html
  link.innerHTML = '<i class="fa fa-times"></i>';
  //append link to li
  li.appendChild(link);
  //append the li to ul
  taskList.appendChild(li);
  //clear the input right after
  taskInput.value = "";

  e.preventDefault();
}

//remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//clear task
function clearTasks() {
  //option number 1 (choose either first option to clear or second one)
  //taskList.innerHTML = "";
  //option number 2, faster option (i choose the second option)
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

//filter tasksk
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
