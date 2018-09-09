// Grid-based assignment
// Sarvath Sharma
// April 10, 2018

let rows = 3;
let cols = 3;
let cellSize, turn;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = height / rows;
  turn = 0;
}

function draw() {
  background(0);
  displayGrid();
}

function displayGrid() {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      fill(255);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (turn === 0) {
    fill(0,255,0);
  }
}
