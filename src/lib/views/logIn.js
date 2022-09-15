import {
  logInWithGoogle,
  logInWithEmailAndPassword,
} from '../firebase/auth.js';
// import { toggleVissibility } from '../components/buttons.js';
// console.log('login');

// esta es la pantalla para iniciar sesion
const logInView = () => {
  // contenedor de la vista completa
  const logInViewContainer = document.createElement('div');
  logInViewContainer.className = 'logInViewContainer';

  const divForm = document.createElement('div');
  divForm.setAttribute('id', 'formContainer');
  divForm.className = 'formContainer';
  // contenedor del logo
  const logoContainer = document.createElement('div');
  logoContainer.className = 'logoContainer';
  const logoImagen = document.createElement('img');
  logoImagen.className = 'logoImagen';
  logoImagen.src = './images/tutipLogo.png';
  logoContainer.appendChild(logoImagen);
  // contenedor del form
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const modalForm = document.createElement('div');
  modalForm.className = 'modalForm';
  // contenedor de botones superiores
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttonsContainer';
  modalForm.appendChild(buttonsContainer);
  // boton superior inicio sesion
  const logInButton = document.createElement('button');
  logInButton.className = 'actionButton';
  logInButton.classList.add('logInButton');
  logInButton.innerText = 'Iniciar Sesión';
  buttonsContainer.appendChild(logInButton);
  // boton superior para acceder a vista de registro
  const signUpButtonLink = document.createElement('a');
  signUpButtonLink.href = '#/signUp';
  signUpButtonLink.className = 'buttonLink';
  const signUpButton = document.createElement('button');
  signUpButton.className = 'actionButton';
  signUpButton.innerText = 'Registrate';
  signUpButton.classList.add('signUpButton');
  signUpButtonLink.appendChild(signUpButton);
  buttonsContainer.appendChild(signUpButtonLink);
  // boton que se mueve **es el de color lavanda**
  const moveButton = document.createElement('button');
  moveButton.className = 'moveButton';
  moveButton.innerText = 'Iniciar Sesión';
  buttonsContainer.appendChild(moveButton);
  // form que contiene los input para iniciar sesion
  const userForm = document.createElement('div');
  userForm.className = 'userForm';
  const form = document.createElement('form');
  form.className = 'form';
  const inputGroup = document.createElement('div');
  inputGroup.className = 'inputGroup';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'email2');
  inputEmail.setAttribute('placeholder', 'Correo');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.setAttribute('id', 'password2');

  // span que contiene ojito para mostar y ocultar contraseña
  const eyeContainer = document.createElement('span');
  eyeContainer.className = 'eyeContainer';
  eyeContainer.setAttribute('id', 'eyeContainer');
  const closedEye = document.createElement('img');
  closedEye.src = './images/closeEye.png';
  const openEye = document.createElement('img');
  openEye.src = './images/openEye.png';
  closedEye.setAttribute('id', 'closedEye');
  openEye.setAttribute('id', 'openEye');
  eyeContainer.appendChild(openEye);
  eyeContainer.appendChild(closedEye);
  inputGroup.appendChild(eyeContainer);
  // toggleVissibility();
  //   let inputPassword = document.getElementById('hiddenPassword');
  //   if (inputPassword.type === "password") {
  //     inputPassword.type = "text";
  //   } else {
  //     inputPassword.type = "password";
  //   }
  // };

  const inputErrors = document.createElement('p');
  inputErrors.innerText = '';
  inputErrors.setAttribute('id', 'inputErrors');
  modalForm.appendChild(inputErrors);

  // boton para iniciar sesion
  const submitButton = document.createElement('button');
  submitButton.className = 'submitButton';
  submitButton.innerText = 'Iniciar Sesión';

  // info para iniciar sesion
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email2').value;
    console.log({ email });
    const password = document.getElementById('password2').value;
    logInWithEmailAndPassword(email, password);
  });

  inputGroup.appendChild(inputEmail);
  inputGroup.appendChild(inputPassword);
  form.appendChild(inputGroup);
  form.appendChild(submitButton);
  userForm.appendChild(form);

  // boton inicio sesion google
  const googleContainer = document.createElement('div');
  googleContainer.className = 'googleContainer';
  const googleLogo = document.createElement('div');
  googleLogo.className = 'googleLogo';
  googleLogo.classList.add('totalButton');
  const googleImage = document.createElement('img');
  googleImage.src = './images/google.png';
  googleImage.className = 'googleImage';

  const googleButton = document.createElement('button');
  googleButton.className = 'googleButton';
  googleButton.innerText = 'Continúa con Google';
  googleButton.classList.add('totalButton');
  googleLogo.appendChild(googleImage);
  googleContainer.appendChild(googleLogo);
  googleContainer.appendChild(googleButton);
  // buttonsContainer.appendChild(googleContainer);
  // buttonsContainer.appendChild(googleButton);

  // inicio de sesion google
  googleButton.addEventListener('click', logInWithGoogle);

  const signUpText = document.createElement('p');
  signUpText.innerText = '¿No tienes cuenta?';
  const signUpLink = document.createElement('a');
  signUpLink.innerText = 'Registrate aquí';
  signUpLink.href = '#/signUp';
  signUpText.appendChild(signUpLink);

  // boton home
  const homeButtonLink = document.createElement('a');
  homeButtonLink.href = '#/';
  homeButtonLink.className = 'buttonLink';
  const homeButton = document.createElement('button');
  homeButton.className = 'homeButton';
  homeButton.innerText = 'home';
  homeButtonLink.appendChild(homeButton);

  const footer = document.createElement('p');
  footer.innerText = '©Copyright 2022';
  footer.className = 'footer';
  wrapper.appendChild(modalForm);
  wrapper.appendChild(googleContainer);
  wrapper.appendChild(homeButtonLink);
  modalForm.appendChild(userForm);
  logInViewContainer.appendChild(logoContainer);
  logInViewContainer.appendChild(wrapper);
  logInViewContainer.appendChild(footer);

  return logInViewContainer;
};

export default logInView;
