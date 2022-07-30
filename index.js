const container_div = document.getElementById('container');

//Create blocks to place in grid
function makeGrid(blocks) {
  let grid = blocks * 2;

  for(let i = 0; i < grid; i++) {
    let gridBlock = document.createElement('div');
    gridBlock.className = "defaultGridBlock";
    container_div.appendChild(gridBlock);
  }
}

/*
function () {
  container_div.style.gridTemplateColumns();
  container_div.style.gridTemplateRows();
}*/
/*
function buildGrid(columns, rows) {
  container_div.style.gridTemplateColumns(columns + "fr");
  container_div.style.gridTemplateRows(rows);
}*/

function buildGrid(rows, cols) {
  container_div.style.setProperty('--grid-rows', rows);
  container_div.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let gridBlock = document.createElement('div');
    gridBlock.className = "defaultGridBlock";
    container_div.appendChild(gridBlock);
  }
}

buildGrid(16, 16);
