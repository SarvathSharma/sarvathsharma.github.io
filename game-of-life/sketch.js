// 2d Array Demo

let rows = 30;
let cols = 30;
let grid;
let cellSize;
let autoPlay;
let number;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width / cols;
  grid = create2dArray(cols, rows);
  autoPlay = false;
  number = 10;
}

function draw() {
  background(255);
  displayGrid();
  playAgain();
  create2dArray();
}

function change() {
  let next = createEmpty2dArray(cols, rows);
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows) {
            neighbors += grid[x + i][y + j];
          }
        }
      }
      neighbors -= grid[x][y];
      // apply rules on game
      if (grid[x][y] === 1) {// alive, but dead on inside
        if (neighbors === 2 || neighbors === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
      else {
        if (neighbors === 3) {
          next[x][y] = 1;
        }
        else{
          next[x][y] = 0;
        }
      }
    }
  }
  grid = next;
}

function playAgain() {
  if (autoPlay && frameCount % number === 0) {
    change();
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
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

function mouseClicked() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord] = 0;
  }
  else if (grid[xcoord][ycoord] === 0) {
    grid[xcoord][ycoord] = 1;
  }
}

function keyPressed() {
  if (keyCode === 82) {
    grid = create2dArray(cols, rows);
  }
  else if (keyCode === 32) {
    change();
  }
  if (keyCode === 87) {
    grid = createEmpty2dArray(cols, rows);
  }
  if (keyCode === 65) {
    autoPlay = !autoPlay;
  }
  if (keyCode === 70) {
    number -= 1;
  }
}

function create2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
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
