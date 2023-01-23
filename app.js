const grid = document.getElementById("container");

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

window.onload = () => {
  let gridSize = prompt("Enter grid size: 1 - 100");

  while (gridSize > 100) {
    gridSize = prompt("Enter grid size: 1 - 100");
  }

  makeRows(gridSize);
};
