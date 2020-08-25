const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

const buttonAdd = document.querySelector('.buttonAdd');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  const span = document.createElement('button');
  span.className = "remove"
  li.textContent = text;
  ul.appendChild(li);
  li.appendChild(span)
  const buttonRemove = document.getElementsByClassName('remove');
  [...buttonRemove].forEach((item, index) => item.addEventListener('click', function () {
    if (this.parentElement.parentNode) {
      ul.removeChild(this.parentElement)
      itemsArray.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(itemsArray));
    }

  }))
}


buttonAdd.addEventListener('click', function (e) {

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});




button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});