import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

<<<<<<< HEAD
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
=======
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
>>>>>>> 01deb928c237d2c6936120e90547d6eef1badef9
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
<<<<<<< HEAD
    });
    console.log('el user es: ', docRef.uid);
    console.log('Document written with ID: ', docRef.id);
=======
      stars:[],
      starCounter:0,
    });
    console.log("Document written with ID: ", docRef.id);
>>>>>>> 01deb928c237d2c6936120e90547d6eef1badef9
    document.getElementById('titlePost').value = '';
    document.getElementById('postArea').value = '';
    document.getElementById('placePost').value = '';
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const printPost = async () => {
  const postDiv = document.getElementById('postContainer');
<<<<<<< HEAD
  // Crear una variable que almacene todos los docs ordenados para luego pasarla a querySnapshot
  const allPosts = query(collection(db, 'tips'), orderBy('datePost', 'desc'));
  const querySnapshot = await getDocs(allPosts);
  querySnapshot.forEach(doc) => {
  // usar un condicional que diga que el post se muestre de una forma SI el usuario es el mismo que hizo el post
=======
  //Crear una variable que almacene todos los docs ordenados para luego pasarla a querySnapshot
  const allPosts = query(collection(db, "tips"), orderBy("datePost", "desc"));
  const querySnapshot = await getDocs(allPosts);
  querySnapshot.forEach((doc) => {
    const posts = doc.data()
    //usar un condicional que diga que el post se muestre de una forma SI el usuario es el mismo que hizo el post 
    if (posts.uid === auth.currentUser.uid) {
>>>>>>> 01deb928c237d2c6936120e90547d6eef1badef9
    window.location.hash = '#/home';
    // crear un div para cada post
    const postBox = document.createElement('div');
    postBox.className = 'postBox';
    const titlePost = document.createElement('h2');
    const star = document.createElement('img');
    star.className = 'star';
    star.src = './images/sparkles.png';
    star.value =  doc.id;
    star.setAttribute('id', star);
    const starsCount = document.createElement('p');
    starsCount.className = 'starsCount';
    starsCount.innerHTML += `${doc.data().starCounter}`;
    const trashCan = document.createElement('img');
    trashCan.className = 'trashCan';
    trashCan.src = './images/trash.png';
    trashCan.setAttribute('id', doc.id);
    titlePost.className = 'titlePost';
    titlePost.innerHTML += `${doc.data().title}`;
    const descriptionPost = document.createElement('p');
    descriptionPost.className = 'descriptionPost';
    descriptionPost.innerHTML += `${doc.data().text}`;
    postBox.appendChild(trashCan);
    postBox.appendChild(star);
    postBox.appendChild(starsCount);
    postBox.appendChild(titlePost);
    postBox.appendChild(descriptionPost);
    postDiv.appendChild(postBox);
<<<<<<< HEAD
    console.log(postBox);
    /* const trashCanButton = postDiv.querySelectorAll('#trashCan');
    // console.log(trashCanButton);
    trashCanButton.forEach((element) =>{
      // llamar al target de cada elemento
      element.addEventListener('click', () => {
        console.log('aqui se esta borrando');
       deletePost(doc.id);
    console.log(element)
    });
  }); */
    const postId = doc.id;
=======
>>>>>>> 01deb928c237d2c6936120e90547d6eef1badef9
    trashCan.addEventListener('click', (e) => {
      e.target.getAttribute(trashCan.id);
      //console.log(e.target.id);
      deletePost(e.target.id);
    });
    star.addEventListener('click', (e) => {
      e.target.getAttribute(star.value);
      e.target.src = './images/sparklesdark.png';
      //console.log(e.target.id);
      likePost(e.target.value);
    });
  } else {
    window.location.hash = '#/home';
    //crear un div para cada post
    const postBox = document.createElement('div');
    postBox.className = 'postBox';
    const star = document.createElement('img');
    star.className = 'star';
    star.src = './images/sparkles.png';
    star.value = doc.id;
    star.setAttribute('id', star);
    const titlePost = document.createElement('h2');
    titlePost.className = 'titlePost';
    titlePost.innerHTML += `${doc.data().title}`;
    const descriptionPost = document.createElement('p');
    descriptionPost.className = 'descriptionPost';
    descriptionPost.innerHTML += `${doc.data().text}`;
    postBox.appendChild(star);
    postBox.appendChild(titlePost);
    postBox.appendChild(descriptionPost);
    postDiv.appendChild(postBox);
    star.addEventListener('click', (e) => {
      e.target.getAttribute(star.value);
      e.target.src = './images/sparklesdark.png';
      //console.log(e.target.id);
      likePost(e.target.value);
    });
    };

    return postDiv;
<<<<<<< HEAD

    // crear un h2
    // crear un p
    // retornar
    /* postDiv.innerHTML += `
 <h2> ${doc.data().title} </h2>
 <p> ${doc.data().text}</p>
 `; */
  });
};
=======
    
  })};
>>>>>>> 01deb928c237d2c6936120e90547d6eef1badef9

  // borrar post

<<<<<<< HEAD
const deletePost = async (id) => {
  await deleteDoc(doc(db, 'tips', id));
  console.log('esta es la funcion de delete post');
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
=======
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "tips", id));
    console.log('esta es la funcion de delete post');
  };

  // dar y quitar like

  const likePost = async (id) => {
     const postId = [id].toString();
      const userIdentifier = auth.currentUser.uid;
      const postRef = doc(db, "tips", postId);
      const docSnap = await getDoc(postRef);
      const postData = docSnap.data();
      const likesCount = docSnap.data().starCounter;
      console.log(postData.starCounter)
      if (postData.stars.includes(userIdentifier)) {
       
        await updateDoc(postRef, {
          stars: arrayRemove(userIdentifier),
          starCounter: likesCount - 1,
        }); 
        //printPost();
      } else {
        await updateDoc(postRef, {
          stars: arrayUnion(userIdentifier),
          starCounter: likesCount + 1,
        });
        // printPost();
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
    deletePost
  };
>>>>>>> 01deb928c237d2c6936120e90547d6eef1badef9
