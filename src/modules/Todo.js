const taskInput = document.getElementById('task');
const taskList = document.getElementById('todo-list');
let tasks = [];
const storedTasks = JSON.parse(localStorage.getItem('tasks'));
if (storedTasks) {
  tasks = storedTasks;
}

// Add to local storage
function saveToDoItem() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete a task
const deleteTask = (index) => {
  // Remove the task from the array
  tasks.splice(index, 1);

  // Update the index of the remaining tasks
  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }

  // Update the todo list in local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  displayAllTodos(); /* eslint-disable-line */ 
};

// Render the task list
const displayAllTodos = () => {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.id = `task-${index}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', () => toggleCompletedToDo(index));/* eslint-disable-line */ 

    const taskDescription = document.createElement('input');
    taskDescription.type = 'text';
    taskDescription.className = 'task-description';
    taskDescription.value = task.description;
    taskDescription.addEventListener('blur', () => {
      editToDoItem(index, taskDescription.value);/* eslint-disable-line */ 
    });

    const deleteButton = document.createElement('span');
    deleteButton.className = 'material-symbols-outlined';
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'more_vert';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });

    listItem.addEventListener('mouseover', () => {
      deleteButton.textContent = 'delete';
    });

    listItem.addEventListener('mouseout', () => {
      deleteButton.textContent = 'more_vert';
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    if (task.completed) {
      taskDescription.style.textDecoration = 'line-through';
    }
  });
};

// Add a new task
const addToDoItem = () => {
  const taskDescription = taskInput.value;
  if (taskDescription.trim()) {
    const newTask = {
      description: taskDescription,
      completed: false,
      index: tasks.length,
    };
    tasks.push(newTask);
    saveToDoItem();
    displayAllTodos();
    taskInput.value = '';
  }
};

// Edit a task description
const editToDoItem = (index, newDescription) => {
  tasks[index].description = newDescription;
  saveToDoItem();
  displayAllTodos();
};

const toggleCompletedToDo = (index) => {
  tasks[index].completed = !tasks[index].completed;
  saveToDoItem();
  displayAllTodos();
};

const todoList = document.getElementById('todo-list');
const button = document.getElementById('clearBtn');

button.addEventListener('click', () => {
  const completedTodos = todoList.querySelectorAll('input:checked');
  completedTodos.forEach((todo) => {
    todo.parentNode.remove();
    saveToDoItem();
  });

  const todosInLocalStorage = JSON.parse(localStorage.getItem('tasks'));
  const uncheckedToDos = todosInLocalStorage.filter((todo) => !todo.completed);
  localStorage.setItem('tasks', JSON.stringify(uncheckedToDos));
});

export { addToDoItem, displayAllTodos, saveToDoItem };