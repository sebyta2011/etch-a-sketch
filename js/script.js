const gridContainer = document.querySelector('#gridContainer');
const gridTileCreate = document.createElement('div');


function gridSize() {
    for(i=0; i<16; ++i) {
        const gridTileCreate = document.createElement('div');
        gridTileCreate.classList.add('gridTile');
        gridContainer.appendChild(gridTileCreate);
    }
}

function colorBlack(e) {
    e.target.style.backgroundColor = "black";
}

gridSize();

const gridTiles = document.querySelectorAll(".gridTile");

gridTiles.forEach(gridTile => gridTile.addEventListener('mouseover', colorBlack));

