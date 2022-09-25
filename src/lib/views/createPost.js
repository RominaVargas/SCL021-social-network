import { createNewPost, printPost, editPost } from '../firebase/auth.js';
const createPostView = () => {
  const createPostViewContainer = document.createElement('div');
  createPostViewContainer.className = 'createPostView';
  const postArea = document.createElement('textArea');
  const newPostFormContainer = document.createElement('div');
  newPostFormContainer.className = 'newPostFormContainer';
  postArea.className = 'postArea';
  postArea.setAttribute('id', 'postArea');
  postArea.setAttribute('placeholder', 'Cuentanos tutip :)');

    const createPostViewContainer = document.createElement('div');
    createPostViewContainer.className = 'createPostView';
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
    const postArea = document.createElement('textArea');
    const newPostFormContainer = document.createElement('div');
    newPostFormContainer.className = 'newPostFormContainer';
    postArea.className = 'postArea';
    postArea.setAttribute('id', 'postArea');
    postArea.setAttribute('placeholder', 'Cuentanos tutip :)');
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


  const placePost = document.createElement('input');
  placePost.setAttribute('placeholder', '¿Dónde?');
  placePost.setAttribute('id', 'placePost');

  const newPostButton = document.createElement('button');
  newPostButton.setAttribute('id', 'newPostButton');
  newPostButton.innerText = 'Subir Post';

  newPostFormContainer.appendChild(formContainer);
  formContainer.appendChild(titlePost);
  formContainer.appendChild(postArea);
  formContainer.appendChild(placePost);
  formContainer.appendChild(newPostButton);

  createPostViewContainer.appendChild(newPostFormContainer);

    createPostViewHeader.appendChild(backButtonLink);
    createPostViewHeader.appendChild(createPostViewTitle);
    createPostViewContainer.appendChild(createPostViewHeader);
    createPostViewContainer.appendChild(postClassContainer);
    createPostViewContainer.appendChild(newPostFormContainer);

    createNewPost(titleValue, postValue, placeValue);
    printPost();
    console.log('post creado');
  });
  editPost();
  return createPostViewContainer;
};

export default createPostView;
