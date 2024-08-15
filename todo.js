var todoArray = []
var editMode = true
var editTaskId = null
console.log(todoArray)
function add_task() {
    taskName = document.getElementById('taskInput').value
    if (taskName === '') {
        alert("Please write your task First")
    }
    else {
        todoObject = {
            taskId: todoArray.length + 1,
            taskName: taskName
        }
        todoArray.push(todoObject)
        showTotalTask()
    }
    taskInput.value = '';
}

function showTotalTask() {
    parent = document.getElementById('parentElement')
    parent.innerHTML = ""
    todoArray.forEach(render)
    function render(index) {
        let newLi = document.createElement('li')
        newLi.className = 'list-group-item taskList d-flex'
        newLi.innerHTML = `<h6 class="flex-grow-1" id="heading">${index.taskName}</h6>
                        <button class="btn btn-warning mx-3" onclick="editTask(${index.taskId})" >Edit</button>
                        <button class="btn btn-danger" id="delet_btn"  onclick="deleteTask(${index.taskId})" >Delet</button>`
        parent.appendChild(newLi)
    }

}

delet_btn = document.getElementById('delet_btn')
function deleteTask(taskId) {
    todoArray = todoArray.filter(function (task) {
        return task.taskId !== taskId
    })
    showTotalTask()
}
edit = true
function editTask(taskId) {
    editMode = true;
    editTaskId = taskId;
    const taskToEdit = todoArray.find(task => task.taskId === taskId);
    document.getElementById('taskInput').value = taskToEdit.taskName;
    const editButton = document.querySelector(`button[onclick="editTask(${taskId})"]`);
    editButton.textContent = "Save";
    editButton.onclick = saveTask;
}


function saveTask() {
    if (editMode) {
        const newTaskName = document.getElementById('taskInput').value
        const taskIndex = todoArray.findIndex(task => task.taskId === editTaskId)
        todoArray[taskIndex].taskName = newTaskName
        editMode = false
        editTaskId = null
        showTotalTask()
        document.getElementById('taskInput').value = ''
    }
}







