//agregar manejador de eventos
let btnVerMas = document.getElementById("btnVerMas");
// btnVerMas.addEventListener('click', ()=>{ verMas(parametro)}) ;// cuando una funcion tiene parametros envolverla con una funcion anonima
btnVerMas.addEventListener("click", verMas);

function cambiarTitulo() {
  console.log("desde la funcion cambiar titulo");
  //traer un elemento del html
  let titulo = document.querySelector("h1");
  // let titulo = document.getElementById('titulo'); retorna un objeto
  // let titulo = document.getElementsByClassName('container'); retorna un arreglo de objetos
  // let titulo = document.getElementsByTagName('h1'); //retorna un arreglo de objetos
  console.log(titulo);
  titulo.innerHTML = "Nuevo titulo de prueba";
  titulo.className = "display-4 tituloPrincipal";
}

function verMas() {
  console.log("desde la funcion ver mas");
  //traer el elemento padrea (section)
  let sectionPadre = document.getElementById("noticia");
  //crear el elemento nuevo html (nodo/objeto)
  let parrafoNuevo = document.createElement("p"); //<p></p>
  //preparar el elemento
  parrafoNuevo.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus dolorem quaerat quas consequatur, id suscipit eaque recusandae quos perspiciatis aliquid, et officiis nobis tenetur totam ipsa quo esse possimus! Expedita minus quos fuga porro dolor doloribus sequi. Molestias consectetur sed quaerat voluptate enim velit consequuntur maxime veniam sit a exercitationem voluptatibus vitae unde laborum, numquam assumenda excepturi debitis facilis vero? Ex deleniti aperiam porro labore cum ipsa. Et odit sit nulla architecto repudiandae accusamus ducimus omnis totam sint repellendus perspiciatis voluptas dolores eveniet quas enim quia, quaerat deserunt ea vero reiciendis, vel nihil asperiores impedit excepturi! Eligendi cupiditate inventore similique nesciunt temporibus necessitatibus? Fugiat molestias dignissimos tempora voluptatibus inventore nisi quibusdam sit iusto dolore impedit repellendus saepe totam aut culpa et, sunt est fuga id sequi quae, nemo quia? Sequi nobis, reiciendis illum voluptatem maxime accusamus est incidunt, perspiciatis expedita laborum quisquam praesentium, beatae iusto eveniet aspernatur sed nam voluptatibus. Eveniet nobis quae placeat reprehenderit dolorem odio perspiciatis, dicta ullam aliquid eum. Architecto repellat vel debitis magnam voluptatum est iusto eius quae illum, laudantium officia perspiciatis. Esse, eaque in! Minus quas porro dolorum tempora voluptas? Soluta ratione, nostrum dolore quibusdam, sed quisquam consequatur ab temporibus ipsam pariatur atque debitis!";
  parrafoNuevo.className = "lead";
  //insertar el nuevo elemento en el DOM
  // sectionPadre.appendChild(parrafoNuevo); //agrega el nodo hijo al final
  // sectionPadre.prepend(parrafoNuevo); //agrega el nodo hijo al principio
  sectionPadre.insertBefore(parrafoNuevo, btnVerMas);

  //modificar el boton
  btnVerMas.innerHTML = "Ocultar";
  btnVerMas.className = "btn btn-outline-danger";

  //nota para acceder al texto de un input
  console.log(document.getElementById("buscador").value);
}
