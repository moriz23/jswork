const addMovieModel = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const startAddMovieBtn = document.querySelector('header button');
const cancelAddMovieBtn = addMovieModel.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = document.querySelectorAll('input');
const section = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
};

const cancelMovieDeleteModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  cancelMovieDeleteModal();
  updateUI();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeleteBtn = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeleteBtn = cancelDeleteBtn.nextElementSibling;
  confirmDeleteBtn.replaceWith(confirmDeleteBtn.cloneNode(true));
  confirmDeleteBtn = cancelDeleteBtn.nextElementSibling;
  cancelDeleteBtn.removeEventListener('click', cancelMovieDeleteModal);
  cancelDeleteBtn.addEventListener('click', cancelMovieDeleteModal);
  confirmDeleteBtn.addEventListener('click', deleteMovie.bind(null, movieId));
};

const renderMovie = (id, title, image, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class='movie-element__image'>
      <img src='${image}' alt='${title}'>)
    </div>
    <div class='movie-element__info'>
      <p>${title}</p>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
  updateUI();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModel.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModel.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const cancelMoveModalHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieModelHandler = () => {
  let title = userInputs[0].value;
  let image_url = userInputs[1].value;
  let rating = userInputs[2].value;

  if (title.trim() === '' || image_url === '' || +rating > 5 || +rating < 1) {
    alert('Please enter valid values');
    return;
  }

  const newMovie = {
    id: Math.random.toString(),
    title: title,
    image: image_url,
    rating: rating,
  };

  movies.push(newMovie);
  clearMovieInput();
  closeMovieModal();
  toggleBackdrop();
  renderMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
};

const backDropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeleteModal();
  clearMovieInput();
};

startAddMovieBtn.addEventListener('click', showMovieModal);
cancelAddMovieBtn.addEventListener('click', cancelMoveModalHandler);
confirmAddMovieBtn.addEventListener('click', addMovieModelHandler);
backdrop.addEventListener('click', backDropClickHandler);
