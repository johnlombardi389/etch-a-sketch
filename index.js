const container_div = document.getElementById('container');

function makeGrid(blocks) {
  let grid = blocks * 2;

  for(let i = 0; i < grid; i++) {
    let gridBlock = document.createElement('div');
    gridBlock.className = "defaultGridBlock";
    document.getElementById('container').appendChild(gridBlock);
  }
}

/*
function () {
  container_div.style.gridTemplateColumns();
  container_div.style.gridTemplateRows();
}*/
