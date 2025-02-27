// navigation logo
document.querySelector(".logo").addEventListener("click", function() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});


// fetch api google drive img

// const FOLDER_ID = "TU_CARPETA_ID";
// const API_KEY = "TU_CLAVE_API";

// async function fetchImagesFromDrive() {
//     const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`;
    
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const imageContainer = document.getElementById("gallery");
        
//         imageContainer.innerHTML = ""; // Limpiar galería
        
//         data.files.forEach(file => {
//             if (file.mimeType.includes("image")) {
//                 const img = document.createElement("img");
//                 img.src = `https://drive.google.com/uc?export=view&id=${file.id}`;
//                 img.alt = file.name;
//                 img.style.width = "150px";
//                 img.style.margin = "5px";
//                 imageContainer.appendChild(img);
//             }
//         });
//     } catch (error) {
//         console.error("Error al obtener imágenes:", error);
//     }
// }

// document.addEventListener("DOMContentLoaded", fetchImagesFromDrive);

// slide img
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container img");
  const carouselInner = document.querySelector("#carouselImages .carousel-inner");
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  images.forEach((img, index) => {
      img.addEventListener("click", function () {
          carouselInner.innerHTML = "";

          images.forEach((image, i) => {
              let activeClass = (i === index) ? "active" : "";
              carouselInner.innerHTML += `
                  <div class="carousel-item ${activeClass}">
                      <img src="${image.src}" class="d-block w-100" alt="Imagen ${i + 1}">
                  </div>
              `;
          });

          modal.show();
      });
  });
});


// footer
function obtenerAnioActual() {
  return new Date().getFullYear();
}
document.getElementById("year").textContent = `© ${obtenerAnioActual()} Todos los derechos reservados.`;


// AOS.init({
//   once: true,
//   delay: 10,
//   duration: 750,
//   easing: 'ease-out-cubic'
// });
