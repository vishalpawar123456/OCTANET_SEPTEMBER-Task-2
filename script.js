
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = todoInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    todoInput.value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="todo-actions">
      <button class="complete-btn">Complete</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
  todoList.appendChild(li);

  const completeBtn = li.querySelector('.complete-btn');
  const editBtn = li.querySelector('.edit-btn');
  const deleteBtn = li.querySelector('.delete-btn');

  completeBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  editBtn.addEventListener('click', function() {
    const newTaskText = prompt('Edit your task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      li.querySelector('span').textContent = newTaskText.trim();
    }
  });

  deleteBtn.addEventListener('click', function() {
    todoList.removeChild(li);
  });
}
