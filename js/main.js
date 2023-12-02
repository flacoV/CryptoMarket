window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}

document.getElementById("miBoton").addEventListener("click", function() {
  // Redirige a la otra página
  window.location.href = "create-account.html";
});

document.getElementById("miBoton2").addEventListener("click", function() {
  // Redirige a la otra página
  window.location.href = "log-in.html";
});

document.getElementById("miBoton3").addEventListener("click", function() {
  // Redirige a la otra página
  window.location.href = "./pages/create-account.html";
});

document.getElementById("miBoton4").addEventListener("click", function() {
  // Redirige a la otra página
  window.location.href = "./pages/log-in.html";
});