
let tasksData = [
    {isDone: true, date: "13/05/2024", content: "Lorem ipsum dolor sit amet, consectetur adip"},
    {isDone: false, date: "14/05/2024", content: "Random text"},
    {isDone: true, date: "15/05/2024", content: "New random text"},
    {isDone: false, date: "16/05/2024", content: "Lorem ipsum"},
]

class Task {
    constructor(content, isDone, date) {
        this.content = content;
        this.isDone = isDone;
        this.date = date;

    }

    getTaskNode = function() {
        const svgDoneStr = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>'
        let formNode = document.createElement("form");
        let buttonDone = document.createElement("button");
        let listItem = document.createElement("li");
        let buttonDelete = document.createElement("button");
        let taskText = document.createElement("p");
        let fieldset = document.createElement("fieldset");
        let submitButton = document.createElement("button");
        let taskDate = document.createElement("p");

        submitButton.classList.add("btn", "btn-task", "taksks__item-delete");
        submitButton.innerHTML = "X";

        taskDate.classList.add("tasks__item-date");
        taskDate.innerHTML = this.date;

        fieldset.appendChild(submitButton);
        fieldset.appendChild(taskDate);

        taskText.classList.add("tasks__item-text");
        taskText.innerHTML = this.content;

        formNode.classList.add("class", "tasks__item-form");

        buttonDone.classList.add("btn", "btn-task", "tasks__item-done");
        buttonDelete.classList.add("btn", "btn-task", "taksks__item-delete");

        

        listItem.classList.add("tasks__item");
        buttonDelete.innerHTML = "X";
        if (this.isDone) {
            buttonDone.innerHTML = svgDoneStr;
        }
        formNode.appendChild(buttonDone);
        formNode.appendChild(taskText);
        formNode.appendChild(fieldset);
        listItem.appendChild(formNode);
        return listItem
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }

const formTaskList = document.querySelector(".tasks__items");

tasksData.forEach((element) => {
    let task = new Task(element.content, element.isDone, element.date);
    formTaskList.appendChild(task.getTaskNode());
});
