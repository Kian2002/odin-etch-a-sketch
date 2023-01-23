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
  e.target.style.backgroundColor = "black";
};

window.onload = () => {
  let gridSize = prompt("Enter grid size: 1 - 100");

  while (gridSize > 100) {
    gridSize = prompt("Enter grid size: 1 - 100");
    console.log("log");
  }

  makeRows(gridSize);
};
