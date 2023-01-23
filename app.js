const grid = document.getElementById("container");

const makeRows = (col, row) => {
  grid.style.setProperty("--grid-column", col);
  grid.style.setProperty("--grid-row", row);
  for (let i = 0; i < col * row; i++) {
    let c = document.createElement("div");
    c.innerText = i + 1;
    grid.appendChild(c).className = "container-item";
  }
};
document.onload(makeRows(16, 16));
