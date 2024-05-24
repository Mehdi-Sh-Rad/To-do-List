let container = document.getElementById('list-container');
let allTasks = [];
function taskOperation() {
    let taskInof = {name: '', task: '', dueDate: ''};
    const name = document.getElementById('name-box');
    const task = document.getElementById('task-box');
    const dueDate = document.getElementById('date-box');
    if (name.value != '' && task.value != '' && dueDate.value != '') {
        taskInof['name'] = name.value;
        taskInof['task'] = task.value;
        taskInof['dueDate'] = dueDate.value;
        allTasks.push(taskInof);
        name.value = '';
        task.value = '';
        dueDate.value = '';
        showAllTasks();
    }
}
function removeAllChildNodes(parent) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
function showAllTasks() {
    console.log(name)
    removeAllChildNodes()
    for (t of allTasks) {
        let i = document.createElement('li');
        i.innerHTML = `${t.name}  =>  "${t.task}"   date: ${t.dueDate} </br>`;
        container.appendChild(i);
    }
}