// Grid-based Assignment: Checkers
// Sarvath Sharma
// April 16, 2018
// Credits: Alex, Dom, Mr, Schellenberg, Youtube and Google
// Attempted to make a checkers game where the AI can play you or a friend
// Sorry was not able to do a good job and finish this game (will try to finish it for the near future)

// The global variables
let playGrid = [// This grid is for the playing portion
  [0, 1, 0, 1, 0, 1, 0, 1, ],
  [1, 0, 1, 0, 1, 0, 1, 0, ],
  [0, 1, 0, 1, 0, 1, 0, 1, ],
  [0, 0, 0, 0, 0, 0, 0, 0, ],
  [0, 0, 0, 0, 0, 0, 0, 0, ],
  [2, 0, 2, 0, 2, 0, 2, 0, ],
  [0, 2, 0, 2, 0, 2, 0, 2, ],
  [2, 0, 2, 0, 2, 0, 2, 0, ],
];

let staticGrid = [// This grid is for the creation of the board
  [0, 1, 0, 1, 0, 1, 0, 1, ],
  [1, 0, 1, 0, 1, 0, 1, 0, ],
  [0, 1, 0, 1, 0, 1, 0, 1, ],
  [1, 0, 1, 0, 1, 0, 1, 0, ],
  [0, 1, 0, 1, 0, 1, 0, 1, ],
  [1, 0, 1, 0, 1, 0, 1, 0, ],
  [0, 1, 0, 1, 0, 1, 0, 1, ],
  [1, 0, 1, 0, 1, 0, 1, 0, ],
];

let rows = 8;
let cols = 8;
let cellSize, player, comp;
let turn, state, redMove, blackMove;
let redLeft, blackLeft, redWon, blackWon;
let topRight, topLeft, bottomRight, bottomLeft;
let killMoveRedLeft, killMoveRedRight, killMoveBlackLeft, killMoveBlackRight;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = height / rows;
  turn = 0; // Whose turn is it (0 = red, 1 = black)
  state = 0;
  redMove = 0; // To allow the red piece to move
  blackMove = 0; // To allow the black piece to move
  // Variables to check who wins
  redLeft = 0;
  blackLeft = 0;
  redWon = false;
  blackWon = false;
}

function draw() {
  if (state === 0) {
    startScreen();
  }
  if (state === 1) {
    background(255);
    displayGrid();
    placePieces();
    checkWhoWon();
  }
  if (state === 2) {
    computerModeNotDone();
  }
  if (state === 3) {
    winScreen();
  }
  if (state === 4) {
    winScreen();
  }
}

function winScreen() {
  // This will show a screen depending on who won
  if (redWon) {
    background(255, 0, 0);
    fill(0);
    textSize(95);
    text("RED WON", width/2-300, height/2);
  }
  if (blackWon) {
    background(0);
    fill(255);
    textSize(95);
    text("BLACK WON", width/2-300, height/2);
  }
}

function computerModeNotDone() {
  // This runs the second portion of the game
  background(0);
  fill(255);
  textSize(95);
  text("SORRY NOT DONE", width/2-400, height/2);
}

function startScreen() {
  // This function is made to develop the start screen
  background(255);
  fill(0);
  textSize(85);
  text("CHECKERS", width / 2 - 300, height / 2);
  textSize(28);
  text("Press F to play against a friend", width / 2 - 300, height / 2 + 150);
  text("Press A to play against the computer (coming soon)", width / 2 - 325, height / 2 + 200);
}

