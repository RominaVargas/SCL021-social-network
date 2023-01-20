import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';

// ESTA ES LA CONFIGURACION QUE NOS ENTREGO FIREBASE.

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDMPkrT6eqeyflY6Hsjcag0_QCEhv5spJE',
  authDomain: 'tutip-3efdf.firebaseapp.com',
  projectId: 'tutip-3efdf',
  storageBucket: 'tutip-3efdf.appspot.com',
  messagingSenderId: '953146688079',
  appId: '1:953146688079:web:2561ce9e883149b3f7e03a',
  measurementId: 'G-TY3L9H77QW',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const provider =  GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { app };
