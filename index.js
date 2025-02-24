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

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img"); // Seleccionamos todas las imágenes
  const carouselInner = document.querySelector("#carouselImages .carousel-inner"); // Contenedor del carrusel
  const modal = new bootstrap.Modal(document.getElementById("imageModal")); // Inicializamos el modal

  images.forEach((img, index) => {
      img.addEventListener("click", function () {
          carouselInner.innerHTML = ""; // Limpiamos el contenido previo

          images.forEach((image, i) => {
              let activeClass = (i === index) ? "active" : ""; // La imagen clickeada será la activa
              carouselInner.innerHTML += `
                  <div class="carousel-item ${activeClass}">
                      <img src="${image.src}" class="d-block w-100" alt="Imagen ${i + 1}">
                  </div>
              `;
          });

          modal.show(); // Mostramos el modal con el carrusel
      });
  });
});