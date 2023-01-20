import { logOut } from '../firebase/auth.js';
import navBar from './navBar.js';
import editPostView from './editPost.js';

const homeView = () => {
  // contenedor de la vista completa del muro
  const wallViewContainer = document.createElement('div');
  wallViewContainer.className = 'wallView';
  // Contenedor header
  const headerHomeView = document.createElement('div');
  headerHomeView.className = 'headerHomeView';
  // logo tutip
  const logoImagen = document.createElement('img');
  logoImagen.className = 'logoImagenHome';
  logoImagen.setAttribute ('id', 'logoImagenHome');
  logoImagen.src = './images/tutipLogo.png';
  /* wallViewContainer.appendChild(logoImagen); */
  // Boton Cerrar de sesion
  const logOutButtonLink = document.createElement('a');
  logOutButtonLink.href = '/#';
  const logOutButton = document.createElement('img');
  logOutButton.className = 'logOutButton';
  logOutButton.src = './images/power128.png';
  logOutButton.setAttribute('id', 'logOutButton');
  logOutButton.setAttribute('type', 'click');
  logOutButtonLink.appendChild(logOutButton);

  headerHomeView.appendChild(logoImagen);
  headerHomeView.appendChild(logOutButton);

  wallViewContainer.appendChild(headerHomeView);
  wallViewContainer.appendChild(editPostView());

  const postContainer = document.createElement('div');
  postContainer.setAttribute('id', 'postContainer');
  wallViewContainer.appendChild(postContainer);
  wallViewContainer.appendChild(navBar());
 

  logOutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
    console.log('ejecutando logOut');
  });
  if (window.matchMedia("(min-width: 991px)").matches) {

    logoImagen.style.display = 'none';
    logOutButton.style.display = 'none';}

  return wallViewContainer;
};

export default homeView;
