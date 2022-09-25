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

  const formContainer = document.createElement('form');
  formContainer.className = 'formContainer';
  const titlePost = document.createElement('input');
  titlePost.setAttribute('placeholder', 'Título del Tip');
  titlePost.setAttribute('id', 'titlePost');

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

  newPostButton.addEventListener('click', (e) => {
    e.preventDefault();
    const titleValue = document.getElementById('titlePost').value;
    const postValue = document.getElementById('postArea').value;
    const placeValue = document.getElementById('placePost').value;

    createNewPost(titleValue, postValue, placeValue);
    printPost();
    console.log('post creado');
  });
  editPost();
  return createPostViewContainer;
};

export default createPostView;
