import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

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

// console.log('error');
import { app } from './firebase.js';

const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const registerEmailPassword = (email, password, confirmPassword) => {
  createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    .then((userCredential) => {
      window.location.hash = '#/home';
      // Signed in
      const user = userCredential.user;
      emailVerification(auth);
      // const userId = user.uid;
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

const logInWithGoogle = () => {
  // console.log('ejecutando Login con Google');
  signInWithPopup(auth, provider)
    .then((result) => {
      // console.log('exito!', result);
      // window.location.hash = '#/home';

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      return credential;
    })
    .catch((error) => {
      // console.log(error);
      // Handle Errors here.
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

const logInWithEmailAndPassword = (email2, password2) => {
  // console.log(email);
  // console.log(password);
  signInWithEmailAndPassword(auth, email2, password2)
    .then((userCredential) => {
      // console.log('sesion iniciada con exito!');
      // window.location.hash = '#/home';
      // Signed in
      const user = userCredential.user;
      // ...
    })

    .catch((error) => {
      function inputErrors() {
        const inputError = document.getElementById('inputErrors');
        const email = document.getElementById('email2').value;
      }
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

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
    console.log(titleValue, postValue, placeValue);
    const docRef = await addDoc(collection(db, 'tips'), {
      text: postValue,
      title: titleValue,
      place: placeValue,
      datePost: Timestamp.fromDate(new Date()),
      uid: auth.currentUser.uid,
      stars: [],
      starCounter: 0,
    });
    console.log('Document written with ID: ', docRef.id);
    document.getElementById('titlePost').value = '';
    document.getElementById('postArea').value = '';
    document.getElementById('placePost').value = '';
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const printPost = async () => {
  const postDiv = document.getElementById('postContainer');
  // Crear una variable que almacene todos los docs ordenados para luego pasarla a querySnapshot
  const allPosts = query(collection(db, 'tips'), orderBy('datePost', 'desc'));
  const querySnapshot = await getDocs(allPosts);
  querySnapshot.forEach((doc) => {
    const posts = doc.data();
    // usar un condicional que diga que el post se muestre de una forma SI el usuario es el mismo que hizo el post
    if (posts.uid === auth.currentUser.uid) {
      window.location.hash = '#/home';
      //crear un div para cada post
      const postBox = document.createElement('div');
      postBox.className = 'postBox';
      const headPost = document.createElement('div');
      headPost.className = 'headPost';
      headPost.setAttribute('id', `headPost-${doc.id}`);
      const userName = document.createElement('p');
      userName.className = 'userName';
      userName.setAttribute('id', `userName-${doc.id}`);

      const titlePost = document.createElement('h2');
      //PARECE QUE FALTA EL ID DE TITLE.
      const star = document.createElement('img');
      star.className = 'star';
      star.src = './images/sparkles.png';
      star.value = doc.id;
      star.setAttribute('id', `star-${doc.id}`);
      if (doc.data().stars.includes(auth.currentUser.uid)) {
        star.src = './images/sparklesdark.png';
      }
      const starsCount = document.createElement('p');
      starsCount.className = 'starsCount';
      starsCount.innerHTML += `${doc.data().starCounter}`;
      const editIcon = document.createElement('img');
      editIcon.className = 'editIcon';
      editIcon.src = './images/edit.png';
      editIcon.setAttribute('id', `edit-${doc.id}`);
      const trashCan = document.createElement('img');
      trashCan.className = 'trashCan';
      trashCan.src = './images/trash.png';
      trashCan.setAttribute('id', doc.id);
      titlePost.className = 'titlePost';
      titlePost.innerHTML += `${doc.data().title}`;
      const descriptionPost = document.createElement('p');
      descriptionPost.className = 'descriptionPost';
      descriptionPost.innerHTML += `${doc.data().text}`;

      postBox.appendChild(headPost);
      headPost.appendChild(userName);
      headPost.appendChild(starsCount);
      headPost.appendChild(star);
      headPost.appendChild(editIcon);
      headPost.appendChild(trashCan);

      postBox.appendChild(titlePost);
      postBox.appendChild(descriptionPost);
      postDiv.appendChild(postBox);
      trashCan.addEventListener('click', (e) => {
        e.target.getAttribute(trashCan.id);
        deletePost(e.target.id);
      });

      editIcon.addEventListener('click', (e) => {
        e.target.getAttribute(editIcon.id);
        const editText = doc.data().text;
        console.log('esto es editText', editText);
        const editTitle = doc.data().title;
        console.log('esto es editTitle', editTitle);
        const editPlace = doc.data().place;
        console.log('esto es editPlace', editPlace);
        editPost(e.target.id, editText, editTitle, editPlace);
      });

      star.addEventListener('click', (e) => {
        e.target.getAttribute(star.value);
        likePost(e.target.value);
      });
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
      const star = document.createElement('img');
      star.className = 'star';
      star.src = './images/sparkles.png';
      star.value = doc.id;
      star.setAttribute('id', `star-${doc.id}`);
      if (doc.data().stars.includes(auth.currentUser.uid)) {
        star.src = './images/sparklesdark.png';
      }
      const starsCount = document.createElement('p');
      starsCount.className = 'starsCount';
      starsCount.innerHTML += `${doc.data().starCounter}`;
      const titlePost = document.createElement('h2');
      titlePost.className = 'titlePost';
      titlePost.innerHTML += `${doc.data().title}`;
      const descriptionPost = document.createElement('p');
      descriptionPost.className = 'descriptionPost';
      descriptionPost.innerHTML += `${doc.data().text}`;

      postBox.appendChild(headPost);
      headPost.appendChild(userName);
      headPost.appendChild(starsCount);
      headPost.appendChild(star);
      postBox.appendChild(titlePost);
      postBox.appendChild(descriptionPost);
      postDiv.appendChild(postBox);
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
const editPost = async (id, editText, editTitle, editPlace) => {
  window.location.hash = '#/createPost';
  document.getElementById('postArea').value = editText;
  document.getElementById('titlePost').value = editTitle;
  document.getElementById('placePost').value = editPlace;
  const editButton = getElementById('newPostButton');
  editButton.innerHTML = 'Guardar Cambios';

  editButton.addEventListener('click', async () => {
    const tipsColection = doc(db, 'tips', id);
    document.getElementById('postArea').value;
    document.getElementById('titlePost').value;
    document.getElementById('placePost').value;
    await updateDoc(tipsColection, {
      text: postValue,
      title: titleValue,
      place: placeValue,
    });
  });
};

// dar y quitar like

const likePost = async (id) => {
  const postId = [id].toString();
  const userIdentifier = auth.currentUser.uid;
  const postRef = doc(db, 'tips', postId);
  const docSnap = await getDoc(postRef);
  const postData = docSnap.data();
  const likesCount = postData.starCounter;
  /* console.log('esto es likesCount: ', postData); */
  const likeButton = document.getElementById(`star-${id}`);
  console.log(likeButton);
  if (postData.stars.includes(userIdentifier)) {
    likeButton.setAttribute('src', './images/sparkles.png');
    await updateDoc(postRef, {
      stars: arrayRemove(userIdentifier),
      starCounter: likesCount - 1,
    });
  } else {
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
