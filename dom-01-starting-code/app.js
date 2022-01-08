const section = document.querySelector('section');
const button = document.querySelector('button');
const div = document.querySelector('div');
const list = document.querySelector('ul');

const newLi = document.createElement('li');
list.append(newLi);
newLi.textContent = 'Item 4';

const newerLi = document.createElement('li');
const listItem2 = list.children[1];
newerLi.textContent = 'Item 2.1';
listItem2.insertAdjacentElement('afterend', newerLi);

const newUl = list.cloneNode(true);

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.classList.remove('red-bg');
  //   section.classList.remove('visible');
  //   section.classList.add('blue-bg');
  // } else {
  //   section.classList.remove('blue-bg');
  //   section.classList.add('red-bg');
  //   section.classList.add('visible');
  // }

  section.classList.toggle('invisible');
  div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>');
});
