import { logOut } from '../firebase/auth.js';

const homeView = () => {
  // contenedor de la vista completa del muro
  const wallViewContainer = document.createElement('div');
  wallViewContainer.className = 'wallView';

  // barra de navegación de abajo.

  const navegationBar = document.createElement('div');
  navegationBar.className = 'navegationBar';

  // Boton de casa
  const homeButtonLink = document.createElement('a');
  homeButtonLink.href = '#/';
  homeButtonLink.className = 'homeButton';
  const homeButton = document.createElement('button');
  homeButton.innerText = 'home';
  homeButtonLink.appendChild(homeButton);

  // Boton buscar posteos
  const searchButtonLink = document.createElement('a');
  searchButtonLink.href = '#/'; // aqui no sé a qué dirige.
  searchButtonLink.className = 'searchButton';
  const searchButton = document.createElement('button');
  searchButton.innerText = '';
  searchButtonLink.appendChild(searchButton);

  // Boton crear post nuevo
  const addPostButtonLink = document.createElement('a');
  addPostButtonLink.href = '#/createPost'; // aqui no sé a qué dirige.
  addPostButtonLink.className = 'addPostButton';
  const addPostButton = document.createElement('button');
  addPostButton.innerText = '';
  addPostButtonLink.appendChild(addPostButton);

  // Revisar post guardados
  const savedPostButtonLink = document.createElement('a');
  savedPostButtonLink.href = '#/mySaved'; // aqui no sé a qué dirige.
  savedPostButtonLink.className = 'savedPostButton';
  const savedPostButton = document.createElement('button');
  savedPostButton.innerText = '';
  savedPostButtonLink.appendChild(savedPostButton);

  // Perfil de usuario
  const profileButtonLink = document.createElement('a');
  profileButtonLink.href = '#/myProfile'; // aqui no sé a qué dirige.
  profileButtonLink.className = 'profileButton';
  const profileButton = document.createElement('button');
  profileButton.innerText = '';
  profileButtonLink.appendChild(profileButton);

  // Boton Cerrar de sesion
  const logOutButtonLink = document.createElement('a');
  logOutButtonLink.href = '/#';
  const logOutButton = document.createElement('button');
  logOutButton.className = 'logOutButton';
  logOutButton.innerText = 'Cerrar sesión';
  logOutButton.setAttribute('id', 'logOutButton');
  logOutButton.setAttribute('type', 'click');
  logOutButtonLink.appendChild(logOutButton);
  wallViewContainer.appendChild(logOutButton);

  navegationBar.appendChild(homeButtonLink);
  navegationBar.appendChild(searchButtonLink);
  navegationBar.appendChild(addPostButtonLink);
  navegationBar.appendChild(profileButtonLink);
  wallViewContainer.appendChild(navegationBar);

  logOutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });

  return wallViewContainer;
};

export default homeView;
