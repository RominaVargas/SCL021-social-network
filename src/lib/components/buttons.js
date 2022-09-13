// import { logOut } from '../firebase/auth.js';

export const toggleVissibility = () => {
  try {
    const eyeContainer = document.getElementById('eyeContainer');
    eyeContainer.addEventListener('click', () => {
      const inputPassword = document.getElementById('password2');
      const openEye = document.getElementById('openEye');
      const closedEye = document.getElementById('closedEye');
      if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
        openEye.style.display = 'block';
        closedEye.style.display = 'none';
      } else {
        inputPassword.type = 'password';
        openEye.style.display = 'none';
        closedEye.style.display = 'block';
      }
    });
  } catch (error) {
    console.log(error);
  }
};

/* export const closeSession = () => {
  try {
    const clossedSession = document.getElementById('logOut');
    console.log(clossedSession);
    clossedSession.addEventListener('click', () => {
      logOut();
    });
  } catch (error) {
    console.log(error);
  }
}; */

// export const toggleButton = () => {
//     window.addEventListener('load', () => {
//     const signUpButton = logInView.querySelectorAll('.signUpButton');
//     const logInButton = logInView.querySelectorAll('.logInButton');
//     const moveButton = logInView.querySelectorAll('.moveButton');
// console.log(random);
//     signUpButton.addEventListener('click', () => {
//       moveButton.classList.add('rightButton');
//     });
//     logInButton.addEventListener('click', () => {
//       moveButton.classList.remove('rightButton');
//     });
//   });
// };
