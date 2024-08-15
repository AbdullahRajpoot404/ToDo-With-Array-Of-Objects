let taskArray = []
let editTaskId = null

let taskInput = document.getElementById('taskInput')
let btnAddTask = document.getElementById('button-addon2')
let btnUpdate = document.getElementById('button-addon2')
let btnDelete = document.getElementById('btnDelete')
let parent = document.getElementById('parentElement')

btnAddTask.addEventListener('click', () => {
    let taskText = taskInput.value
    if (taskText === '') {
        alert('Please add task first')
        return
    }
    if (editTaskId === null) {
        taskObject = {
            id: taskArray.length + 1,
            task: taskText
        }
        taskArray.push(taskObject)
    }
    taskInput.value = ''
    showAllTasks()

})

function showAllTasks() {
    parent.innerHTML = ''
    taskArray.forEach(task => {
        newLi = document.createElement('li')
        newLi.className = "list-group-item taskList d-flex"
        newH6 = document.createElement('h6')
        newH6.textContent = task.task
        newLi.appendChild(newH6)
        parent.appendChild(newLi)

    })

}

btnUpdate.addEventListener('click',()=>{
    taskText = taskInput.value
    if(editTaskId === null){
        alert('Please select task first')
    }
    else{
        taskId = taskArray.find(task => task.id === editTaskId)

    }
})
