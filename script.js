let name = document.getElementById('name-box').value;
let task = document.getElementById('task-box').value;
let dueDate = document.getElementById('date-box').value;
let container = document.getElementById('list-container');
let allTasks = [];
function taskOperation(){
    let taskInof = {name:'',task:'',dueDate:''};
    let name = document.getElementById('name-box').value;
    let task = document.getElementById('task-box').value;
    let dueDate = document.getElementById('date-box').value;
    taskInof['name'] = name;
    taskInof['task'] = task;
    taskInof['dueDate'] = dueDate;
    allTasks.push(taskInof);
    showAllTasks();
}
function removeAllChildNodes(parent) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
function showAllTasks(){
    removeAllChildNodes()
    for(t of allTasks) {
        let i = document.createElement('li');
        i.innerHTML = `${t.name}' task is => "${t.task}" time to do => ${t.dueDate} </br>`;
        console.log(allTasks[t]);
        container.appendChild(i);
    }
}

