const contenedor = document.querySelector("#contenedor");
const crearDiv = document.createElement('div');

let i = prompt('Desired grid size?');
function grid() {
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

grid();

const gridTiles = document.querySelectorAll(".tile");
gridTiles.forEach(tile => tile.addEventListener('mouseover', colorBlack));

const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener('click', function newGrid() {
    let i = prompt("Desired grid size?");
    const contenedor = document.querySelector("#contenedor");
    document.querySelectorAll(".fila").forEach(fila => fila.remove());
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
    const gridTiles = document.querySelectorAll(".tile");
    gridTiles.forEach(tile => tile.addEventListener('mouseover', colorBlack));
});


