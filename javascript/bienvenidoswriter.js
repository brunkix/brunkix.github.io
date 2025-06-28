// Animación de máquina de escribir para el subtítulo "Bienvenidos"
// Escribe y borra el texto de forma animada en el elemento con id "Bienvenidoswriter"
const text = "Bienvenidos";
const el = document.getElementById("Bienvenidoswriter");
let i = 0;
let isDeleting = false;
let speed = 120;

// Función principal de la animación
function type() {
  if (!isDeleting) {
    // Escribe letra por letra
    el.textContent = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      // Espera antes de empezar a borrar
      setTimeout(() => { isDeleting = true; type(); }, 1200);
      return;
    }
  } else {
    // Borra letra por letra
    el.textContent = text.substring(0, i - 1);
    i--;
    if (i === 0) {
      // Espera antes de volver a escribir
      isDeleting = false;
      setTimeout(type, 600);
      return;
    }
  }
  setTimeout(type, isDeleting ? 60 : speed);
}
// Inicia la animación
type();
