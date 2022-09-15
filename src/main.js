// Este es el punto de entrada de tu aplicacion
import { observator } from './lib/firebase/auth.js';
import welcomeView from './lib/views/welcome.js';
import { changeRoute } from './lib/router/router.js';
// import logInView from './lib/views/logIn.js';
// import { myFunction } from './lib/index.js';

// myFunction();
// console.log(welcomeView);
const init = () => {
  // window.location.href = 'http://localhost:3000/#/';
  const root = document.getElementById('root');
  root.appendChild(welcomeView());
  window.addEventListener('hashchange', () => {
    // console.log('hash', window.location.hash);
    root.innerHTML = '';
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);

observator();
