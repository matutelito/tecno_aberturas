AOS.init({
  once: true,
  delay: 10,
  // offset: 0,
  duration: 750,
  easing: 'ease-out-cubic'
});

function obtenerAnioActual() {
  return new Date().getFullYear();
}

document.getElementById("year").textContent = `© ${obtenerAnioActual()} Todos los derechos reservados.`;