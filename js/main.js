console.log("El codigo se esta ejecutando");

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const main = document.getElementById("mainC");

signUpButton.addEventListener("click", () => {
  main.classList.add("right-panel-active");
});
signInButton.addEventListener("click", () => {
  main.classList.remove("right-panel-active");
});
