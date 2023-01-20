import navBar from './navBar.js';

const error404 = () => {
  const errorViewContainer = document.createElement('div');
  errorViewContainer.className = 'errorViewContainer';
  const errorContainer = document.createElement('div');
  errorContainer.className = 'errorContainer';
  const errorMessageContainer = document.createElement('div');
  errorMessageContainer.className = 'errorMessageContainer';
  const errorTitle = document.createElement('h1');
  errorTitle.className = 'errorTitle';
  errorTitle.innerText = 'Ups!';
  const errorText = document.createElement('p');
  errorText.innerText = 'aqui no hay nada aún';
  errorText.className = 'errorText';
  const errorImage = document.createElement('img');
  errorImage.src = './images/bombillaTriste.png';
  errorImage.className = 'errorImage';

  errorMessageContainer.appendChild(errorImage);
  errorContainer.appendChild(errorTitle);
  errorContainer.appendChild(errorText);
  errorMessageContainer.appendChild(errorContainer);
  errorViewContainer.appendChild(errorMessageContainer);
  errorViewContainer.appendChild(navBar());
  return errorViewContainer;
};

export default error404;
