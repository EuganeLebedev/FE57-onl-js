import { DefaultStorageKey } from "./utils.js"
class Storage {

    constructor(isDemo) {
        this.storageKey = DefaultStorageKey;
        if (isDemo) {
            this.addDemo()
        } else if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify([]))
        }
    }

    addDemo = () => {
        let demoData = JSON.stringify([
            {id: 12352351, isDone: true, date: new Date('2024-04-11T10:20:30Z'), content: "Lorem ipsum dolor sit amet, consectetur adip"},
            {id: 12436542, isDone: false, date: new Date('2024-04-12T10:20:30Z'), content: "Random text"},
            {id: 7546533, isDone: true, date: new Date('2024-04-13T10:20:30Z'), content: "New random text"},
            {id: 3254634,isDone: false, date: new Date('2024-04-14T10:20:30Z'), content: "Lorem ipsum"},
        ])
        localStorage.setItem(this.storageKey, demoData);
    }

    getAllTasks = () => {
        let data = JSON.parse(localStorage.getItem(this.storageKey))
        return data

    }

    addNewTask = (newTask) => {
        let tasksData = this.getAllTasks()
        tasksData.push(newTask)
        localStorage.setItem(this.storageKey, JSON.stringify(tasksData));
    }

    removeAll = () => {
        localStorage.setItem(this.storageKey, JSON.stringify([]));
    }

    removeTask = (id) => {
        let tasksData = this.getAllTasks()
        tasksData = tasksData.filter(item => item.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(tasksData));
    }

    setDone = (id) => {
        let tasksData = this.getAllTasks()
        tasksData.forEach(obj => {
            if (obj.id === id) {
                obj.isDone = !obj.isDone
            }
        });
        localStorage.setItem(this.storageKey, JSON.stringify(tasksData));
    }
}

export { Storage }