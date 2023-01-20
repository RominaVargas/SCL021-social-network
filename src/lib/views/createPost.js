import { createNewPost, printPost, editPost } from '../firebase/auth.js';
// Gran contenedor con la funcion de crear posts. Es dinamico.
// Pagina sin implementar
const createPostView = () => {
  const createPostViewContainer = document.createElement('div');
  createPostViewContainer.className = 'createPostView';

  // Esto son los botones retroceder y cerrar al crear un nuevo TIP.
  const createPostViewHeader = document.createElement('div');
  createPostViewHeader.className = 'createPostViewHeader';
  const createPostViewTitle = document.createElement('h2');
  createPostViewTitle.className = 'createPostViewTitle';
  createPostViewTitle.innerText = 'Nuevo Tip';
  const backButtonLink = document.createElement('a');
  backButtonLink.className = 'backButton';
  backButtonLink.href = '#/home';
  const backButton = document.createElement('img');
  backButton.src = './images/back.png';
  backButton.className = 'backButton';
  backButtonLink.appendChild(backButton);

  // Div que contiene las categorias para asignarle al post
  const postClassContainer = document.createElement('div');
  postClassContainer.className = 'postClassContainer';
  const discountsClass = document.createElement('div');
  discountsClass.innerText = 'Descuentos';
  discountsClass.className = 'discountsClass';
  const discountClassImage = document.createElement('img');
  discountClassImage.src = './images/discount.png';
  discountClassImage.className = 'categoriesImages';
  const placesClass = document.createElement('placesClass');
  placesClass.innerText = 'Lugares';
  placesClass.className = 'placesClass';
  const placesClassImage = document.createElement('img');
  placesClassImage.src = './images/place.png';
  placesClassImage.className = 'categoriesImages';
  const foodClass = document.createElement('div');
  foodClass.innerText = 'Restaurantes';
  foodClass.className = 'foodClass';
  const foodClassImage = document.createElement('img');
  foodClassImage.src = './images/comer.png';
  foodClassImage.className = 'categoriesImages';
  const lifeHacksClass = document.createElement('div');
  lifeHacksClass.innerText = 'Life Hacks';
  lifeHacksClass.className = 'lifeHacksClass';
  const lifeHacksClassImage = document.createElement('img');
  lifeHacksClassImage.src = './images/bombilla.png';
  lifeHacksClassImage.className = 'categoriesImages';
  const eventsClass = document.createElement('div');
  eventsClass.innerText = 'Eventos';
  eventsClass.className = 'eventsClass';
  const eventsClassImage = document.createElement('img');
  eventsClassImage.src = './images/calendario.png';
  eventsClassImage.className = 'categoriesImages';
  const picadasClass = document.createElement('div');
  picadasClass.innerText = 'Picadas';
  picadasClass.className = 'picadasClass';
  const picadasClassImage = document.createElement('img');
  picadasClassImage.src = './images/picada.png';
  picadasClassImage.className = 'categoriesImages';

  // se appenchean los iconos de categorias al div contenedor
  discountsClass.appendChild(discountClassImage);
  placesClass.appendChild(placesClassImage);
  foodClass.appendChild(foodClassImage);
  lifeHacksClass.appendChild(lifeHacksClassImage);
  eventsClass.appendChild(eventsClassImage);
  picadasClass.appendChild(picadasClassImage);
  postClassContainer.appendChild(discountsClass);
  postClassContainer.appendChild(placesClass);
  postClassContainer.appendChild(foodClass);
  postClassContainer.appendChild(lifeHacksClass);
  postClassContainer.appendChild(eventsClass);
  postClassContainer.appendChild(picadasClass);

  // Parten los contenedores de imput para escribir tips
  const newPostFormContainer = document.createElement('div');
  newPostFormContainer.className = 'newPostFormContainer';
  const formContainer = document.createElement('form');
  formContainer.className = 'formContainer';

  // aquí parte el area de escritura de tip
  const titlePost = document.createElement('input');
  titlePost.setAttribute('placeholder', 'Título del Tip');
  titlePost.setAttribute('id', 'titlePost');
  const postArea = document.createElement('textArea');
  postArea.className = 'postArea';
  postArea.setAttribute('id', 'postArea');
  postArea.setAttribute('placeholder', 'Cuentanos tutip :)');
  const placePost = document.createElement('input');
  placePost.setAttribute('placeholder', '¿Dónde?');
  placePost.setAttribute('id', 'placePost');

  // boton para publicar el tip
  const newPostButton = document.createElement('button');
  newPostButton.setAttribute('id', 'newPostButton');
  newPostButton.innerText = 'Subir Post';

  /* const editPostButton = document.getElementById('newPostButton');
    console.log('que es:' + editPostButton);
    editPost(editPostButton); */

  // se apenchea todo
  newPostFormContainer.appendChild(formContainer);
  formContainer.appendChild(titlePost);
  formContainer.appendChild(postArea);
  formContainer.appendChild(placePost);
  formContainer.appendChild(newPostButton);

  createPostViewHeader.appendChild(backButtonLink);
  createPostViewHeader.appendChild(createPostViewTitle);
  createPostViewContainer.appendChild(createPostViewHeader);
  createPostViewContainer.appendChild(postClassContainer);
  createPostViewContainer.appendChild(newPostFormContainer);

  // al hacer clic para publicar un tip, los imputs guardan sus valores en coleccion firebase
  newPostButton.addEventListener('click', (e) => {
    e.preventDefault();
    const titleValue = document.getElementById('titlePost').value;
    const postValue = document.getElementById('postArea').value;
    const placeValue = document.getElementById('placePost').value;
    createNewPost(titleValue, postValue, placeValue);
    // editPost();
    /* printPost(); */
    console.log('post creado');
  });

  return createPostViewContainer;
};

export default createPostView;
