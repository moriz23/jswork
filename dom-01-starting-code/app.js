const section = document.querySelector('section');
const button = document.querySelector('button');

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
});
