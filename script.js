const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

const container_div = document.getElementById("container");
const defaultGridBlock_div =
  document.getElementsByClassName("defaultGridBlock");

const eight_btn = document.getElementById("eight");
const sixteen_btn = document.getElementById("sixteen");
const thirtytwo_btn = document.getElementById("thirtytwo");
const sixtyfour_btn = document.getElementById("sixtyfour");

const gridOn_btn = document.getElementById("radio-one");
const gridOff_btn = document.getElementById("radio-two");

const clear_btn = document.getElementById("clear");
const eraser_btn = document.getElementById("eraser");

// Show active canvas size when page loads
sixteen_btn.style.backgroundColor = "var(--clr-btnon";

// Build grid inside container
function buildGrid(size) {
  container_div.innerHTML = "";
  container_div.classList.remove("defaultGridBlock");
  container_div.style.setProperty("--grid-rows", size);
  container_div.style.setProperty("--grid-cols", size);

  for (let i = 0; i < size * size; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.className = "defaultGridBlock";
    container_div.appendChild(gridBlock);
  }
}

buildGrid(currentSize);

// Canvas size buttons
function handleCanvasSizeButtonClick(e, size) {
  currentSize = size;
  buildGrid(currentSize);
  resetGridLines();

  eight_btn.style.backgroundColor = "var(--clr-btn";
  sixteen_btn.style.backgroundColor = "var(--clr-btn";
  thirtytwo_btn.style.backgroundColor = "var(--clr-btn";
  sixtyfour_btn.style.backgroundColor = "var(--clr-btn";
  e.target.style.backgroundColor = "var(--clr-btnon)";
}

eight_btn.addEventListener("click", (e) => {
  handleCanvasSizeButtonClick(e, 8);
});

sixteen_btn.addEventListener("click", (e) => {
  handleCanvasSizeButtonClick(e, 16);
});

thirtytwo_btn.addEventListener("click", (e) => {
  handleCanvasSizeButtonClick(e, 32);
});

sixtyfour_btn.addEventListener("click", (e) => {
  handleCanvasSizeButtonClick(e, 64);
});

// Toggle grid lines on and off
gridOn_btn.addEventListener("input", function (e) {
  gridLineStatus = "on";
  const gridLines = document.querySelectorAll(".defaultGridBlock");

  gridLines.forEach((border) => {
    border.style.border = "1px solid var(--gridline-color)";
  });
});

gridOff_btn.addEventListener("input", function (e) {
  gridLineStatus = "off";
  const gridLines = document.querySelectorAll(".defaultGridBlock");

  gridLines.forEach((border) => {
    border.style.border = "0px solid var(--gridline-color)";
  });
});

// Reset grid lines to on when changing canvas size
function resetGridLines() {
  let resetLines = document.getElementsByName("switch-one");

  for (let i = 0; i < resetLines.length; i++) {
    resetLines[0].checked = true;
  }
}

// Clear canvas button
function clearCanvas() {
  buildGrid(currentSize);
}

clear_btn.addEventListener("click", () => {
  clearCanvas();
  resetGridLines();
});

// Set drawing color
const DEFAULT_COLOR = "black";
let currentColor = DEFAULT_COLOR;

const buttonColors = [
  { id: "black", color: "black" },
  { id: "red", color: "red" },
  { id: "orange", color: "orange" },
  { id: "yellow", color: "yellow" },
  { id: "green", color: "green" },
  { id: "blue", color: "blue" },
  { id: "pink", color: "pink" },
  { id: "white", color: "white" },
  { id: "purple", color: "purple" },
  { id: "grey", color: "grey" },
];

buttonColors.forEach(({ id, color }) => {
  const colorBtn = document.getElementById(id);
  colorBtn.addEventListener("click", () => (currentColor = color));
});

// Draw on canvas by clicking and holding mouse
let mouseDown = 0;
document.body.onmousedown = () => (mouseDown = 1);
document.body.onmouseup = () => (mouseDown = 0);

container_div.addEventListener("mouseover", function (e) {
  if (mouseDown === 1) {
    if (e.target.matches(".defaultGridBlock")) {
      e.target.style.backgroundColor = currentColor;
    }
  }
});

container_div.addEventListener("click", function (e) {
  if (e.target.matches(".defaultGridBlock")) {
    e.target.style.backgroundColor = currentColor;
  }
});
