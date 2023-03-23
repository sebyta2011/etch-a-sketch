//First grid
const contenedor = document.querySelector("#contenedor");
const crearDiv = document.createElement('div');

let i = prompt('Desired grid size?');
function grid() {
    for(a=0; a < i; a++) {
        const crearContenedor = document.createElement("div");
        crearContenedor.classList.add('fila');
        contenedor.appendChild(crearContenedor);
            for(d=0; d < i; d++) {
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

//Black brush
const gridTiles = document.querySelectorAll(".tile");
gridTiles.forEach(tile => tile.addEventListener('mouseover', colorBlack));

//Rainbow brush
function rainbow(e) {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * max - min + 1);
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`;
e.target.style.backgroundColor = rgb;
}

//Resize page
const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener('click', function newGrid() {
    let i = prompt("Desired grid size?");
    const contenedor = document.querySelector("#contenedor");
    document.querySelectorAll(".fila").forEach(fila => fila.remove());
    for(a=0; a < i; a++) {
        const crearContenedor = document.createElement("div");
        crearContenedor.classList.add('fila');
        contenedor.appendChild(crearContenedor);
            for(d=0; d < i; d++) {
                const crearDiv = document.createElement('div')
                crearDiv.classList.add('tile')
                crearContenedor.appendChild(crearDiv)
            }
    }
    const gridTiles = document.querySelectorAll(".tile");
    gridTiles.forEach(tile => tile.addEventListener('mouseover', colorBlack));
});