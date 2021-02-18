const mainDiv = document.querySelector(".grid-container");
let div = document.createElement("div");
const reset = document.querySelector(".reset");
div.classList.add("div-el");

mainDiv.style.gridTemplateColumns = "repeat(16, 1fr)";
mainDiv.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 1; i <= 256; i++) {
  mainDiv.appendChild(div.cloneNode(true));
}

hover();

reset.addEventListener("click", () => {
  resetGrid();
});

function resetGrid() {
  divs.forEach(div => {
    div.style.backgroundColor = "white";
  });

  do {
    var size = prompt("Enter new size from 1 - 64");
    parseInt(size);
  } while (size > 64 || !size);

  if (size <= 64) {
    mainDiv.innerHTML = ""; // clear mainDiv from all childs
    mainDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    size *= size;
    for (let i = 1; i <= size; i++) {
      mainDiv.appendChild(div.cloneNode(true));
    }
    hover();
  }
}

function hover() {
  divs = document.querySelectorAll(".grid-container > div");
  divs.forEach(el => {
    el.addEventListener("mouseover", () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      el.style.backgroundColor = "#" + randomColor;
    });
  });
}
