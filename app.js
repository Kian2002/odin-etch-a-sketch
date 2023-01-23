const grid = document.getElementById("container");
const gridSize = document.getElementById("selection-size");
const newColor = document.getElementById("selections-color");
let currentMode = "colorMode";
let currentColor = "#333";

newColor.oninput = (e) => {
  currentColor = e.target.value;
};

const makeRows = (size) => {
  grid.style.setProperty("--grid-column", size);
  grid.style.setProperty("--grid-row", size);
  for (let i = 0; i < size * size; i++) {
    let c = document.createElement("div");
    c.addEventListener("mouseover", changeColor);
    grid.appendChild(c).className = "container-item";
  }
};

const changeMode = (newMode) => {
  currentMode = newMode;
};

const changeColor = (e) => {
  if (currentMode === "rainbowMode") {
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  } else if (currentMode === "colorMode") {
    e.target.style.backgroundColor = currentColor;
  } else if (currentMode === "eraserMode") {
    e.target.style.backgroundColor = "#FFF";
  }
};

const dragHandler = () => {
  document.getElementById("slider-number").innerText =
    gridSize.value + " X " + gridSize.value;
};

const clearGrid = (x) => {
  document.querySelectorAll(".container-item").forEach((item) => {
    item.style.backgroundColor = "#FFF";
  });
};

const sizeHandler = () => {
  makeRows(gridSize.value);
};

makeRows(gridSize.value);
