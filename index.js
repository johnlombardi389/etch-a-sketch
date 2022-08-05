const DEFAULT_SIZE = 16

let currentSize = DEFAULT_SIZE;

const container_div = document.getElementById('container');
/* Buttons */
const eight_btn = document.getElementById('eight');
const sixteen_btn = document.getElementById('sixteen');
const threetwo_btn = document.getElementById('threetwo');
const sixfour_btn = document.getElementById('sixfour');


function buildGrid(size) {
  container_div.innerHTML = '';
  container_div.classList.remove('defaultGridBlock');
  container_div.style.setProperty('--grid-rows', size);
  container_div.style.setProperty('--grid-cols', size);

  for (let i = 0; i < (size * size); i++) {
    const gridBlock = document.createElement('div');
    gridBlock.className = "defaultGridBlock";
    container_div.appendChild(gridBlock);
  }
}

buildGrid(currentSize);

eight_btn.addEventListener('click', e => {
  currentSize = 8;
  buildGrid(currentSize);
});

sixteen_btn.addEventListener('click', e => {
  currentSize = 16;
  buildGrid(currentSize);
});

threetwo_btn.addEventListener('click', e => {
  currentSize = 32;
  buildGrid(currentSize);
});

sixfour_btn.addEventListener('click', e => {
  currentSize = 64;
  buildGrid(currentSize);
});

