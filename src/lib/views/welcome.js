const welcomeView = () => {
  const welcomeViewContainer = document.createElement('div');
  welcomeViewContainer.className = 'welcomeviewContainer';
  const welcomeLogoContainer = document.createElement('div');
  welcomeLogoContainer.className = 'welcomeLogoContainer';
  const welcomeLogoImagen = document.createElement('img');
  welcomeLogoImagen.className = 'welcomeLogoImagen';
  welcomeLogoImagen.src = './images/tutipWithSubtitle.png';
  welcomeLogoContainer.appendChild(welcomeLogoImagen);

  const welcomeLoginButtonContainer = document.createElement('div');
  const welcomeLoginButton = document.createElement('button');
  welcomeLoginButton.className = 'welcomeLoginButton';
  const logInLink = document.createElement('a');
  logInLink.href = '#/logIn';
  logInLink.className = 'logInLink';
  welcomeLoginButton.innerText = 'Iniciar sesión';
  logInLink.appendChild(welcomeLoginButton);

  const signUpText = document.createElement('p');
  signUpText.innerText = '¿No tienes cuenta? ';
  const signUpLink = document.createElement('a');
  signUpLink.innerText = ' Registrate aquí';
  signUpLink.href = '#/signUp';
  signUpText.appendChild(signUpLink);

  // NO OLVIDAR QUITAR ESTE BOTON!
  const homeButtonLink = document.createElement('a');
  homeButtonLink.href = '#/';
  homeButtonLink.className = 'buttonLink';
  const homeButton = document.createElement('button');
  homeButton.className = 'homeButton';
  homeButton.innerText = 'home';
  homeButtonLink.appendChild(homeButton);

  welcomeLoginButtonContainer.appendChild(logInLink);
  welcomeLoginButtonContainer.appendChild(signUpText);
  welcomeViewContainer.appendChild(welcomeLogoContainer);
  welcomeViewContainer.appendChild(welcomeLoginButtonContainer);
  welcomeViewContainer.appendChild(homeButtonLink);

  const footer = document.createElement('p');
  footer.innerText = '©Copyright 2022';
  footer.className = 'footer';
  welcomeViewContainer.appendChild(footer);

  return welcomeViewContainer;
};

export default welcomeView;
