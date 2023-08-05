document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  body.style.backgroundColor = "lightblue";

  body.addEventListener("click", () => {
    console.log("Has hecho clic en el cuerpo");
  });
});
