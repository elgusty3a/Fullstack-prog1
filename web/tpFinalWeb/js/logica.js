
let listaProductos = document.getElementById("cards");
let totalCart = document.getElementById("totalCart");
let idBuys = document.getElementById("buys");

let total = 0;

const productos = [
    { nombre: "Juego de tronos",
      precio: 2000,
      stock: 5,
      image: "img/juego.png",
      descripcion: "La primera parte de «Canción de hielo y fuego»; la multipremiada saga de fantasía épica que fue adaptada para televisión con el título de «Game of thrones».",
      sinopsis: "En el legendario mundo de los Siete Reinos; donde el verano puede durar décadas y el invierno toda una vida; y donde rastros de una magia inmemorial surgen en los rincones más sombríos; la tierra del norte; Invernalia; está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario; lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad; la compasión y la sed de venganza; el amor y el poder; la lujuria y el incesto; todo ello para ganar la más mortal de las batallas: el trono de hierro; una poderosa trampa que atrapará a los personajes -y al lector. Los paisajes tienen más en común con la cadencia de Shakespeare; la intensidad de Kipling o el sentido aventurero de Melville; que con la épica de Tolkien. El auténtico ariete de Martin son las esquirlas del alma humana; y sus criaturas se desenvuelven en los territorios de lo carnal sin necesidad de magia o fuegos artificiales. No hay en la obra del escritor anillos ni pócimas; sino espadas; ejércitos y muros. En las páginas de Martin conviven Hamlet y Chéjov; Milton y Dickens; Conan y El Rey Arturo; en una extraña mezcla que avanza con puño de hierro; sustentado en un pilar gris y oscuro: la certeza de que lo peor aún está por llegar."
    },
    { nombre: "Choque de reyes",
      precio: 1500,
      stock: 5,
      image: "img/choque.png",
      descripcion: "La segunda parte de «Canción de hielo y fuego»; la multipremiada saga fantástica que fue adaptada para televisión con el título de «Game of thrones».",
      sinopsis: "Un cometa del color de la sangre hiende el cielo; cargado de malos augurios. Y hay razones sobradas para pensar así: los Siete Reinos se ven sacudidos por las luchas intestinas entre los nobles por la sucesión al Trono de Hierro. En la otra orilla del mar Angosto; la princesa Daenerys Targaryen conduce a su pueblo de jinetes salvajes a través del desierto. Y en los páramos helados del norte; más allá del Muro; un ejército implacable avanza hacia un territorio asolado por el caos y las guerras fratricidas."
    },
    { nombre: "Tromenta de espadas",
      precio: 8000,
      stock: 5,
      image: "img/tormenta.png",
      descripcion: "«Juego de tronos» sentó las bases para un comienzo sólido y fascinante; «Choque de reyes» superó todas las expectativas; pero es «Tormenta de espadas» el as bajo la manga que convierte a Martin en el mejor escritor de fantasía de todos los tiempos.",
      sinopsis: "«La espada llameante dejó a su paso largas estelas de fuego... el acero cantó contra el acero» Arrasados por la guerra; los Siete Reinos pronto sufrirán el larguísimo invierno que se predice como inusitadamente crudo. Y mientras empeoran la violencia y el clima; los personajes entrañables e infames que ya conocemos continúan debatiéndose entre feroces batallas y perversas intrigas palaciegas: Joffrey; el cruel rey adolescente; hace de las suyas ante el asombro de los propios miembros de su clan; los Lannister; Robb Stark; rey de Invernalia; ha ganado todos sus combates; pero está perdiendo la guerra; Daenerys; la princesa de los tres dragones; ya está al frente de un ejército de mercenarios para cumplir su destino: recuperar el reino del cual fue despojada. Pero otra fuerza armada; con la que nadie contaba; surge desde más allá del Muro de Hielo: se trata de los Otros; un ejército sobrenatural de muertos vivientes; cuyos cuerpos inertes no podrán ser detenidos. Ésta es «Tormenta de espadas»; la tercera entrega de Canción de hielo y fuego que; además de enriquecer el universo imaginario de la saga; pone a prueba a todos sus personajes principales. Algunos pierden pero otros; como el autor mismo; se robustecen."
    },
    { nombre: "Festin de Cuervos",
      precio: 3000,
      stock: 5,
      image: "img/festin.png",
      descripcion: "La cuarta parte de «Canción de hielo y fuego, pensada en un principio para formar parte, junto con Danza de Dragones, de una sola publicación»",
      sinopsis: "Luego de siglos de guerras descarnadas, los siete poderes que dividen latierra se han diezmado unos a otros hasta alcanzar una difícil tregua.Muy pocos reclamos legítimos existen ya por el Trono de Hierro, y laguerra que ha convertido al mundo en poco más que un desierto al fin haterminado. O eso parece. Pero no pasa mucho tiempo antes de que lossobrevivientes, los proscritos, los renegados y los carroñeros de losSiete Reinos se reúnan.Ahora, como cuervos humanos que acechan un banquete de cenizas, nuevasintrigas y peligrosas alianzas se forman, a la vez que rostrossorprendentes -algunos familiares, otros desconocidos- emergen de unsiniestro crepúsculo de caos y luchas pasadas para asumir los desafíosde los terribles tiempos que se avecinan. Nobles y plebeyos, soldados yhechiceros, asesinos y sabios se unen para hacer valer su vida y susfortunas. Porque en un festín de cuervos muchos son los invitados, perosolo unos pocos logran sobrevivir."
    },
    { nombre: "Danza de Dragones",
      precio: 6000,
      stock: 5,
      image: "img/danza.png",
      descripcion: "La quinta parte de «Canción de hielo y fuego»; la multipremiada saga fantástica que fue adaptada para televisión con el título de «Game of thrones»",
      sinopsis: "Después de una colosal batalla; el futuro de los Siete Reinos pende de un hilo; acuciado por nuevas amenazas que emergen de todos los rincones y en todas direcciones. En el este; Daenerys Targaryen; el último eslabón de la Casa Targaryen; gobierna con sus tres dragones como la reina de una ciudad construida sobre polvo y muerte. Pero Daenerys tiene miles de enemigos; y muchos se han propuesto dar con ella. A medida que ellos la buscan; un joven emprende su propio camino hacia la reina; con un objetivo diametralmente distinto. Tyrion Lannister también se dirige hacia Daenerys mientras escapa de Poniente; donde le han puesto precio a su cabeza. Sus nuevos aliados en esta huida; no obstante; no son los malhechores que aparentan ser; y entre ellos se encuentra aquel que podría impedir que Daenerys tome el control de Poniente para siempre. Mientras tanto; al norte se halla el colosal Muro de Hielo. Allí; Jon Nieve enfrentará el más grande de los retos: sus más acérrimos enemigos no solo forman parte de la guardia que dirige; sino que se extienden más allá de la tenebrosa tierra de las criaturas de hielo."
    },
    { nombre: "El Caballero de los Siete Reinos",
      precio: 2000,
      stock: 5,
      image: "img/caballero.webp",
      descripcion: "Compilado de 3 historias que cuentan las aventuras de Dunk el Alto y Egg su escudero",
      sinopsis: "De los cinco contendientes al poder, uno está muerto y otro está en desventaja; aun así, las guerras arrasan con más violencia que nunca, a la vez que las alianzas se hacen y se deshacen. Joeffrey, de la Casa Lannister, se sienta en el Trono de Hierro: se ha coronado ya como el gobernante de la tierra de los Siete Reinos. Su rival más acérrimo, lord Stannis, yace derrotado y en desgracia, víctima de la celosa hechicera que lo mantiene cautivo en su prisión demoniaca. No obstante Robb, de la Casa Stark, es aún amo y rey de Invernalia, y conspira contra sus más odiados enemigos, los Lannister, incluso a pesar de que mantienen a su hermana cautiva en Desembarco del Rey, donde se encuentra el Trono de Hierro. Mientras tanto, abriéndose paso a través de un continente desangrado, se encuentra la reina exiliada, Daenerys, dueña de los únicos tres dragones que existen en el mundo. A medida que fuerzas opuestas se preparan para el gran enfrentamiento final, un ejército de bárbaros y salvajes irrumpe desde más allá del umbral de la civilización. Al frente de esta fuerza armada se encuentra una horda de los míticos Otros -un ejército sobrenatural de muertos vivientes cuyos inertes cuerpos son imparables-. Mientras el futuro de estas tierras pende de un hilo, nadie descansará sino hasta que los Siete Reinos exploten en una auténtica tormenta de espadas."
    },
    { nombre: "Fuego y sangre",
      precio: 15000,
      stock: 5,
      image: "img/FuegoYSangre.png",
      descripcion: "Este es el primero de dos volúmenes, donde el autor de Juego de tronos nos cuenta, con todo lujo de detalles, la historia de la familia Targaryen",
      sinopsis: "Siglos antes de que tuvieran lugar los acontecimientos que se relatan en «Canción de hielo y fuego», la casa Targaryen, la única dinastía de señores dragón que sobrevivió a la Maldición de Valyria, se asentó en la isla de Rocadragón. Este es el primero de dos volúmenes, donde el autor de Juego de tronos nos cuenta, con todo lujo de detalles, la historia de tan fascinante familia, empezando por Aegon I Targaryen, creador del icónico Trono de Hierro, y seguido por el resto de las generaciones de Targaryen que lucharon enconadamente por conservar el poder y el trono, hasta la llegada de la guerra civil que estuvo a punto de acabar con ellos. ¿Qué pasó realmente durante la Danza de los Dragones? ¿Por qué era tan peligroso acercarse a Valyria después de la Maldición? ¿Cómo era Poniente cuando los dragones dominaban los cielos? Estas, y otras muchas, son las preguntas a las que responde esta monumental crónica, narrada por un erudito maestre de la Ciudadela, que anticipa el ya conocido universo de George R. R. Martin. Fuego y Sangre brindará a los lectores la oportunidad de tener otra visión de la portentosa y sangrienta historia de Poniente. Esta obra, magníficamente ilustrada con ochenta láminas inéditas de Doug Wheatley, se convertirá, sin duda, en una lectura ineludible para todos los fans de la aclamada serie."},
    { nombre: "El mudo de Hielo y Fuego",
      precio: 8000,
      stock: 5,
      image: "img/mundo.jpeg",
      descripcion: "Libro enciclopédico que cuanta la historia de todo el Mundo de Hielo y Fuego hasta los acontecimientos ocurridos en la linea temporal de la saga principal",
      sinopsis: "La historia jamás contada de Poniente y las tierras lejanas, con cientos de páginas repletas de material inédito de George R. R. Martin. Si el pasado es prólogo, entonces la obra maestra de George R. R. Martin garantiza tremenda introducción. Al fin, esa historia ha llegado con «El mundo de hielo y fuego». Bellamente ilustrado, este volumen representa la historia más completa de los Siete Reinos, que reconstruye vívidamente las épicas batallas, las amargas rivalidades y las osadas rebeliones que dieron lugar a los eventos de la gran serie de HBO. Aquí encontramos toda la sabiduría acumulada, la especulación y los cuentos populares heredados de maestres y sabios, incluyendo: imágenes y mapas atodo color con más de 170 piezas originales, árboles genealógicos completos de las casas Stark Lannister y Targaryen y un análisis a fondo de la historia y la cultura de Poniente."
    }
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
              <p class="card-text">${arrayProductos[i].descripcion}</p>
              <button type="button" id="btnVer${i}" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#sinopsisModal">Ver Sinopsis</button>
              <div class="modal fade" id="sinopsisModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Sinopsis</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <p>${arrayProductos[i].sinopsis}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p class="card-text"><small class="text-body-secondary"> Precio: ${arrayProductos[i].precio}</small></p>
              <div class="input-group row input-group-sm mb-3" style="max-width: max-content;">
                <span class="input-group-text" id="inputGroup-sizing-sm">Stock</span>
                <input id="stock${i}" type="number" class="form-control" value="${arrayProductos[i].stock}" aria-label="Username" readonly>
                <span class="input-group-text" id="inputGroup-sizing-sm">Pedir</span>
                <input type="number" class="form-control" id="entrada${i}" placeholder="Cant." aria-label="Server">
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
      document.getElementById(`btnVer${i}`).addEventListener("click", () => {
        mostrarModal(i);
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
        totalCart.innerHTML = "";
      });;
      stockElement.value = stock - cantidad;
      alert(`Producto agregado exitosamente.`);
  } else {
      alert('Cantidad no valida. Debe ser mayor que 0 y menor o igual al stock.');
  }
}
function mostrarModal(index) {
  const myModal = document.getElementById('modal')
  const myInput = document.getElementById(`btnVer${index}`)

  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })

}



writeProductos(productos)