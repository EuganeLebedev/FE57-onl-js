const url = 'https://jsonplaceholder.typicode.com/todos';

async function getTodos() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        return [];
    }
}

function printTodos(todoList) {
    const ul = document.createElement('ul');
    todoList.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `ID: ${todo.id}, Title: ${todo.title}`;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

getTodos().then((todos) => {printTodos(todos)});