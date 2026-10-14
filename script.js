const sketchContainer = document.querySelector("#sketch-container");

function createGrid(size) {
  sketchContainer.innerHTML = ""; 

  const totalSquares = size * size;
  const squareSize = 500 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add the hover event listener to leave a pen trail
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#111111"; // Changes color when mouse enters
    });

    sketchContainer.appendChild(square);
  }
}

createGrid(16);
square.addEventListener("mouseenter", () => {
  square.style.backgroundColor = "#111111"; // Or square.classList.add("active");
});
square.addEventListener('mouseover', () => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
});