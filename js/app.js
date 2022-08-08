function cambiarTitulo(){
    console.log('desde la funcion cambiar titulo');
    //traer un elemento del html
    let titulo = document.querySelector('h1');
    // let titulo = document.getElementById('titulo'); retorna un objeto
    // let titulo = document.getElementsByClassName('container'); retorna un arreglo de objetos
    // let titulo = document.getElementsByTagName('h1'); //retorna un arreglo de objetos
    console.log(titulo);
    titulo.innerHTML = 'Nuevo titulo de prueba';
    titulo.className = 'display-4 tituloPrincipal'
}