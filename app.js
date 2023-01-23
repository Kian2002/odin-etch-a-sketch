const grid = document.getElementById("container");
const gridSize = document.getElementById("selection-size");

const makeRows = (size) => {
  grid.style.setProperty("--grid-column", size);
  grid.style.setProperty("--grid-row", size);
  for (let i = 0; i < size * size; i++) {
    let c = document.createElement("div");
    c.addEventListener("mouseover", activate);
    grid.appendChild(c).className = "container-item";
  }
};

const activate = (e) => {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);

  e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
};

const dragHandler = () => {
  document.getElementById("slider-number").innerText =
    gridSize.value + " X " + gridSize.value;
};

const sizeHandler = () => {
  makeRows(gridSize.value);
};

makeRows(gridSize.value);
