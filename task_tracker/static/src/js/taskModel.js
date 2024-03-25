import { randomInteger, svgDoneStr } from "./utils.js";
import { Storage } from "./storage.js"

let storage= new Storage();

function setTaskDone (event) {
    let id = Number(this.parentNode.parentNode.getAttribute("id"))
    storage.setDone(id)
    this.classList.toggle("done")
    this.parentNode.classList.toggle("done")
    this.innerHTML = (this.classList.contains("done")) ? svgDoneStr : ""
}

function setTaskDelete (event) {
    let id = Number(this.parentNode.parentNode.parentNode.getAttribute("id"))
    storage.removeTask(id)
    this.parentNode.parentNode.parentNode.innerHTML = "";

}

class Task {

    constructor(content, isDone, date, id) {
        if (!id) id = randomInteger(1, 99999999999)
        this.content = content;
        this.isDone = isDone;
        this.date = new Date(date);
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

export { Task }