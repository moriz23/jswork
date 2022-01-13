// let userChosenKeyName = 'level';

// const person = {
//   name: 'Mohammed Rizvi',
//   age: 30,
//   hobbies: ['Sports', 'Coding'],
//   'valid key name': 'value',
//   1.3: 'hello',
//   [userChosenKeyName]: 1,
//   greet: () => {
//     alert('Hi There');
//   },
// };

// person.isAdmin = true;
// delete person.age;
// console.log(person);
// console.log(person['valid key name']);
// console.log(person[1.3]);

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
// const movieList = document.getElementById('movie-list');
const userInputs = document.querySelectorAll('input');
const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => {
        return movie.info.title.includes(filter);
      });

  filteredMovies.forEach((movie, index, movies) => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title' && key !== 'id') {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue === '') {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
      id: Math.random(),
    },
  };

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  console.log(filterTerm);
  renderMovies(filterTerm);
};

// const addedMovieHandler = (title, extraName, extraValue) => {
//   const li = document.createElement('li');
//   li.innerHTML = `
//     <h3>${title}</h3>
//     <p>${extraName}</p>
//     <p>${extraValue}</p>
//   `;
//   movieList.append(li);
//   movieList.style.display = 'block';
// };

// const clearMovieInput = () => {
//   for (const userInput of userInputs) {
//     userInput.value = '';
//   }
// };

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
