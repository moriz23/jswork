let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement('div');
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener('scroll', scrollHandler);

const button = document.querySelector('button');
const div = document.querySelector('div');

div.addEventListener('click', (event) => {
  console.log('Clickd Div');
  console.log(event);
});

button.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Clickd Button');
  console.log(event);
});

const list = document.querySelector('ul');
const listItem = document.querySelector('li');

list.addEventListener('click', (event) => {
  event.target.closest('li').classList.toggle('highlight');
});
