let todo = [];

document.getElementById('addBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        todo.push(taskInput);
        document.getElementById('taskInput').value = '';
        updateTaskList();
    }
});

document.getElementById('deleteBtn').addEventListener('click', function() {
    let taskIndex = parseInt(document.getElementById('taskIndex').value, 10);
    if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < todo.length) {
        todo.splice(taskIndex, 1);
        document.getElementById('taskIndex').value = '';
        updateTaskList();
    } else {
        alert('Invalid index.');
    }
});

document.getElementById('listBtn').addEventListener('click', function() {
    updateTaskList();
});

function updateTaskList() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    todo.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = `${index}: ${task}`;
        taskList.appendChild(li);
    });
}
