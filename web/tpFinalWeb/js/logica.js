
let listaProductos = document.getElementById("cards");
let totalCart = document.getElementById("totalCart");
let idBuys = document.getElementById("buys");

let total = 0;

const productos = [
    { nombre: "Juego de tronos", precio: 2000, stock: 5, image: "img/juego.png" },
    { nombre: "Choque de reyes", precio: 1500, stock: 5, image: "img/choque.png" },
    { nombre: "Tromenta de espadas", precio: 8000, stock: 5, image: "img/tormenta.png" },
    { nombre: "Festin de Cuervos", precio: 3000, stock: 5, image: "img/festin.png" },
    { nombre: "Danz de Dragones", precio: 6000, stock: 5, image: "img/danza.png" },
    { nombre: "El Caballero de los Siete Reinos", precio: 2000, stock: 5, image: "img/caballero.webp" },
    { nombre: "Fuego y sangre", precio: 15000, stock: 5, image: "img/FuegoYSangre.png" },
    { nombre: "El mudo de Hielo y Fuego", precio: 8000, stock: 5, image: "img/mundo.jpeg" }
];

function writeProductos(arrayProductos) {
  for (let i = 0; i < arrayProductos.length; i++) {
    listaProductos.innerHTML +=
      `<div class="card mb-3" style="max-width: 400px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${arrayProductos[i].image}" class="img-fluid rounded-start" [alt]="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${arrayProductos[i].nombre}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary"> Precio: ${arrayProductos[i].precio}</small></p>
              <div class="input-group row input-group-sm mb-3" style="max-width: max-content;">
                <span class="input-group-text" id="inputGroup-sizing-sm">Stock</span>
                <input id="stock${i}" type="number" class="form-control" value="${arrayProductos[i].stock}" aria-label="Username" readonly>
                <span class="input-group-text" id="inputGroup-sizing-sm">Pedir</span>
                <input type="number" class="form-control" id="entrada${i}" placeholder="Ingrese cantidad" aria-label="Server">
              </div>
              <button type="button" id="btn${i}" class="btn btn-secondary">Agregar al carro</button>
            </div>
          </div>
        </div>
      </div>`
  }

  for (let i = 0; i < arrayProductos.length; i++) {
      document.getElementById(`btn${i}`).addEventListener("click", () => {
        addToCart(i);
      });
  }
}

function addToCart(index) {
  const stockElement = document.getElementById(`stock${index}`);
  const entradaElement = document.getElementById(`entrada${index}`);
  const stock = parseInt(stockElement.value);
  const cantidad = parseInt(entradaElement.value);
  const precio = productos[index].precio;

  if (cantidad > 0 && cantidad <= stock) {
      total += cantidad * precio;
      idBuys.innerHTML +=
      `<div class="card mb-3" style="max-width: 200px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${productos[index].image}" class="img-fluid rounded-start" [alt]="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${productos[index].nombre}</h5>
              <p class="card-text"><small class="text-body-secondary"> Precio: ${precio}</small></p>
              <p class="card-text"><small class="text-body-secondary"> Unidades: ${cantidad}</small></p>
            </div>
          </div>
        </div>
      </div>`;
      idBuys.classList.toggle("buys");
      totalCart.innerHTML =
      `<p>Total: $ ${total}</p>
      <button id="confirm" type="button" class="btn btn-success">Confirmar compra</button>
      `;
      const confirm = document.getElementById(`confirm`).addEventListener("click", () => {
        alert(`Compra realizada exitosamente por un total de. Total: $ ${total}`);
        idBuys.innerHTML = "";
        idBuys.classList.toggle("buys");
        totalCart.innerHTML = "";
      });;
      stockElement.value = stock - cantidad;
      alert(`Producto agregado exitosamente.`);
  } else {
      alert('Cantidad no valida. Debe ser mayor que 0 y menor o igual al stock.');
  }
}



writeProductos(productos)