import { logOut } from '../firebase/auth.js';
import navBar from './navBar.js';

const homeView = () => {
  // contenedor de la vista completa del muro
  const wallViewContainer = document.createElement('div');
  wallViewContainer.className = 'wallView';
  // logo tutip
  const logoImagen = document.createElement('img');
  logoImagen.className = 'logoImagenHome';
  logoImagen.src = './images/tutipLogo.png';
  wallViewContainer.appendChild(logoImagen);

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

  const postContainer = document.createElement('div');
  postContainer.setAttribute('id', 'postContainer');
  /* const titlePostContainer = document.createElement('h2');
  titlePostContainer.setAttribute('id', 'titlePostContainer');
  titlePostContainer.innerText = '';
  const textPostContainer = document.createElement('div');
  textPostContainer.setAttribute('id', 'textPostContainer');
  textPostContainer.innerText = ''; */
  wallViewContainer.appendChild(postContainer);

  wallViewContainer.appendChild(navBar());

  logOutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    console.log('ejecutando logOut');
  });

  return wallViewContainer;
};

export default homeView;
