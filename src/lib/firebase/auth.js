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
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
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
      //  const userId = user.uid;
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
  // const textPost = document.getElementById('textPostContainer');
  // const titlePost = document.getElementById('titlePostContainer');
  const querySnapshot = await getDocs(collection(db, 'tips'));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    window.location.hash = '#/home';
    // crear un div para cada post
    const postBox = document.createElement('div');
    postBox.className = 'postBox';
    const titlePost = document.createElement('h2');
    const trashCan = document.createElement('img');
    trashCan.src = './images/trash.png';
    trashCan.setAttribute('id', 'trashCan');
    trashCan.addEventListener('click', (e) => {
      e.preventDefault();
      deletePost('${doc.id}');
    });
    titlePost.className = 'titlePost';
    titlePost.innerHTML += `${doc.data().title}`;
    const descriptionPost = document.createElement('p');
    descriptionPost.className = 'descriptionPost';
    descriptionPost.innerHTML += `${doc.data().text}`;
    postBox.appendChild(trashCan);
    postBox.appendChild(titlePost);
    postBox.appendChild(descriptionPost);
    postDiv.appendChild(postBox);
    // console.log('solito' + postBox);
    return postBox;

    // crear un h2
    // crear un p
    // retornar
    /* postDiv.innerHTML += `
 <h2> ${doc.data().title} </h2>
 <p> ${doc.data().text}</p>
 `; */
  });
};

// borrar post

const deletePost = async (id) => {
  await deleteDoc(doc(db, 'tips', id));
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
};
