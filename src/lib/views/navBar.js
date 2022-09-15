const navBar = () => {
  // barra de navegación de abajo.
  const navegationBarDiv = document.createElement('div');
  navegationBarDiv.className = 'navegationBarDiv';
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
  addPostButtonLink.href = '#/createPost';
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

  navegationBar.appendChild(homeButtonLink);
  navegationBar.appendChild(searchButtonLink);
  navegationBar.appendChild(addPostButtonLink);
  navegationBar.appendChild(savedPostButtonLink);
  navegationBar.appendChild(profileButtonLink);
  navegationBarDiv.appendChild(navegationBar);
  return navegationBarDiv;
};

export default navBar;
