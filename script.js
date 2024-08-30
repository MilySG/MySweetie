function createStars() {
  const container = document.querySelector("body");

  // Crear estrellas estáticas
  for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
  }

  // Crear cometas
  function createComet() {
      const comet = document.createElement("div");
      comet.className = "comet";
      comet.style.top = Math.random() * 100 + "%";
      comet.style.left = Math.random() * 100 + "%";
      container.appendChild(comet);
      setTimeout(() => comet.remove(), 10000); // Eliminar después de la animación
  }

  // Crear estrellas fugaces
  function createShootingStar() {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.top = Math.random() * 50 + "%";
      shootingStar.style.left = Math.random() * 100 + "%";
      container.appendChild(shootingStar);
      setTimeout(() => shootingStar.remove(), 5000); // Eliminar después de la animación
  }

  // Crear estrellas resplandecientes que caen diagonalmente
  function createFallingStar() {
      const fallingStar = document.createElement("div");
      fallingStar.className = "falling-star";
      fallingStar.style.top = Math.random() * 50 + "%";
      fallingStar.style.left = Math.random() * 100 + "%";
      container.appendChild(fallingStar);
      setTimeout(() => fallingStar.remove(), 3000); // Eliminar después de la animación
  }

  // Intervalos para crear los elementos
  setInterval(createComet, 3000);           // Cometas
  setInterval(createShootingStar, 5000);    // Estrellas fugaces
  setInterval(createFallingStar, 2000);     // Estrellas resplandecientes
}

createStars();
