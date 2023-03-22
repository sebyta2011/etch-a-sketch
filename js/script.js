const contenedor = document.querySelector("#contenedor");
const crearDiv = document.createElement('div');

let i = 20;
function linea() {
    for(a=0; a < i; a++) {
        const crearContenedor = document.createElement("div");
        crearContenedor.classList.add('fila');
        contenedor.appendChild(crearContenedor);
            for(b=0; b < i; b++) {
                const crearDiv = document.createElement('div')
                crearDiv.classList.add('tile')
                crearContenedor.appendChild(crearDiv)
            }
    }
}

function colorBlack(e) {
    e.target.style.backgroundColor = "black";
}

linea();

const gridTiles = document.querySelectorAll(".tile");

gridTiles.forEach(tile => tile.addEventListener('mouseover', colorBlack));



// tengo: 
// una funcion para crear una linea de cuadraditos dado i linea(i)
//     necesito: que se cree un contenedor flex-direction row para tener a los cuadraditos creados por la funcion
// una funcion para crear una columna de cuadraditos dado i columna(i)
//     necesito: que se cree un contenedor flex-direction column para tener a los cuadraditos creados por la funcion

// quiero:
// linea(i) loopee i cantidad de veces, y en cada loop tiene que llamar a columna(i) para que loopee i-1 veces

// function linea() {
//     for(i=0; i<16; ++i) {
//         const gridTileCreate = document.createElement('div');
//         const gridRowCreate
//     }}