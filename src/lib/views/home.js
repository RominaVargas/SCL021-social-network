import { logOut } from '../firebase/auth.js';

const homeView = () => {
  // contenedor de la vista completa del muro
  const wallViewContainer = document.createElement('div');
  wallViewContainer.className = 'wallView';
  // logo tutip
  const logoImagen = document.createElement('img');
  logoImagen.className = 'logoImagen';
  logoImagen.src = './images/tutipLogo.png';
  wallViewContainer.appendChild(logoImagen);

  // barra de navegación de abajo.
  const navegationBar = document.createElement('nav');
  navegationBar.className = 'navegationBar';

  // Boton de casa
  const homeButtonLink = document.createElement('a');
  homeButtonLink.href = '#/'; // aqui no sé a qué dirige.
  const homeButton = document.createElement('img');
  homeButton.className = 'navegationButton';
  homeButton.src = './images/home.png';
  homeButtonLink.appendChild(homeButton);

  // Boton buscar posteos
  const searchButtonLink = document.createElement('a');
  searchButtonLink.href = '#/'; // aqui no sé a qué dirige.
  const searchButton = document.createElement('img');
  searchButton.className = 'navegationButton';
  searchButton.src = './images/search.png';
  searchButtonLink.appendChild(searchButton);

  // Boton crear post nuevo
  const addPostButtonLink = document.createElement('a');
  addPostButtonLink.href = '#/createPost'; // aqui no sé a qué dirige.
  const addPostButton = document.createElement('img');
  addPostButton.className = 'navegationButton';
  addPostButton.src = './images/add.png';
  addPostButtonLink.appendChild(addPostButton);

  // Revisar post guardados
  const savedPostButtonLink = document.createElement('a');
  savedPostButtonLink.href = '#/mySaved'; // aqui no sé a qué dirige.
  const savedPostButton = document.createElement('img');
  savedPostButton.className = 'navegationButton';
  savedPostButton.src = './images/sparkles.png';
  savedPostButtonLink.appendChild(savedPostButton);

  // Perfil de usuario
  const profileButtonLink = document.createElement('a');
  profileButtonLink.href = '#/myProfile'; // aqui no sé a qué dirige.
  const profileButton = document.createElement('img');
  profileButton.className = 'navegationButton';
  profileButton.src = './images/following.png';
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
  navegationBar.appendChild(savedPostButtonLink);
  navegationBar.appendChild(profileButtonLink);
  wallViewContainer.appendChild(navegationBar);

  logOutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    console.log('ejecutando logOut');
  });

  return wallViewContainer;
};

export default homeView;
