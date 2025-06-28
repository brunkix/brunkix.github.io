// Script de login para AddProject.html
// Permite mostrar el panel de administración solo si la contraseña es correcta
const PASSWORD = "Yosoymine2008";
function login() {
  // Obtiene el valor del input de contraseña
  const input = document.getElementById('passwordInput').value;
  const error = document.getElementById('loginError');
  // Verifica la contraseña
  if (input === PASSWORD) {
    // Muestra el panel de administración y oculta el login
    document.getElementById('login').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    // Muestra mensaje de error si la contraseña es incorrecta
    error.textContent = 'Contraseña incorrecta';
    error.style.display = 'block';
  }
}
