const DEFAULT_SIZE = 16


let currentSize = DEFAULT_SIZE;

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


/* Build grid inside container */
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


/* Canvas size buttons */
eight_btn.addEventListener('click', e => {
  currentSize = 8;
  buildGrid(currentSize);
  resetGridLines();
});

sixteen_btn.addEventListener('click', e => {
  currentSize = 16;
  buildGrid(currentSize);
  resetGridLines();
});

threetwo_btn.addEventListener('click', e => {
  currentSize = 32;
  buildGrid(currentSize);
  resetGridLines();
});

sixfour_btn.addEventListener('click', e => {
  currentSize = 64;
  buildGrid(currentSize);
  resetGridLines();
});


/* Toggle grid lines on and off */
gridOn_btn.addEventListener('input', function(e) {
  gridLineStatus = "on";
  const gridLines = document.querySelectorAll('.defaultGridBlock');

  gridLines.forEach(border => {
    border.style.border = '1px solid var(--gridline-color)';
  });
})

gridOff_btn.addEventListener('input', function(e) {
  gridLineStatus = "off";
  const gridLines = document.querySelectorAll('.defaultGridBlock');

  gridLines.forEach(border => {
    border.style.border = '0px solid var(--gridline-color)';
  });
})


/* Reset grid lines to on when changing canvas size */
function resetGridLines() {
  let resetLines = document.getElementsByName('switch-one');

  for(let i = 0; i < resetLines.length; i++) {
    resetLines[0].checked = true;
  }
}



/* Clear canvas button */
function clearCanvas() {
  /*set divs to default color*/

}


const DEFAULT_COLOR = "black";
let changeColor = DEFAULT_COLOR;

let colors = ["black", "red", "orange", "yellow", "green", "blue", "pink", "purple"];


container_div.addEventListener('mousedown', function(e) {
  if(e.target.matches('.defaultGridBlock')) {
    e.target.classList.add('targetColor')
  }
})