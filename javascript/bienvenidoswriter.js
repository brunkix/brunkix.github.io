document.addEventListener('DOMContentLoaded', function() {
  const element = document.getElementById("Bienvenidoswriter");
  const texts = ["Bienvenido", "Welcome", "Bienvenue", "Bem-vindo", "Willkommen", "Добро пожаловать"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 120;
  let pause = 1200;

  function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      let text = currentText.substring(0, charIndex--);
      element.textContent = text === "" ? " " : text;
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 400);
      } else {
        setTimeout(type, typingSpeed / 2);
      }
    } else {
      element.textContent = currentText.substring(0, charIndex++);
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(type, pause);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  setTimeout(type, typingSpeed);
});