# TO-DO-Application-
to do list 


Functionality of the "Todo List" Application

1. Add Task Functionality
Input Field: "Enter your task"
The user types a task they want to add to the list.
Button: "Add Task"
When the user clicks this button:
The task is added to the internal todo array.
The input field is cleared for convenience.
The updated list of tasks is displayed.


2. Delete Task Functionality
Input Field: "Enter task index to delete"
The user enters the index number of the task they want to delete.
Button: "Delete Task"
When clicked:
The application checks if the index is valid (within the task list).
If valid, the task at the specified index is removed from the todo array.
If invalid, an alert shows "Invalid index".
The updated task list is displayed after the task is deleted.


3. List Tasks Functionality
Button: "List Tasks"
When the user clicks this button:
All the tasks currently stored in the todo array are displayed in a numbered format.
Each task is shown alongside its index to help users know which task to delete.


How It Works Together
Add a Task:
Enter a task → Click "Add Task" → The list updates.
Delete a Task:
Enter the task index → Click "Delete Task" → Task is removed from the list.
List Tasks:
Click "List Tasks" → All current tasks are displayed with their indices.





________________________________________________________________________________________________________________________________________________________________
Logic Code : 

// 📝 Initialize an empty array to store tasks.
let todo = []; 




// 🎯 Add an event listener to the "Add" button.
document.getElementById('addBtn').addEventListener('click', function() {
    // 🖊️ Get the value of the task input field.
    let taskInput = document.getElementById('taskInput').value;

    // ✅ Check if the input is not empty (ignoring whitespace).
    if (taskInput.trim() !== '') {
        // ➕ Add the task to the 'todo' array.
        todo.push(taskInput);

        // 🗑️ Clear the input field after adding the task.
        document.getElementById('taskInput').value = '';

        // 🔄 Update the task list display.
        updateTaskList();
    }
});

// 🎯 Add an event listener to the "Delete" button.
document.getElementById('deleteBtn').addEventListener('click', function() {
    // 🔢 Get the index of the task to be deleted (entered by the user).
    let taskIndex = parseInt(document.getElementById('taskIndex').value, 10);

    // ✅ Validate the index (check if it's a number and within the array bounds).
    if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < todo.length) {
        // ❌ Remove the task from the 'todo' array using splice().
        todo.splice(taskIndex, 1);

        // 🗑️ Clear the index input field after deletion.
        document.getElementById('taskIndex').value = '';

        // 🔄 Update the task list display.
        updateTaskList();
    } else {
        // ⚠️ Alert the user if the index is invalid.
        alert('Invalid index.');
    }
});

// 🎯 Add an event listener to the "List All Tasks" button.
document.getElementById('listBtn').addEventListener('click', function() {
    // 🔄 Refresh and display the list of tasks.
    updateTaskList();
});

// 🔧 Function to update the task list display.
function updateTaskList() {
    // 📝 Select the HTML element where tasks will be displayed.
    let taskList = document.getElementById('taskList');

    // 🗑️ Clear any existing tasks in the list.
    taskList.innerHTML = '';

    // 🔄 Loop through each task in the 'todo' array and display it.
    todo.forEach((task, index) => {
        // 📌 Create a new <li> element for each task.
        let li = document.createElement('li');

        // 🖊️ Set the text content of the <li> to include the task index and name.
        li.textContent = `${index}: ${task}`;

        // ➕ Add the <li> to the task list.
        taskList.appendChild(li);
    });
}
