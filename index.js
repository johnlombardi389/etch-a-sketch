const DEFAULT_SIZE = 16
const DEFAULT_COLOR = "";

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

const container_div = document.getElementById('container');
const defaultGridBlock_div = document.getElementsByClassName('defaultGridBlock');

const eight_btn = document.getElementById('eight');
const sixteen_btn = document.getElementById('sixteen');
const threetwo_btn = document.getElementById('threetwo');
const sixfour_btn = document.getElementById('sixfour');

const gridOn_btn = document.getElementById('radio-one');
const gridOff_btn = document.getElementById('radio-two');

const clear_btn = document.getElementById('clear');
const eraser_btn = document.getElementById('eraser');


function buildGrid(size) {
  container_div.innerHTML = '';
  container_div.classList.remove('defaultGridBlock');
  container_div.style.setProperty('--grid-rows', size);
  container_div.style.setProperty('--grid-cols', size);

  for (let i = 0; i < (size * size); i++) {
    const gridBlock = document.createElement('div');
    gridBlock.className = "defaultGridBlock";
    /*gridBlock.setAttribute('id', 'gridLines');*/
    container_div.appendChild(gridBlock);
  }
}

gridOn_btn.addEventListener('input', function(e) {
  const gridLines = document.querySelectorAll('.defaultGridBlock');

  gridLines.forEach(border => {
    border.style.border = '1px solid var(--gridline-color)';
  });
})

gridOff_btn.addEventListener('input', function(e) {
  const gridLines = document.querySelectorAll('.defaultGridBlock');

  gridLines.forEach(border => {
    border.style.border = '0px solid var(--gridline-color)';
  });
})

buildGrid(currentSize);

/* Canvas size buttons */
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

/* Clear canvas button */
function clearCanvas() {
  /*set divs to default color*/

}