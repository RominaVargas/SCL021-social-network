import { registerEmailPassword } from '../firebase/auth.js';

const signUpView = () => {
  // contenedor de la vista completa
  const signUpViewContainer = document.createElement('div');
  signUpViewContainer.className = 'signUpViewContainer';
  const divForm = document.createElement('div');
  divForm.setAttribute('id', 'formContainer');
  divForm.className = 'formContainer';
  // contenedor del logo
  const logoContainerSignUp = document.createElement('div');
  logoContainerSignUp.className = 'logoContainerSignUp';
  const logoImagenSignUp = document.createElement('img');
  logoImagenSignUp.className = 'logoImagenSignUp';
  logoImagenSignUp.src = './images/tutipLogo.png';
  logoContainerSignUp.appendChild(logoImagenSignUp);
  // contenedor del form
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.classList.add('wrapperMedia');
  const modalForm = document.createElement('div');
  modalForm.className = 'modalForm';
  const buttonsContainer = document.createElement('div');
  // contenedor de botones superiores
  buttonsContainer.className = 'buttonsContainer';
  modalForm.appendChild(buttonsContainer);
  // boton superior para acceder a la vista de inicio de sesion
  const logInButtonLink = document.createElement('a');
  logInButtonLink.href = '#/logIn';
  logInButtonLink.className = 'buttonLink';
  const logInButton = document.createElement('button');
  logInButton.className = 'actionButton';
  logInButton.classList.add('logInButton');
  logInButton.innerText = 'Iniciar Sesión';
  logInButtonLink.appendChild(logInButton);
  buttonsContainer.appendChild(logInButtonLink);
  // boton superior registrarse
  const signUpButton = document.createElement('button');
  signUpButton.className = 'actionButton';
  signUpButton.innerText = 'Registrate';
  signUpButton.classList.add('signUpButton');
  buttonsContainer.appendChild(signUpButton);
  // boton que se mueve **es el de color lavanda**
  const moveButton = document.createElement('button');
  moveButton.className = 'moveButton';
  moveButton.classList.add('rightButton');
  moveButton.innerText = 'Registrate';
  buttonsContainer.appendChild(moveButton);
  // form que contiene los input para iniciar sesion
  const userForm = document.createElement('div');
  userForm.className = 'userForm';
  const form = document.createElement('form');
  form.className = 'form';
  const inputGroup = document.createElement('div');
  inputGroup.className = 'inputGroup';
  const nameUser = document.createElement('input');
  nameUser.setAttribute('type', 'name');
  nameUser.setAttribute('placeholder', 'Ingresa tu nombre');
  nameUser.setAttribute('id', 'name');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Correo');
  inputEmail.setAttribute('id', 'email');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.setAttribute('id', 'password');
  const passwordConfirm = document.createElement('input');
  passwordConfirm.setAttribute('type', 'password');
  passwordConfirm.setAttribute('placeholder', 'Confirma tu contraseña');
  passwordConfirm.setAttribute('id', 'confirmPassword');
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'submitButton');
  submitButton.setAttribute('value', 'Registrate');

  // boton para crear cuenta
  submitButton.className = 'submitButton';

  // cuando hacemos click en enviar se guarda la info de registro de usuario
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    registerEmailPassword(email, password, confirmPassword);
  });

  // apenchamos los elementos de la vista Sign Up para ordenar
  inputGroup.appendChild(nameUser);
  inputGroup.appendChild(inputEmail);
  inputGroup.appendChild(inputPassword);
  inputGroup.appendChild(passwordConfirm);
  form.appendChild(inputGroup);
  form.appendChild(submitButton);
  userForm.appendChild(form);

  const logInText = document.createElement('p');
  logInText.innerText = '¿Ya tienes cuenta?';
  const logInLink = document.createElement('a');
  logInLink.innerText = 'Ingresa aquí';
  logInLink.href = '#/logIn';
  logInText.appendChild(logInLink);

  // Se crea el footer
  const footer = document.createElement('p');
  footer.innerText = '©Copyright 2022';
  footer.className = 'footer';
  wrapper.appendChild(modalForm);
  wrapper.appendChild(footer);
  modalForm.appendChild(userForm);
  signUpViewContainer.appendChild(logoContainerSignUp);
  signUpViewContainer.appendChild(wrapper);

  // retorna el contenedor de toda la vista
  return signUpViewContainer;
};
export default signUpView;
