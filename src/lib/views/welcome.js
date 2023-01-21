// div padre de todo contiene imagen
const welcomeView = () => {
  const welcomeViewContainer = document.createElement('div');
  welcomeViewContainer.className = 'welcomeviewContainer';
  const welcomeLogoContainer = document.createElement('div');
  welcomeLogoContainer.className = 'welcomeLogoContainer';
  const welcomeLogoImagen = document.createElement('img');
  welcomeLogoImagen.className = 'welcomeLogoImagen';
  welcomeLogoImagen.src = './images/tutipWithSubtitle.png';
  welcomeLogoContainer.appendChild(welcomeLogoImagen);
  // contenedor boton iniciar sesion
  const welcomeLoginButtonContainer = document.createElement('div');
  welcomeLoginButtonContainer.className = 'welcomeLoginButtonContainer';
  const welcomeLoginButton = document.createElement('button');
  welcomeLoginButton.className = 'welcomeLoginButton';
  const logInLink = document.createElement('a');
  logInLink.href = '#/logIn';
  logInLink.className = 'logInLink';
  welcomeLoginButton.innerText = 'Iniciar sesión';
  logInLink.appendChild(welcomeLoginButton);
  // p para registrarse con link bajo el boton
  const signUpText = document.createElement('p');
  signUpText.innerText = '¿No tienes cuenta? ';
  signUpText.className = 'signUpText';
  const signUpLink = document.createElement('a');
  signUpLink.className = 'signUpLink';
  signUpLink.innerText = ' Registrate aquí';
  signUpLink.href = '#/signUp';
  signUpText.appendChild(signUpLink);
  // apenchacion
  welcomeLoginButtonContainer.appendChild(logInLink);
  welcomeLoginButtonContainer.appendChild(signUpText);
  welcomeViewContainer.appendChild(welcomeLogoContainer);
  welcomeViewContainer.appendChild(welcomeLoginButtonContainer);
  // footer
  const footer = document.createElement('p');
  footer.innerText = '©Copyright 2022 Creada por Cami F. Fran R. y Romi V.';
  footer.className = 'footer';
  welcomeViewContainer.appendChild(footer);

  return welcomeViewContainer;
};

export default welcomeView;
