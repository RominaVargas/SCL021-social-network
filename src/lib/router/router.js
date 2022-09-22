import welcomeView from '../views/welcome.js';
import logInView from '../views/logIn.js';
import signUpView from '../views/signUp.js';
import error404 from '../views/error404.js';
import homeView from '../views/home.js';
import createPostView from '../views/createPost.js';
import { toggleVissibility } from '../components/buttons.js';
import { printPost, deletePost } from '../firebase/auth.js';

// import toggleButton from '../components/buttons.js';

// history push es api jeje  :O
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
      // closeSession();
      break;
    case '#/createPost':
      root.appendChild(createPostView());
      // deletePost();
      break;
    default:
      // console.log('404');
      root.appendChild(error404());
  }
};
