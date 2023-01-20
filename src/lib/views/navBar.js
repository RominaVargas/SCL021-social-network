import { logOut } from '../firebase/auth.js';

const navBar = () => {
  // barra de navegación de abajo.
  /* const navegationBarDiv = document.createElement('div');
navegationBarDiv.className = 'navegationBarDiv'; */
  const navegationBar = document.createElement('nav');
  navegationBar.setAttribute('id', 'navegationBar');
  navegationBar.className = 'navegationBar';

  // Boton de casa
  const homeButtonLink = document.createElement('a');
  homeButtonLink.href = '#/home'; // aqui no sé a qué dirige.
  homeButtonLink.className = 'navIcon';
  const homeButton = document.createElement('img');
  homeButton.className = 'navegationButton';
  homeButton.src = './images/home.png';
  homeButtonLink.appendChild(homeButton);

  // Boton buscar posteos
  const searchButtonLink = document.createElement('a');
  searchButtonLink.href = '#/error404'; // aqui no sé a qué dirige.
  searchButtonLink.className = 'navIcon';
  const searchButton = document.createElement('img');
  searchButton.className = 'navegationButton';
  searchButton.src = './images/search.png';
  searchButtonLink.appendChild(searchButton);

  // Boton crear post nuevo
  const addPostButtonLink = document.createElement('a');
  addPostButtonLink.href = '#/createPost';
  addPostButtonLink.className = 'navIcon';
  const addPostButton = document.createElement('img');
  addPostButton.className = 'navegationButton';
  addPostButton.src = './images/add.png';
  addPostButtonLink.appendChild(addPostButton);

  // Revisar post guardados
  const savedPostButtonLink = document.createElement('a');
  savedPostButtonLink.href = '#/error404'; // aqui no sé a qué dirige.
  savedPostButtonLink.className = 'navIcon';
  const savedPostButton = document.createElement('img');
  savedPostButton.className = 'navegationButton';
  savedPostButton.src = './images/sparkles.png';
  savedPostButtonLink.appendChild(savedPostButton);

  // Perfil de usuario
  const profileButtonLink = document.createElement('a');
  profileButtonLink.href = '#/error404'; // aqui no sé a qué dirige.
  profileButtonLink.className = 'navIcon';
  const profileButton = document.createElement('img');
  profileButton.className = 'navegationButton';
  profileButton.src = './images/following.png';
  profileButtonLink.appendChild(profileButton);

  navegationBar.appendChild(homeButtonLink);
  navegationBar.appendChild(searchButtonLink);
  navegationBar.appendChild(addPostButtonLink);
  navegationBar.appendChild(savedPostButtonLink);
  navegationBar.appendChild(profileButtonLink);

  /* navegationBarDiv.appendChild(navegationBar); */

  if (window.matchMedia('(min-width: 991px)').matches) {
    const divIconNav = document.createElement('div');
    divIconNav.class = 'divIconNav';
    const logoImagenNav = document.createElement('img');
    logoImagenNav.className = 'logoImagenNav';
    logoImagenNav.setAttribute('id', 'logoImagenNav');
    logoImagenNav.src = './images/tutipLogo.png';
    /* wallViewContainer.appendChild(logoImagen); */
    // Boton Cerrar de sesion
    const logOutButtonLinkNav = document.createElement('a');
    logOutButtonLinkNav.href = '/#';
    logOutButtonLinkNav.class = 'logOutButtonLinkNav';
    const logOutButtonNav = document.createElement('img');
    logOutButtonNav.className = 'logOutButtonNav';
    logOutButtonNav.src = './images/power128.png';
    logOutButtonNav.setAttribute('id', 'logOutButtonNav');
    logOutButtonNav.setAttribute('type', 'click');
    logOutButtonLinkNav.appendChild(logOutButtonNav);

    logOutButtonNav.addEventListener('click', (e) => {
      e.preventDefault();
      logOut();
      console.log('ejecutando logOut desde Nav');
    });

    const homeButtonText = document.createElement('p');
    homeButtonText.innerText = 'Home';
    homeButtonText.className = 'iconButtonText';
    const searchButtonText = document.createElement('p');
    searchButtonText.innerText = 'Buscar';
    searchButtonText.className = 'iconButtonText';
    const newPostButtonText = document.createElement('p');
    newPostButtonText.innerText = 'Nuevo Tip';
    newPostButtonText.className = 'iconButtonText';
    const savedButtonText = document.createElement('p');
    savedButtonText.innerText = 'Favoritos';
    savedButtonText.className = 'iconButtonText';
    const porfileButtonText = document.createElement('p');
    porfileButtonText.innerText = 'Perfil';
    porfileButtonText.className = 'iconButtonText';

    navegationBar.appendChild(logoImagenNav);
    homeButtonLink.appendChild(homeButtonText);
    searchButtonLink.appendChild(searchButtonText);
    addPostButtonLink.appendChild(newPostButtonText);
    savedPostButtonLink.appendChild(savedButtonText);
    profileButtonLink.appendChild(porfileButtonText);
    divIconNav.appendChild(homeButtonLink);
    divIconNav.appendChild(searchButtonLink);
    divIconNav.appendChild(addPostButtonLink);
    divIconNav.appendChild(savedPostButtonLink);
    divIconNav.appendChild(profileButtonLink);
    navegationBar.appendChild(logOutButtonLinkNav);
    navegationBar.appendChild(divIconNav);
  }
  navegationBar.appendChild(homeButtonLink);
  navegationBar.appendChild(searchButtonLink);
  navegationBar.appendChild(addPostButtonLink);
  navegationBar.appendChild(savedPostButtonLink);
  navegationBar.appendChild(profileButtonLink);

  return navegationBar;
};

export default navBar;
