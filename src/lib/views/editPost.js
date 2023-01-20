// import { printPost, editPost} from "../firebase/auth.js";
import { createNewPost, printPost, editPost} from "../firebase/auth.js";
// Gran contenedor con la funcion de crear posts. Es dinamico. 
const editPostView = () => {

    const editPostViewContainer = document.createElement('div');
    editPostViewContainer.className = 'editPostView';
    // Esto son los botones retroceder y cerrar al crear un nuevo TIP. 
    const editPostViewTitle = document.createElement('h2');
    editPostViewTitle.className = 'editPostViewTitle';
    editPostViewTitle.innerText = 'Nuevo Tip';
    /*const backButtonLink = document.createElement('a');
    backButtonLink.className = 'backButton';
    backButtonLink.href = '#/home';
    const backButton = document.createElement('img');
    backButton.src = './images/back.png';
    backButton.className = 'backButton';
    backButtonLink.appendChild(backButton);*/

    
    const editPostFormContainer = document.createElement('div');
    editPostFormContainer.className = 'editPostFormContainer';
    const postArea = document.createElement('textArea');
    postArea.className = 'postArea';
    postArea.setAttribute('id', 'postArea');
    postArea.setAttribute('placeholder', 'Cuentanos tutip :)');


    const formContainer = document.createElement('form');
    formContainer.className = 'formContainer';
    const titlePost = document.createElement('input');
    titlePost.setAttribute('placeholder', 'Título del Tip');
    titlePost.setAttribute('id','titlePost');

    const placePost = document.createElement('input');
    placePost.setAttribute('placeholder', '¿Dónde?');
    placePost.setAttribute('id','placePost');
    
    const PostButton = document.createElement('button');
    PostButton.setAttribute('id','newPostButton');
    PostButton.innerText = 'Subir Tip';

    const editButtonHome = document.createElement('button');
    editButtonHome.setAttribute('id','editButtonHome');
    editButtonHome.className = 'editButtonHome';
    editButtonHome.innerText = 'Editar tip';



    /*const editPostButton = document.getElementById('newPostButton');
    console.log('que es:' + editPostButton);
    editPost(editPostButton);*/

    editPostFormContainer.appendChild(formContainer);
    formContainer.appendChild(titlePost);
    formContainer.appendChild(postArea);
    formContainer.appendChild(placePost);
    formContainer.appendChild(PostButton);
    formContainer.appendChild(editButtonHome);
    editPostViewContainer.appendChild(editPostFormContainer);

    editButtonHome.addEventListener('click', () => {
      const titleEdit = document.getElementById('titlePost').value;
      const postEdit = document.getElementById('postArea').value;
      const placeEdit = document.getElementById('placePost').value;
      editPost(titleEdit, postEdit, placeEdit);
    });

    PostButton.addEventListener('click', (e) => {
      e.preventDefault();
      const titleValue = document.getElementById('titlePost').value;
      const postValue = document.getElementById('postArea').value;
      const placeValue = document.getElementById('placePost').value;
      createNewPost(titleValue, postValue, placeValue);
      printPost();
      console.log('post creado');
    });



  /*  window.addEventListener("load", function() {
        const titlePostEdit2 = document.getElementById('titlePostEdit');
        const postAreaEdit2 = document.getElementById('postAreaEdit');
        const placePostEdit2 = document.getElementById('placePostEdit');
        
       editPost(titlePostEdit2, postAreaEdit2, placePostEdit2);
      });

      editPostButton.addEventListener('click', (e) => {
       editPost()
      });*/
              /*const tipsColection = doc(db, "tips", id);
        document.getElementById('postArea').value = editText;
        document.getElementById('titlePost').value = editTitle;
        document.getElementById('placePost').value = editPlace;
        await updateDoc(tipsColection, {
          text: postValue,
          title: titleValue,
          place: placeValue
      });};*/


    return editPostViewContainer;
};

export default editPostView;