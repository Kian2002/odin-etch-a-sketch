const grid = document.getElementById("container");

const makeRows = (col, row) => {
  grid.style.setProperty("--grid-column", col);
  grid.style.setProperty("--grid-row", row);
  for (let i = 0; i < col * row; i++) {
    let c = document.createElement("div");
    c.addEventListener("mousedown", activate);
    c.addEventListener("mouseleave", activate);
    grid.appendChild(c).className = "container-item";
  }
};

const activate = (e) => {
  console.log(e);
  e.target.style.backgroundColor = "black";
};

window.onload = () => {
  makeRows(16, 16);
};
