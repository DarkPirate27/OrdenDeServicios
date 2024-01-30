const user = document.querySelector("#user");
const password = document.querySelector("#password");
const boton = document.querySelector("#mybutton");
const mensage = document.querySelector("#mError");
const login = document.querySelector("#loginjs");

console.log("Ready");

boton.addEventListener("click", (e) => {
  e.preventDefault();

  valorUser = user.value;
  valorPassword = password.value;

  const Usuario = "DSI";
  const Contra = "S0P0RT3L4B";

  if (valorUser === Usuario && valorPassword === Contra) {
    location.href = "historial.html"; // Entramos a la pagina correctamente
  } else if (valorUser === Usuario && valorPassword !== Contra) {
    mensage.innerHTML = "Contraseña Incorrecta";
  } else if (valorUser !== Usuario && valorPassword === Contra) {
    mensage.innerHTML = "Usuario Incorrecta";
  } else if (valorUser === "" || valorPassword === "") {
    mensage.innerHTML = "Ingrese los datos completos";
  } else {
    mensage.innerHTML = "Usuario y Contraseña Incorrecta";
    login.style.boxShadow = "0px 0px 20px #e6151569";
  }
});
