
let tasksData = [
    {id: 12352351, isDone: true, date: new Date('2024-04-11T10:20:30Z'), content: "Lorem ipsum dolor sit amet, consectetur adip"},
    {id: 12436542, isDone: false, date: new Date('2024-04-12T10:20:30Z'), content: "Random text"},
    {id: 7546533, isDone: true, date: new Date('2024-04-13T10:20:30Z'), content: "New random text"},
    {id: 3254634,isDone: false, date: new Date('2024-04-14T10:20:30Z'), content: "Lorem ipsum"},
]

const svgDoneStr = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'

class Task {

    constructor(content, isDone, date, id) {
        if (!id) id = randomInteger(1, 99999999)
        this.content = content;
        this.isDone = isDone;
        this.date = date;
        this.id = id;

    }

    createTaskNodes = () => {
        this.formNode = document.createElement("form");
        this.buttonDone = document.createElement("button");
        this.listItem = document.createElement("li");
        this.buttonDelete = document.createElement("button");
        this.taskText = document.createElement("p");
        this.fieldset = document.createElement("fieldset");
        this.submitButton = document.createElement("button");
        this.taskDate = document.createElement("p");

    }

    setClasses = () => {
        this.submitButton.classList.add("btn", "btn-task", "taksks__item-delete");
        this.taskDate.classList.add("tasks__item-date");
        this.taskText.classList.add("tasks__item-text");
        this.buttonDone.classList.add("btn", "btn-task", "tasks__item-done");
        this.buttonDone.setAttribute("type", "button");
        this.buttonDelete.classList.add("btn", "btn-task", "taksks__item-delete");
        this.buttonDelete.setAttribute("type", "button");
        this.listItem.classList.add("tasks__item");
        this.listItem.setAttribute("id", this.id);
        this.formNode.classList.add("class", "tasks__item-form");
        if (this.isDone) {
            this.buttonDone.classList.add("done");
            this.formNode.classList.add("done");
        }
    }

    setContent = () => {
        if (this.isDone) this.buttonDone.innerHTML = svgDoneStr;
        this.submitButton.innerHTML = "X";
        this.buttonDelete.innerHTML = "X";  
        this.taskDate.innerHTML = this.date.toLocaleDateString();
        this.taskText.innerHTML = this.content;
    }

    buildStructure = () => {
        this.fieldset.appendChild(this.buttonDelete);
        this.fieldset.appendChild(this.taskDate);
        this.formNode.appendChild(this.buttonDone);
        this.formNode.appendChild(this.taskText);
        this.formNode.appendChild(this.fieldset);
        this.listItem.appendChild(this.formNode);
    }

    setEventListeners = () => {
        this.buttonDone.addEventListener("click", setTaskDone);
        this.buttonDelete.addEventListener("click", setTaskDelete);
    }

    getTaskNode = () => {
        this.createTaskNodes();
        this.setClasses();
        this.setContent();
        this.buildStructure();
        this.setEventListeners();
        return this.listItem
    }
}

function setTaskDelete (event) {
    this.parentNode.parentNode.parentNode.innerHTML = "";
}

function setTaskDone (event) {
    this.classList.toggle("done")
    this.parentNode.classList.toggle("done")
    this.innerHTML = (this.classList.contains("done")) ? svgDoneStr : ""
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

const formTaskList = document.querySelector(".tasks__items");

tasksData.forEach((element) => {
    let task = new Task(element.content, element.isDone, element.date, element.id);
    formTaskList.appendChild(task.getTaskNode());
});

const btnDelete = document.querySelector("#btnDelete");
const btnAdd = document.querySelector("#btnAdd");
const newTaskForm = document.querySelector("#newTaskForm");

function deleteAllTasks(event) {
    formTaskList.innerHTML = ""
}

function addNewTask(event) {
    event.preventDefault();
    const newTaskContent = event.target.querySelector("#newTaskContent");
    const date = new Date();
    let task = new Task(newTaskContent.value, false, date);
    tasksData.push({isDone: task.isDone, date: task.date, content: task.content, id: task.id})
    formTaskList.appendChild(task.getTaskNode());
    newTaskContent.value = '';
}


btnDelete.addEventListener("click", deleteAllTasks);
newTaskForm.addEventListener("submit", addNewTask);
