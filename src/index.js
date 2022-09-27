import './style.css';

const list = [
  {
    description: 'Walk the dog',
    completed: false,
    index: 1,
  },
  {
    description: 'Take the car to the mechanic',
    completed: false,
    index: 2,
  },
  {
    description: 'Do the laundry',
    completed: false,
    index: 3,
  },
  {
    description: 'Buy groceries',
    completed: false,
    index: 4,
  },
];
document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('.todolist');
  list.forEach((list) => {
    const listHtml = `<li class="list-item" id="${list.index}"> <div><i class="fa-regular fa-square-full"></i> <span class="task">${list.description}</span></div><i class="fa-solid fa-ellipsis-vertical"></i></li>`;
    listContainer.insertAdjacentHTML('beforeend', listHtml);
  });
});
