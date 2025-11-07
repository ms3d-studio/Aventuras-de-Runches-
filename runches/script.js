document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const music = new Audio("music.mp3");
  let currentSlide = 0;

  // Reproducir música al abrir
  music.volume = 0.6;
  music.loop = true;
  music.play().catch(() => {
    // Si el navegador bloquea el autoplay, se activa al hacer clic
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });

  // Mostrar el slide actual
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  // Siguiente y anterior
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Cambio automático cada 7 segundos
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 7000);

  // Mostrar mensaje cifrado
  const boton = document.getElementById("revelar");
  const descifrado = document.getElementById("descifrado");

  const mensajeCifrado = "UR5NFTMgQVZFTlRVUkFTIEpVTlRPUyDwn5iO"; // Base64
  const mensajeReal = atob(mensajeCifrado);

  boton.addEventListener("click", () => {
    descifrado.classList.remove("oculto");
    descifrado.textContent = mensajeReal;
    boton.style.display = "none";
  });

  showSlide(currentSlide);
});
