import navBar from './navBar.js';

const error404 = () => {
  const errorViewContainer = document.createElement('div');
  const errorText = document.createElement('p');
  errorText.innerText = 'Ups aqui no hay nada aún';

  errorViewContainer.appendChild(errorText);
  errorViewContainer.appendChild(navBar());
  return errorViewContainer;
};

export default error404;
