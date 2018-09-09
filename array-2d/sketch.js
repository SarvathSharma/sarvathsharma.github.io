// 2d Array Demo

let rows = 100;
let cols = 100;
let grid;
let cellSize;


function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = create2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
  create2dArray();
}

function displayGrid() {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (grid[x][y]) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function mouseDragged() {
  let xcoord = floor(mouseX/cellSize);
  let ycoord = floor(mouseY/cellSize);

  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord]  = 0;
  }
  else if (grid[xcoord][ycoord] === 0) {
    grid[xcoord][ycoord]  = 1;
  }
}

function keyPressed() {
  grid = create2dArray(cols, rows);
}

function create2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x<cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}
