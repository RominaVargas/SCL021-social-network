// import { logOut } from '../firebase/auth.js';

// Funcion para ver y ocultar contraseña con ojitos.
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
