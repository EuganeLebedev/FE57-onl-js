import { Storage } from "./storage.js"
import { Task } from "./taskModel.js"
import { DefaultStorageKey, svgDoneStr } from "./utils.js"



const btnDelete = document.querySelector("#btnDelete");
const btnAdd = document.querySelector("#btnAdd");
const newTaskForm = document.querySelector("#newTaskForm");



let storage= new Storage();

const formTaskList = document.querySelector(".tasks__items");



storage.getAllTasks().forEach((element) => {
    let task = new Task(element.content, element.isDone, element.date, element.id);
    formTaskList.appendChild(task.getTaskNode());
});



function deleteAllTasks(event) {
    storage.removeAll()
    formTaskList.innerHTML = ""
}

function addNewTask(event) {
    event?.preventDefault();
    const newTaskContent = event.target.querySelector("#newTaskContent");
    const date = new Date();
    let task = new Task(newTaskContent.value, false, date);
    storage.addNewTask(task)
    formTaskList.appendChild(task.getTaskNode());
    newTaskContent.value = '';
}

function processStorageChanges(event) {
    if (!(event.key == DefaultStorageKey)) {
        return
    }
    if (event.newValue && event.oldValue) {
        if (event.newValue == "[]") {
            formTaskList.innerHTML = ""
            return;
        }
        let newValue = JSON.parse(event.newValue)
        let oldValue = JSON.parse(event.oldValue)

        let toAdd = newValue.filter(obj => !oldValue.some(item => item.id === obj.id));
        let toDelete = oldValue.filter(obj => !newValue.some(item => item.id === obj.id));
        let setDone = newValue.filter(obj => oldValue.some(item => item.id === obj.id && item.isDone !== obj.isDone));
        toAdd.forEach((element) => {
                let task = new Task(element.content, element.isDone, element.date, element.id);
                formTaskList.appendChild(task.getTaskNode());
        })
        toDelete.forEach((element) => {
            let task = document.getElementById(element.id)
            task.innerHTML = ""

        })
        setDone.forEach((element) => {
            let task = document.getElementById(element.id)
            let form = task.querySelector(".tasks__item-form")
            let button = task.querySelector(".tasks__item-done")
            form.classList.toggle("done")
            button.classList.toggle("done")
            button.innerHTML = (button.classList.contains("done")) ? svgDoneStr : ""
        })
    }
}

window.addEventListener("storage", processStorageChanges);

btnDelete.addEventListener("click", deleteAllTasks);
newTaskForm.addEventListener("submit", addNewTask);
