import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
// importacion firebase autenticacion
import {
  arrayRemove,
  arrayUnion,
  updateDoc,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  orderBy,
  Timestamp,
  query,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
// importacion de firebase datos
import { app } from './firebase.js';

// auth es constante pq es llamada por varias funciones
// db es la database de google
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// funcion que permite registro con correo
// pasamos los parametros que necesitemos
const registerEmailPassword = (email, password, confirmPassword) => {
  createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    .then((userCredential) => {
      window.location.hash = '#/home';
      // cuando se registra correctamente, dirige a Home
      const user = userCredential.user;
      emailVerification(auth);
      //  esta variable da el id de cada usuario al entrar
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(user);
      //
      return errorCode;
    });
};

// funcion para loguearse con google en ventana popup
const logInWithGoogle = () => {
  // console.log('ejecutando Login con Google');
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // esto da un token de acceso google. Puede usarse  para acceder al Google API
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      // ...
      return credential;
    })
    .catch((error) => {
      // console.log(error);
      const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return errorCode;
    });
};

// funcion que permite acceder a la pagina con usuario y contraseña almacenada
const logInWithEmailAndPassword = (email2, password2) => {
  // console.log(email);
  // console.log(password);
  signInWithEmailAndPassword(auth, email2, password2)
    // .then((userCredential) => {
    // console.log('sesion iniciada con exito!');
    // window.location.hash = '#/home';
    // Signed in
    // const user = userCredential.user;
    // ...
    // }
    .catch((error) => {
      /* function inputErrors() {
        const inputError = document.getElementById('inputErrors');
        const email = document.getElementById('email2').value;
      } */
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

// funcion observa que haya usuario activo y cual es su id
const observator = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.hash = '#/home';
      console.log('existe usuario activo');
      const uid = user.uid;
      console.log('uid del usuario en observador: ', uid);
    } else {
      // User is signed out
      window.location.hash = '#/';
      console.log('no existe usuario activo');
      // ...
    }
  });
};

// funcion para cerrar sesion
const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log('Saliendo...');
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};

