const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function AddTask() {
  if (inputBox.value === '') {
    alert('Text field empty!');
  } else {
    let newTask = document.createElement('li');
    newTask.innerHTML = inputBox.value;
    listContainer.appendChild(newTask);

    let span = document.createElement('span');
    //span.innerHTML = '\u00d7';
    span.innerHTML = '🗑️';
    newTask.appendChild(span);

    inputBox.value = '';
    SaveData();
  }
}

listContainer.addEventListener(
  'click',
  function (event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
    } else if (event.target.tagName === 'SPAN') {
      event.target.parentElement.remove();
    }
    SaveData();
  },
  false
);

function SaveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function LoadData() {
  listContainer.innerHTML = localStorage.getItem('data');
}
LoadData();
