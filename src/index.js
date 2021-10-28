import './style.css';
import domObjects from './domObjects.js';
import taskStatus from './taskStatus.js';

let tasks = [];
const clear = document.getElementById('clear');
const inputField = document.getElementById('addTask');

const displayOnLoad = () => {
  if (localStorage.getItem('tasks') != null) {
    domObjects();
  }
};
displayOnLoad();

const addToList = (newTask) => {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksArr = () => {
  const inputFieldValue = inputField.value;
  const newTask = {
    description: inputFieldValue,
    completed: false,
  };
  addToList(newTask);
};

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    tasksArr();
    domObjects();
  }
});

clear.addEventListener('click', () => {
  localStorage.clear();
  domObjects();
});
taskStatus(0);