function displayGrid() {
  // This function allows the board to be created
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (staticGrid[x][y] === 0) {
        // The light squares
        fill(245, 222, 179);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else {
        // The dark squares
        fill(222, 184, 135);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

function placePieces() {
  // This function places the pieces on the board
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (playGrid[y][x] === 1) {
        // Places a black circle on the spot where a 1 is on the play grid
        fill(0);
        player = ellipse(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, 40, 40);
      }
      if (playGrid[y][x] === 2) {
        // Places a red circle on the spot where a 2 is on the play grid
        fill(255, 0, 0);
        comp = ellipse(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, 40, 40);
      }
      if (playGrid[y][x] === 3) {
        // Places a silver circle on the spot where a 3 is on the play grid
        fill(192, 192, 192);
        ellipse(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, 40, 40);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === 70) {
    // When the 'f' key is clicked the game will start
    state = 1;
  }
  if (keyCode === 65) {
    // When the 'a' keys is clicked the game will start
    state = 2;
  }
}

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (turn === 0) {
    if (redMove === 0) {
      if (playGrid[ycoord][xcoord] === 2) {
        if (playGrid[floor(ycoord - 1)][floor(xcoord + 1)] === 0) {
          // Checks to see an empty spot on the top right
          console.log("empty top right");
          console.log("x: " + floor(xcoord + 1));
          console.log("y: " + floor(ycoord - 1));
          console.log("piece");
          topRight, playGrid[floor(ycoord - 1)][floor(xcoord + 1)] = 3;
        }
        if (playGrid[floor(ycoord - 1)][floor(xcoord - 1)] === 0) {
          // Checks to see for an empty spot on the top left
          console.log("empty top left");
          console.log("x: " + floor(xcoord - 1));
          console.log("y: " + floor(ycoord - 1));
          console.log("piece");
          topLeft, playGrid[floor(ycoord - 1)][floor(xcoord - 1)] = 3;
        }
        if (playGrid[floor(ycoord - 1)][floor(xcoord - 1)] === 1 && playGrid[floor(ycoord - 2)][floor(xcoord - 2)] === 0) {
          // Checks if you can attack from the top left
          killMoveRedLeft, playGrid[floor(ycoord - 2)][floor(xcoord - 2)] = 3;
        }
        if (playGrid[floor(ycoord - 1)][floor(xcoord + 1)] === 1 && playGrid[floor(ycoord - 2)][floor(xcoord + 2)] === 0) {
          // Checks if you can attack from the top right
          killMoveRedRight, playGrid[floor(ycoord - 2)][floor(xcoord + 2)] = 3;
        }
      }
      redMove = 1;
    }
    if (redMove === 1) {
      if (topRight === 3) {
        movePiece(xcoord, ycoord);
      }
      if (topLeft === 3) {
        movePiece(xcoord, ycoord);
      }
      if (killMoveRedLeft === 3) {
        movePiece(xcoord, ycoord);
      }
      if (killMoveRedRight === 3) {
        movePiece(xcoord, ycoord);
      }
    }
  }
  if (turn === 1) {
    if (blackMove === 0) {
      if (playGrid[ycoord][xcoord] === 1) {
        if (playGrid[floor(ycoord + 1)][floor(xcoord + 1)] === 0) {
          // Checks to see an empty spot on the botttom right
          console.log("empty bottom right");
          console.log("x: " + floor(xcoord + 1));
          console.log("y: " + floor(ycoord + 1));
          console.log("piece");
          bottomRight, playGrid[floor(ycoord + 1)][floor(xcoord + 1)] = 3;
        }
        if (playGrid[floor(ycoord + 1)][floor(xcoord - 1)] === 0) {
          // Checks to see an empty spot on the bottom left
          console.log("empty bottom left");
          console.log("x: " + floor(xcoord - 1));
          console.log("y: " + floor(ycoord + 1));
          console.log("piece");
          bottomLeft, playGrid[floor(ycoord + 1)][floor(xcoord - 1)] = 3;
        }
        if (playGrid[floor(ycoord + 1)][floor(xcoord - 1)] === 2 && playGrid[floor(ycoord + 2)][floor(xcoord - 2)] === 0) {
          // Checks if you can attack from the bottom left
          killMoveBlackLeft, playGrid[floor(ycoord + 2)][floor(xcoord - 2)] = 3;
        }
        if (playGrid[floor(ycoord + 1)][floor(xcoord + 1)] === 2 && playGrid[floor(ycoord + 2)][floor(xcoord + 2)] === 0) {
          // Checks if you can attack from the bottom right
          killMoveBlackRight, playGrid[floor(ycoord + 2)][floor(xcoord - 2)] = 3;
        }
        blackMove = 1;
      }
    }
    if (blackMove === 1) {
      if (bottomLeft === 3) {
        movePiece(xcoord, ycoord);
      }
      if (bottomRight === 3) {
        movePiece(xcoord, ycoord);
      }
      if (killMoveBlackRight === 3) {
        movePiece(xcoord, ycoord);
      }
      if (killMoveBlackLeft === 3) {
        movePiece(xcoord, ycoord);
      }
    }
  }
}

function movePiece(x, y) {
  // In this function the location input is taken and allows the pieces to move around the board
  // The new location will be replaced by the piece and the old locations will be empty
  // The function will end up replacing the 3s with either a 1 or 2 or 0 and allow the game to move along

  if (topRight === 3 && mouseIsPressed) {
    playGrid[floor(y - 1)][floor(x + 1)] = 2;
    playGrid[floor(y - 1)][floor(x - 1)] = 0;
    playGrid[floor(y)][floor(x)] = 0;
    turn = 1;
  }
  if (topLeft === 3 && mouseIsPressed) {
    playGrid[floor(y - 1)][floor(x - 1)] = 2;
    playGrid[floor(y - 1)][floor(x + 1)] = 0;
    playGrid[floor(y)][floor(x)] = 0;
    turn = 1;
  }
  if (bottomRight === 3 && mouseIsPressed) {
    playGrid[floor(y + 1)][floor(x + 1)] = 1;
    playGrid[floor(y + 1)][floor(x - 1)] = 0;
    playGrid[floor(y)][floor(x)] = 0;
    turn = 0;
  }
  if (bottomLeft === 3 && mouseIsPressed) {
    playGrid[floor(y + 1)][floor(x - 1)] = 1;
    playGrid[floor(y + 1)][floor(x + 1)] = 0;
    playGrid[floor(y)][floor(x)] = 0;
    turn = 0;
  }
  if (killMoveRedRight === 3 && mouseIsPressed) {
    playGrid[floor(y - 2)][floor(x + 2)] = 2;
    playGrid[floor(y - 1)][floor(x + 1)] = 0;
    playGrid[floor(y)][floor(x)] = 0;
    turn = 1;
  }
  if (killMoveRedLeft === 3 && mouseIsPressed) {
    playGrid[floor(y - 2)][floor(x - 2)] = 2;
    playGrid[floor(y - 1)][floor(x - 1)] = 0;
    playGrid[floor(y)][floor(x)] = 0;
    turn = 1;
  }
  if (killMoveBlackLeft === 3 && mouseIsPressed) {
    playGrid[floor(y + 2)][floor(x - 2)] = 1;
    playGrid[floor(y + 1)][floor(x - 1)] = 0;
    playGrid[floor(y)][floor(x)] = 0;
    turn = 0;
  }
  if (killMoveBlackRight === 3 && mouseIsPressed) {
    playGrid[floor(y + 2)][floor(x - 2)] = 1;
    playGrid[floor(y + 1)][floor(x + 1)] = 0;
    playGrid[floor(y)][floor(x)] = 0;
    turn = 0;
  }
}

function checkWhoWon() {
  // This function checks who won
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (playGrid[y][x] === 1) {
        // Checks how many black pieces are left
        blackLeft += 1;
      }
      if (playGrid[y][x] === 2) {
        // Checks how many red pieces are left
        redLeft += 1;
      }
    }
  }
  if (redLeft === 0) {// If there are no red pieces, black won
    blackWon = true;
    state = 3;
  }
  else if (blackLeft === 0) {// If there are no black pieces, red won
    redWon = true;
    state = 4;
  }
}
