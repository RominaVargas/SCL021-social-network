import welcomeView from '../views/welcome.js';
import logInView from '../views/logIn.js';
import signUpView from '../views/signUp.js';
import error404 from '../views/error404.js';
import homeView from '../views/home.js';
import createPostView from '../views/createPost.js';
import editPostView from '../views/editPost.js';
import { toggleVissibility } from '../components/buttons.js';
import { printPost, editPost } from '../firebase/auth.js';

// arriba se importan todos las vistas o funciones entre corchetes.

// Se conecta al div ROOT creado en el HTML donde se cargan todas las vistas
// con el Switch se da la ruta a que vista quiero ir.
export const changeRoute = (hash) => {
  const root = document.getElementById('root');
  switch (hash) {
    case '#/':
      root.appendChild(welcomeView());
      break;
    case '#/logIn':
      root.appendChild(logInView());
      toggleVissibility();
      break;
    case '#/signUp':
      root.appendChild(signUpView());
      break;
    case '#/home':
      root.appendChild(homeView());
      printPost();
      break;
    case '#/createPost':
      root.appendChild(createPostView());
      // editPost();
      break;
    case '#/editPost':
      root.appendChild(editPostView());
      // editPost();
      break;
    default:
      root.appendChild(error404());
  }
};