// Creacion de posteos
const createNewPost = async (titleValue, postValue, placeValue) => {
  try {
    // console.log(titleValue, postValue, placeValue);
    const docRef = await addDoc(collection(db, 'tips'), {
      title: titleValue,
      text: postValue,
      place: placeValue,
      datePost: Timestamp.fromDate(new Date()),
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      stars: [],
      starCounter: 0,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// funcion para imprimir los tips en pantalla
const printPost = async () => {
  const postDiv = document.getElementById('postContainer');
  // Crear una variable que almacene todos los docs ordenados para luego pasarla a querySnapshot
  const allPosts = query(collection(db, 'tips'), orderBy('datePost', 'desc'));
  const querySnapshot = await getDocs(allPosts);
  querySnapshot.forEach((doc) => {
    const posts = doc.data();
    // condicional para post muestre SI usuario es el mismo que hizo el post
    if (posts.uid === auth.currentUser.uid) {
      window.location.hash = '#/home';

      // crear un div para cada post
      const postBox = document.createElement('div');
      postBox.className = 'postBox';
      const headPost = document.createElement('div');
      headPost.className = 'headPost';
      headPost.setAttribute('id', `headPost-${doc.id}`);
      const userName = document.createElement('p');
      userName.className = 'userName';
      userName.setAttribute('id', `userName-${doc.id}`);
      const userEmail = `${doc.data().email}`;
      userName.innerHTML += userEmail.substring(0, userEmail.lastIndexOf('@'));

      // contenedor para iconos del post
      const iconsContainer = document.createElement('div');
      iconsContainer.className = 'iconsContainer';
      const star = document.createElement('img');
      star.className = 'star';
      star.src = './images/sparkles.png';
      star.value = doc.id;
      star.setAttribute('id', `star-${doc.id}`);
      if (doc.data().stars.includes(auth.currentUser.uid)) {
        star.src = './images/sparklesdark.png';
      }
      // iconos que estan en el headPost
      const starsCount = document.createElement('p');
      starsCount.className = 'starsCount';
      starsCount.innerHTML += `${doc.data().starCounter}`;
      const editIcon = document.createElement('img');
      editIcon.className = 'editIcon';
      editIcon.src = './images/edit.png';
      editIcon.setAttribute('id', `edit-${doc.id}`);
      editIcon.value = doc.id;
      const trashCan = document.createElement('img');
      trashCan.className = 'trashCan';
      trashCan.src = './images/trash.png';
      trashCan.setAttribute('id', doc.id);

      // aquí parte el contenido dinamico del post
      const titlePost = document.createElement('h2');
      titlePost.className = 'titlePost';
      titlePost.innerHTML += `${doc.data().title}`;
      titlePost.setAttribute('id', 'titlePostContainer');
      // es un elemento p porque es el texto impreso en el post creado
      const descriptionPost = document.createElement('p');
      descriptionPost.className = 'descriptionPost';
      descriptionPost.innerHTML += `${doc.data().text}`;
      descriptionPost.setAttribute('id', 'postAreaContainer');
      const placePost = document.createElement('p');
      placePost.className = 'placePost';
      placePost.innerHTML += `${doc.data().place}`;
      placePost.setAttribute('id', 'placePostContainer');

      // appencheo para dar forma a la pagina
      postBox.appendChild(headPost);
      headPost.appendChild(userName);
      headPost.appendChild(iconsContainer);
      iconsContainer.appendChild(starsCount);
      iconsContainer.appendChild(star);
      iconsContainer.appendChild(editIcon);
      iconsContainer.appendChild(trashCan);

      postBox.appendChild(titlePost);
      postBox.appendChild(descriptionPost);
      postBox.appendChild(placePost);
      postDiv.appendChild(postBox);

      // el basurero escucha el click y borra con el id
      trashCan.addEventListener('click', (e) => {
        e.target.getAttribute(trashCan.id);
        deletePost(e.target.id);
      });

      // funcion que oye el clic del icono editar y recoge los valores
      // de los inputs creados
      editIcon.addEventListener('click', (e) => {
        const submitPost = document.getElementById('newPostButton');
        const editPostButton = document.getElementById('editButtonHome');

        // cuando el icono se toca, se cambia el boton de enviar tip a editar tip
        editPostButton.style.display = 'block';
        submitPost.style.display = 'none';
        e.target.getAttribute(editIcon.value);
        const editTitle = doc.data().title;
        const editText = doc.data().text;
        const editPlace = doc.data().place;
        editPost(e.target.value, editTitle, editText, editPlace);
      });

      // funcion que oye cuando le damos una estrella (like) a un posteo con el target
      star.addEventListener('click', (e) => {
        e.target.getAttribute(star.value);
        likePost(e.target.value);
      });

      // visualizacion de posteos cuando el usuario no es el creador
    } else {
      window.location.hash = '#/home';
      // crear un div para cada post
      const postBox = document.createElement('div');
      postBox.className = 'postBox';
      const headPost = document.createElement('div');
      headPost.className = 'headPost';
      headPost.setAttribute('id', `headPost-${doc.id}`);
      const userName = document.createElement('p');
      userName.className = 'userName';
      userName.setAttribute('id', `userName-${doc.id}`);
      const userEmail = `${doc.data().email}`;

      // recogemos el nombre de usuario del email y borramos desde el @
      userName.innerHTML += userEmail.substring(0, userEmail.lastIndexOf('@'));
      const iconsContainer = document.createElement('div');
      iconsContainer.className = 'iconsContainer';
      const star = document.createElement('img');
      star.className = 'star';
      star.src = './images/sparkles.png';
      star.value = doc.id;
      star.setAttribute('id', `star-${doc.id}`);

      // esto revisa si el usuario dio like y las estrellas pasan a oscuras
      if (doc.data().stars.includes(auth.currentUser.uid)) {
        star.src = './images/sparklesdark.png';
      }
      // contador estrellas
      const starsCount = document.createElement('p');
      starsCount.className = 'starsCount';
      starsCount.innerHTML += `${doc.data().starCounter}`;
      const titlePost = document.createElement('h2');
      titlePost.className = 'titlePost';
      titlePost.innerHTML += `${doc.data().title}`;
      titlePost.setAttribute('id', 'titlePostContainer');
      const descriptionPost = document.createElement('p');
      descriptionPost.className = 'descriptionPost';
      descriptionPost.innerHTML += `${doc.data().text}`;
      descriptionPost.setAttribute('id', 'postAreaContainer');
      const placePost = document.createElement('p');
      placePost.className = 'placePost';
      placePost.innerHTML += `${doc.data().text}`;
      placePost.setAttribute('id', 'placePostContainer');

      // appencheo para ordenar los elementos
      postBox.appendChild(headPost);
      headPost.appendChild(userName);
      headPost.appendChild(iconsContainer);
      iconsContainer.appendChild(starsCount);
      iconsContainer.appendChild(star);
      postBox.appendChild(titlePost);
      postBox.appendChild(descriptionPost);
      postBox.appendChild(placePost);
      postDiv.appendChild(postBox);

      // escucha el clic de dar like e identifica el posteo
      star.addEventListener('click', (e) => {
        e.target.getAttribute(star.value);
        likePost(e.target.value);
      });
    }
    return postDiv;
  });
};

// borrar post

const deletePost = async (id) => {
  await deleteDoc(doc(db, 'tips', id));
  console.log(id);
};

// funcion para editar posteos
const editPost = async (id, editTitle, editText, editPlace) => {
  const postRef = doc(db, 'tips', id);
  document.getElementById('titlePost').value = editTitle;
  document.getElementById('postArea').value = editText;
  document.getElementById('placePost').value = editPlace;
  const editButton = document.getElementById('editButtonHome');
  console.log(editButton);
  editButton.addEventListener('click', async () => {
    const editTitle = document.getElementById('titlePostContainer').value;
    const editText = document.getElementById('postAreaContainer').value;
    const editPlace = document.getElementById('placePostContainer').value;

    await updateDoc(postRef, {
      title: editTitle,
      text: editText,
      place: editPlace,
    });
  });
};

// funcion para dar y quitar like
const likePost = async (id) => {
  const postId = [id].toString();
  const userIdentifier = auth.currentUser.uid;
  const postRef = doc(db, 'tips', postId);
  const docSnap = await getDoc(postRef);
  const postData = docSnap.data();
  const likesCount = postData.starCounter;

  // boton que busca id de la estrella
  const likeButton = document.getElementById(`star-${id}`);
  console.log(likeButton);
  // condicional que si el usuario le da like al boton, quita el like (estrella blanca)
  if (postData.stars.includes(userIdentifier)) {
    likeButton.setAttribute('src', './images/sparkles.png');
    await updateDoc(postRef, {
      stars: arrayRemove(userIdentifier),
      // baja el 1 el conteo de likes
      starCounter: likesCount - 1,
    });
  } else {
    // si la estrella no esta pintada y se da like, se cambia la estrella a negra
    likeButton.setAttribute('src', './images/sparklesdark.png');
    await updateDoc(postRef, {
      stars: arrayUnion(userIdentifier),
      starCounter: likesCount + 1,
    });
  }
};

export {
  app,
  auth,
  registerEmailPassword,
  logInWithGoogle,
  logInWithEmailAndPassword,
  logOut,
  observator,
  createNewPost,
  printPost,
  deletePost,
  editPost,
};
