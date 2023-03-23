//First grid
const contenedor = document.querySelector("#contenedor");
const crearDiv = document.createElement('div');

let i = prompt('Write your desired square size (one value only)');
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
    } checkBrush()
}

grid();

//Black brush
function black(e) {
    e.target.style.backgroundColor = "black";
}

//Rainbow brush
function rainbow(e) {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * max - min + 1);
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`;
    e.target.style.backgroundColor = rgb;
}

//Check brushes

const blackBrush = document.getElementById('blackBrush');
blackBrush.addEventListener('change', checkBrush);

const rainbowBrush = document.getElementById('rainbowBrush');
rainbowBrush.addEventListener('change', checkBrush);


function checkBrush(e) {
    const gridTiles = document.querySelectorAll(".tile");
    if(document.getElementById('blackBrush').checked) {
        gridTiles.forEach(tile => tile.removeEventListener('mouseover', rainbow));
        gridTiles.forEach(tile => tile.addEventListener('mouseover', black));
    }
    else if(document.getElementById('rainbowBrush').checked) {
        gridTiles.forEach(tile => tile.removeEventListener('mouseover', black))
        gridTiles.forEach(tile => tile.addEventListener('mouseover', rainbow));
    }
}


//Resize page
const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener('click', function newGrid() {
    let i = prompt("Write your new desired square size");
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
    checkBrush()
});
