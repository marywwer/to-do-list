let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();

  let taskText = input.value.trim();

  if (taskText === '') return;

  let newTask = document.createElement('li');
  newTask.textContent = taskText;

  if (priority.classList.contains('is-important')) {
    newTask.classList.add('is-important');
  }

  list.appendChild(newTask);
  input.value = '';
};