
let botonesVerMas = document.querySelectorAll(".verMas")
const verMenos = (elemento1) => {
  elemento1.classList.toggle("hidden");
}
botonesVerMas.forEach(elem => {
  elem.addEventListener("click", () => {
    let btn = elem.previousElementSibling;
    verMenos(btn);
  })
});
