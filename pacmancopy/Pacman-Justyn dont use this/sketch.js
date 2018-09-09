// Pacman - Major Project//
// Justyn Pollard and Sarvath //
// May 24, 2018 //
// In general Justyn and Sarvath worked on the project together and split the responsibilites between each other
//
//Sarvath was responsible for the making of the Menu, Pacman, Scores and the aesthetics. Sarvath helped with the development of
//the AI of the ghosts and the making of the grid.
//
//Justyn was responsible for the making of the ghosts AI, lives, and the power pellets of the game. Justyn worked on the movement
//of pacman and the creation of the GIF.
//
//Justyn and Sarvath both came up with the code to create the movement for pacman, the ghosts and the high score storage. Overall we were
//able to achieve all our need to have: Pacman moving around the grid, the basic AI for the ghosts, a high score storage system, and the
//overall design of the game looking like the original game itself.
//
//We were able to achieve some of the nice to haves in our game: a special AI for the ghost and made the ghosts harder to get rid off
//
//We worked really hard and are proud of what we achieved in this game and even though we were not able to do every single thing we planned
//we ended up with a proper game and are happy with the final result
//
//Credits: p5js reference page, Mr. Schellenberg, Dom, William, https://stackoverflow.com/questions/29370017/adding-a-high-score-to-local-storage, https://www.dafont.com/silkscreen.font

// Arrays //

// 0 = blackspace, 1 = border, 2 = point, 3 = pacman, 4 = bashful Ghost, 5 = shadow Ghost
// 6 = Power pellet, 7 = Orange Ghost, 8 = Pink Ghost
let grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 8, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 6, 1, 0, 1, 2, 1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 0, 1, 6, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 7, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, ],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, ],
  [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 6, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 6, 2, 2, 1, ],
  [1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, ],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, ],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
];
// global variables //
let backgroundImage, menuPic, pacman, pointImage, pacmanImage;
let state, myMenu, backgroundMusic, boop, myFont;
let typeHere, button;
let openMouth, closedMouth, pacmanEating;
let cellSize = 25;
let pacmanUp, pacmanDown, pacmanRight, pacmanLeft, currentPacman;
let greenGhost, inky;
let redGhost, blinky;
let pinkGhost, pinky;
let orangeGhost, clyde;
let blueGhost;
let lives = 3;
let pacmanXCord, bashfulXCord, shadowXCord, clydeXCord, speedyXCord;
let pacmanYCord, bashfulYCord, shadowYCord, clydeYCord, speedyYCord;
let powerPellet;
let powerPelletOn = false;
let currentFrame;
let xDistance, yDistance;
let score, scoreLeft, highScore;

function preload() {
  backgroundImage = loadImage("images/pacman-grid.png");
  backgroundMusic = loadSound("assets/pacman-song.mp3");
  boop = loadSound("assets/boop.mp3");
  menuPic = loadImage("images/pacman-menu.jpg");
  pointImage = loadImage("images/point.png");
  powerPellet = loadImage("images/powerPellet.png");
  greenGhost = loadImage("images/greenGhost.png");
  pinkGhost = loadImage("images/pinkGhost.png");
  orangeGhost = loadImage("images/orangeGhost.png");
  redGhost = loadImage("images/redGhost.png");
  blueGhost = loadImage("images/blueGhost.png");
  pacmanRight = createImg("images/pacmanEatRight.gif");
  pacmanLeft = createImg("images/pacmanEatLeft.gif");
  pacmanDown = createImg("images/pacmanEatDown.gif");
  pacmanUp = createImg("images/pacmanEatUp.gif");
  pacmanImage = loadImage("images/pacmanImage.png");
  myFont = loadFont("assets/font.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
  myMenu = new Menu();
  pacman = new Pacman();
  inky = new Bashful();
  blinky = new Shadow();
  pinky = new Speedy();
  clyde = new Pokey();
  currentPacman = pacmanRight;
  state = 0;
  score = 0;
  highScore = 0;
  //The music loading
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
  //To load the GIFS of pacman eating
  pacmanRight.position(windowWidth, windowHeight);
  pacmanLeft.position(windowWidth, windowHeight);
  pacmanUp.position(windowWidth, windowHeight);
  pacmanDown.position(windowWidth, windowHeight);
  //To get the high score of the game from the local storage
  if (!localStorage.getItem("highscore")) {
    // Set the highscore.
    setHighScore();
  }
  else {
    // Retrieve the highscore if it already exists.
    getHighScore();
  }
}

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function draw() {
  background(0);

  if (state === 0) {
    myMenu.displayButton();
    myMenu.checkIfMouseIsOverButton();
  }

  if (state === 1) {
    backgroundMusic.stop();
    noStroke();
    pacman.movePac();
    makeGrid();
    inky.moveBashful();
    blinky.moveShadow();
    clyde.movePokey();
    pinky.moveSpeedy();
    displayScore();
    for (let i = 0; i < lives; i++) {
      image(pacmanImage, 12 * 25 + i * 30, 21 * 25 + 5);
    }
  }

  if (state === 2) {
    myMenu.displayGameOver();
  }
}

function makeGrid() {
  noStroke();
  image(backgroundImage, 0, 0);
  for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (grid[y][x] === 2) {
        image(pointImage, cellSize * x, cellSize * y);
      }
      if (grid[y][x] === 3) {
        if (currentPacman === pacmanRight) {
          pacmanRight.position(cellSize * x, cellSize * y);
        }
        else {
          pacmanRight.position(windowWidth, windowHeight);
        }
        if (currentPacman === pacmanLeft) {
          pacmanLeft.position(cellSize * x, cellSize * y);
        }
        else {
          pacmanLeft.position(windowWidth, windowHeight);
        }
        if (currentPacman === pacmanDown) {
          pacmanDown.position(cellSize * x, cellSize * y);
        }
        else {
          pacmanDown.position(windowWidth, windowHeight);
        }
        if (currentPacman === pacmanUp) {
          pacmanUp.position(cellSize * x, cellSize * y);
        }
        else {
          pacmanUp.position(windowWidth, windowHeight);
        }
      }
      if (grid[y][x] === 4) {
        if (powerPelletOn === true) {
          image(blueGhost, cellSize * x, cellSize * y);
        }
        else {
          image(greenGhost, cellSize * x, cellSize * y);
        }
      }
      if (grid[y][x] === 5) {
        if (powerPelletOn === true) {
          image(blueGhost, cellSize * x, cellSize * y);
        }
        else {
          image(redGhost, cellSize * x, cellSize * y);
        }
      }
      if (grid[y][x] === 7) {
        if (powerPelletOn === true) {
          image(blueGhost, cellSize * x, cellSize * y);
        }
        else {
          image(orangeGhost, cellSize * x, cellSize * y);
        }
      }
      if (grid[y][x] === 8) {
        if (powerPelletOn === true) {
          image(blueGhost, cellSize * x, cellSize * y);
        }
        else {
          image(pinkGhost, cellSize * x, cellSize * y);
        }
      }
      if (grid[y][x] === 6) {
        image(powerPellet, cellSize * x, cellSize * y);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === 68) { //D key going right
    pacman.xSpeed = 10;
    pacman.ySpeed = 0;
    currentPacman = pacmanRight;
  }
  if (keyCode === 65) { //A key going left
    pacman.xSpeed = -10;
    pacman.ySpeed = 0;
    currentPacman = pacmanLeft;
  }
  if (keyCode === 87) { //W key going up
    pacman.xSpeed = 0;
    pacman.ySpeed = -10;
    currentPacman = pacmanUp;
  }
  if (keyCode === 83) { //S key going down
    pacman.xSpeed = 0;
    pacman.ySpeed = 10;
    currentPacman = pacmanDown;
  }
}

function mousePressed() {
  if (state === 0 && myMenu.isMouseOverButton) {
    state = 1;
  }
}

class Menu {
  constructor() {
    this.buttonx = width / 2;
    this.buttony = height / 2 + 80;
    this.buttonWidth = 100;
    this.buttonHeight = 50;
    this.isMouseOverButton = false;
  }

  displayButton() {
    image(menuPic, width / 2 - 395, height / 2 - 300);

    rectMode(CENTER);

    fill(0);
    // Changes the color of the button if the mouse is over it
    if (this.isMouseOverButton) {
      fill(37, 38, 38);
    }
    // Draws the button in the middle of the screen
    strokeWeight(4);
    stroke(0, 0, 255);
    rect(this.buttonx, this.buttony, this.buttonWidth, this.buttonHeight);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("Play", this.buttonx, this.buttony);
    text("By Justyn and Sarvath", this.buttonx, height - 250);
  }

  checkIfMouseIsOverButton() {
    // Checks to see if the mouse x and y are within the play button
    if (mouseX <= this.buttonx + this.buttonWidth / 2 && mouseX >= this.buttonx - this.buttonWidth / 2 &&
      mouseY <= this.buttony + this.buttonHeight / 2 && mouseY >= this.buttony - this.buttonHeight / 2) {
      this.isMouseOverButton = true;
    }
    else {
      this.isMouseOverButton = false;
    }
  }

  displayGameOver() {
    // Writes game over and your score when you lose
    image(menuPic, width / 2 - 395, height / 2 - 300);
    fill(0, 255, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("Your Score: " + score, this.buttonx, height - 200);
    text("Your High Score: " + highScore, this.buttonx, this.buttony + 100);
    if (score > highScore) {
      setHighScore();
      highScore = score;
      text("New High Score: " + highScore, this.buttonx, this.buttony);
    }

    textSize(72);
    text("Game Over", this.buttonx, this.buttony);
  }
}

class Pacman {
  constructor() {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  movePac() {
    //In this function, pacman will detect its surroundings to see if there are borders or an open spot
    //If there is an open spot, it will go for it and move ahead
    if (currentFrame + 1200 < frameCount) {
      powerPelletOn = false;
    }
    xYLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (frameCount % 20 === 0) {
          if (grid[y][x] === 3) {
            if (this.xSpeed === 10) {
              if (grid[y][x + 1] === 6) {
                currentFrame = frameCount;
                powerPelletOn = true;
              }
              if (x === 26 && y === 10) {
                grid[y][x] = 0;
                grid[10][0] = 3;
              }
              else if (grid[y][x + 1] === 1) {
                this.xSpeed = 0;
              }
              else {
                boop.play();
                grid[y][x] = 0;
                grid[y][x + 1] = 3;
              }
              break xYLoop;
            }
            if (this.xSpeed === -10) {
              if (grid[y][x - 1] === 6) {
                powerPelletOn = true;
              }
              if (x === 0 && y === 10) {
                grid[y][x] = 0;
                grid[10][26] = 3;
              }
              else if (grid[y][x - 1] === 1) {
                this.xSpeed = 0;
              }
              else {
                boop.play();
                grid[y][x] = 0;
                grid[y][x - 1] = 3;
                break xYLoop;
              }
            }
            if (this.ySpeed === 10) {
              if (grid[y + 1][x] === 6) {
                powerPelletOn = true;
              }
              if (grid[y + 1][x] === 1) {
                this.ySpeed = 0;
              }
              else {
                boop.play();
                grid[y][x] = 0;
                grid[y + 1][x] = 3;
                break xYLoop;
              }
            }
            if (this.ySpeed === -10) {
              if (grid[y - 1][x] === 6) {
                currentFrame = frameCount;
                powerPelletOn = true;
              }
              if (grid[y - 1][x] === 1) {
                this.ySpeed = 0;
              }
              else {
                boop.play();
                grid[y][x] = 0;
                grid[y - 1][x] = 3;
                break xYLoop;
              }
            }
          }
        }
      }
    }
  }
}

//The ghosts movement is similar to Pacman. They will detect its surroundings to see where it can go
//The ghosts will only scatter around the screen until they detect if pacaman is in its surrounding and
//once it is, it will chase pacman

class Speedy {//The pink ghost
  constructor() {
    this.direction;
    this.previousDirection = "none";
  }

  moveSpeedy() {
    let directionList = [];
    let directionSelected = [];
    ghostLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (frameCount % 20 === 0) {
          if (grid[y][x] === 3) {
            pacmanXCord = x;
            pacmanYCord = y;
          }
          if (grid[y][x] === 8) {
            speedyXCord = x;
            speedyYCord = y;
            if ((grid[y][x + 1] === 0 || grid[y][x + 1] === 2) && grid[y][x + 1] !== 1) {
              directionList.push("rightFree");
            }
            if ((grid[y][x - 1] === 0 || grid[y][x - 1] === 2) && grid[y][x - 1] !== 1) {
              directionList.push("leftFree");
            }
            if ((grid[y + 1][x] === 0 || grid[y + 1][x] === 2) && grid[y + 1][x] !== 1) {
              directionList.push("downFree");
            }
            if ((grid[y - 1][x] === 0 || grid[y - 1][x] === 2) && grid[y - 1][x] !== 1) {
              directionList.push("upFree");
            }
            // if (directionList.indexOf(this.previousDirection) === -1) {
            //   this.direction = directionList.sample();
            // } else {
            //   this.direction = this.previousDirection;
            // }
            if (pacmanXCord < speedyXCord && directionList.indexOf("leftFree") !== -1) {
              this.direction = "leftFree";
            }
            else if (pacmanXCord > speedyXCord && directionList.indexOf("rightFree") !== -1) {
              this.direction = "RightFree";
            }
            else if (pacmanYCord < speedyYCord && directionList.indexOf("upFree") !== -1) {
              this.direction = "upFree";
            }
            else if (pacmanYCord > speedyYCord && directionList.indexOf("downFree") !== -1) {
              this.direction = "downFree";
            }



            if (this.direction === "upFree") {
              grid[y][x] = grid[y - 1][x];
              grid[y - 1][x] = 8;
            }
            else if (this.direction === "downFree") {
              grid[y][x] = grid[y + 1][x];
              grid[y + 1][x] = 8;
            }
            else if (this.direction === "rightFree") {
              grid[y][x] = grid[y][x + 1];
              grid[y][x + 1] = 8;
            }
            else if (this.direction === "leftFree") {
              grid[y][x] = grid[y][x - 1];
              grid[y][x - 1] = 8;
            }
            this.previousDirection = this.direction;
            break ghostLoop;
          }
        }
      }
    }
  }
}

class Pokey {//The orange ghost
  constructor() {
    this.direction;
    this.previousDirection = "none";
  }

  movePokey() {
    let directionList = [];
    let directionSelected = [];
    ghostLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (frameCount % 20 === 0) {
          if (grid[y][x] === 3) {
            pacmanXCord = x;
            pacmanYCord = y;
          }
          if (grid[y][x] === 7) {
            clydeXCord = x;
            clydeYCord = y;
            if ((grid[y][x + 1] === 0 || grid[y][x + 1] === 2) && grid[y][x + 1] !== 1) {
              directionList.push("rightFree");
            }
            if ((grid[y][x - 1] === 0 || grid[y][x - 1] === 2) && grid[y][x - 1] !== 1) {
              directionList.push("leftFree");
            }
            if ((grid[y + 1][x] === 0 || grid[y + 1][x] === 2) && grid[y + 1][x] !== 1) {
              directionList.push("downFree");
            }
            if ((grid[y - 1][x] === 0 || grid[y - 1][x] === 2) && grid[y - 1][x] !== 1) {
              directionList.push("upFree");
            }
            // if (directionList.indexOf(this.previousDirection) === -1) {
            //   this.direction = directionList.sample();
            // } else {
            //   this.direction = this.previousDirection;
            // }
            if (pacmanXCord < clydeXCord && directionList.indexOf("leftFree") !== -1) {
              this.direction = "leftFree";
            }
            else if (pacmanXCord > clydeXCord && directionList.indexOf("rightFree") !== -1) {
              this.direction = "RightFree";
            }
            else if (pacmanYCord < clydeYCord && directionList.indexOf("upFree") !== -1) {
              this.direction = "upFree";
            }
            else if (pacmanYCord > clydeYCord && directionList.indexOf("downFree") !== -1) {
              this.direction = "downFree";
            }



            if (this.direction === "upFree") {
              grid[y][x] = grid[y - 1][x];
              grid[y - 1][x] = 7;
            }
            else if (this.direction === "downFree") {
              grid[y][x] = grid[y + 1][x];
              grid[y + 1][x] = 7;
            }
            else if (this.direction === "rightFree") {
              grid[y][x] = grid[y][x + 1];
              grid[y][x + 1] = 7;
            }
            else if (this.direction === "leftFree") {
              grid[y][x] = grid[y][x - 1];
              grid[y][x - 1] = 7;
            }
            this.previousDirection = this.direction;
            break ghostLoop;
          }
        }
      }
    }
  }
}

class Bashful {//The blue ghost
  constructor() {
    this.direction;
    this.previousDirection = "none";
  }

  moveBashful() {
    let directionList = [];
    let directionSelected = [];
    ghostLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (frameCount % 20 === 0) {
          if (grid[y][x] === 3) {
            pacmanXCord = x;
            pacmanYCord = y;
          }
          if (grid[y][x] === 4) {
            bashfulXCord = x;
            bashfulYCord = y;
            if ((grid[y][x + 1] === 0 || grid[y][x + 1] === 2) && grid[y][x + 1] !== 1) {
              directionList.push("rightFree");
            }
            if ((grid[y][x - 1] === 0 || grid[y][x - 1] === 2) && grid[y][x - 1] !== 1) {
              directionList.push("leftFree");
            }
            if ((grid[y + 1][x] === 0 || grid[y + 1][x] === 2) && grid[y + 1][x] !== 1) {
              directionList.push("downFree");
            }
            if ((grid[y - 1][x] === 0 || grid[y - 1][x] === 2) && grid[y - 1][x] !== 1) {
              directionList.push("upFree");
            }
            // if (directionList.indexOf(this.previousDirection) === -1) {
            //   this.direction = directionList.sample();
            // } else {
            //   this.direction = this.previousDirection;
            // }
            if (pacmanXCord < bashfulXCord && directionList.indexOf("leftFree") !== -1) {
              this.direction = "leftFree";
            }
            else if (pacmanXCord > bashfulXCord && directionList.indexOf("rightFree") !== -1) {
              this.direction = "RightFree";
            }
            else if (pacmanYCord < bashfulYCord && directionList.indexOf("upFree") !== -1) {
              this.direction = "upFree";
            }
            else if (pacmanYCord > bashfulYCord && directionList.indexOf("downFree") !== -1) {
              this.direction = "downFree";
            }



            if (this.direction === "upFree") {
              grid[y][x] = grid[y - 1][x];
              grid[y - 1][x] = 4;
            }
            else if (this.direction === "downFree") {
              grid[y][x] = grid[y + 1][x];
              grid[y + 1][x] = 4;
            }
            else if (this.direction === "rightFree") {
              grid[y][x] = grid[y][x + 1];
              grid[y][x + 1] = 4;
            }
            else if (this.direction === "leftFree") {
              grid[y][x] = grid[y][x - 1];
              grid[y][x - 1] = 4;
            }
            this.previousDirection = this.direction;
            break ghostLoop;
          }
        }
      }
    }
  }
}

class Shadow {//The red ghost
  constructor() {
    this.direction;
    this.previousDirection = "downFree";
  }

  moveShadow() {
    let directionList = [];
    ghostLoop: for (let x = 0; x < 27; x++) {
      for (let y = 0; y < 21; y++) {
        if (grid[y][x] === 3) {
          pacmanXCord = x;
          pacmanYCord = y;
        }
        else if (grid[y][x] === 5) {
          shadowXCord = x;
          shadowYCord = y;
        }
        if (frameCount % 20 === 0) {
          if (grid[y][x] === 5) {
            if ((grid[y][x + 1] === 0 || grid[y][x + 1] === 2 || grid[y][x + 1] === 3) && grid[y][x + 1] !== 1) {
              directionList.push("rightFree");
            }
            if ((grid[y][x - 1] === 0 || grid[y][x - 1] === 2 || grid[y][x - 1] === 3) && grid[y][x - 1] !== 1) {
              directionList.push("leftFree");
            }
            if ((grid[y + 1][x] === 0 || grid[y + 1][x] === 2 || grid[y + 1][x] === 3) && grid[y + 1][x] !== 1) {
              directionList.push("downFree");
            }
            if ((grid[y - 1][x] === 0 || grid[y - 1][x] === 2 || grid[y - 1][x] === 3) && grid[y - 1][x] !== 1) {
              directionList.push("upFree");
            }
            if (directionList.indexOf(this.previousDirection) === -1) {
              this.direction = directionList.sample();
            }
            else {
              this.direction = this.previousDirection;
            }

            // if ((this.direction === "upFree" || this.direction === "downFree") && (directionList.indexOf("rightFree") || directionList.indexOf("leftFree"))) {
            //   if (shadowXCord > pacmanXCord) {
            //     xDistance = shadowXCord - pacmanXCord;
            //   } else {
            //     xDistance = pacmanXCord - shadowXCord;
            //   }
            //   if (shadowYCord > pacmanYCord) {
            //     yDistance = shadowYCord - pacmanYCord;
            //   } else {
            //     yDistance = pacmanYCord - shadowYCord;
            //   }
            //   if (directionList.indexOf("rightFree") > -1 && shadowXCord + 1 < xDistance) {
            //     print("u")
            //     this.direction = "rightFree";
            //   }
            //   if (directionList.indexOf("leftFree") > -1 && shadowXCord - 1 < xDistance) {
            //     print("up")
            //     this.direction = "leftFree";
            //   } else {
            //     if (directionList.indexOf(this.previousDirection) === -1) {
            //       this.direction = directionList.sample();
            //     } else {
            //       this.direction = this.previousDirection;
            //     }
            //   }
            // } else if ((this.direction === "rightFree" || this.direction === "leftFree") && (directionList.indexOf("upFree") || directionList.indexOf("downFree"))) {
            //   if (shadowXCord > pacmanXCord) {
            //     xDistance = shadowXCord - pacmanXCord;
            //   } else {
            //     xDistance = pacmanXCord - shadowXCord;
            //   }
            //   if (shadowYCord > pacmanYCord) {
            //     yDistance = ShadowYCord - pacmanYCord;
            //   } else {
            //     yDistance = pacmanYCord - shadowYCord;
            //   }
            //   if (directionList.indexOf("upFree") > -1 && shadowYCord - 1 < yDistance) {
            //     print("up")
            //     this.direction = "upFree";
            //   }
            //   if (directionList.indexOf("downFree") > -1 && shadowYCord + 1 < yDistance) {
            //     print("down")
            //     this.direction = "downFree";
            //   } else {
            //     if (directionList.indexOf(this.previousDirection) === -1) {
            //       this.direction = directionList.sample();
            //     } else {
            //       this.direction = this.previousDirection;
            //     }
            //   }
            // } else {
            //   print("working")
            //   this.direction = this.previousDirection;
            // }


            if (this.direction === "upFree") {
              if (grid[y - 1][x] === 3) {
                if (powerPelletOn === false) {
                  grid[y][x] = grid[y - 1][x];
                  grid[y - 1][x] = 5;
                  death();
                }
                else {
                  ghostDeath(5);
                }
              }
              else {
                grid[y][x] = grid[y - 1][x];
                grid[y - 1][x] = 5;
              }
            }
            else if (this.direction === "downFree") {
              if (grid[y + 1][x] === 3) {
                if (powerPelletOn === false) {
                  grid[y][x] = grid[y + 1][x];
                  grid[y + 1][x] = 5;
                  death();
                }
                else {
                  ghostDeath(5);
                }
              }
              else {
                grid[y][x] = grid[y + 1][x];
                grid[y + 1][x] = 5;
              }
            }
            else if (this.direction === "rightFree") {
              if (grid[y][x + 1] === 3) {
                if (powerPelletOn === false) {
                  grid[y][x] = grid[y][x + 1];
                  grid[y][x + 1] = 5;
                  death();
                }
                else {
                  ghostDeath(5);
                }
              }
              else {
                grid[y][x] = grid[y][x + 1];
                grid[y][x + 1] = 5;
              }
            }
            else if (this.direction === "leftFree") {
              if (grid[y][x - 1] === 3) {
                if (powerPelletOn === false) {
                  grid[y][x] = grid[y][x - 1];
                  grid[y][x - 1] = 5;
                  death();
                }
                else {
                  ghostDeath(5);
                }
              }
              else {
                grid[y][x] = grid[y][x - 1];
                grid[y][x - 1] = 5;
              }
            }
            this.previousDirection = this.direction;
            break ghostLoop;
          }
        }
      }
    }
  }
}

//These functions help keep track of the score for the game and uses a local storage system
//so that means that the computer you are playing in will remember your high score

function displayScore() {
  scoreLeft = 0;
  for(let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (grid[y][x] === 6) {
        scoreLeft = scoreLeft + 100;
      }
      if (grid[y][x] === 2) {
        scoreLeft = scoreLeft + 10;
      }
    }
  }
  push();
  score = 2790 - scoreLeft;
  if (score > highScore) {
    setHighScore();
    highScore = score;
  }
  else {
    localStorage.setItem("highscore", score);
  }
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Score: " + score, width/6 + 25, height/2 + 85);
  text("High Score: " + highScore, width/6 + 25, height/2 + 100);
  pop();
}

function setHighScore() {
  localStorage.setItem("highscore", score);
}

function getHighScore() {
  highScore = localStorage.getItem("highscore");
}

function death() {
  for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (grid[y][x] === 3 || grid[y][x] === 4 || grid[y][x] === 5) {
        grid[y][x] = 0;
      }
    }
  }
  grid[15][13] = 3;
  grid[7][9] = 4;
  grid[7][17] = 5;
  lives = lives - 1;
}


function ghostDeath(ghost) {
  for (let x = 0; x < 27; x++) {
    for (let y = 0; y < 21; y++) {
      if (grid[y][x] === ghost) {
        grid[y][x] = 0;
        grid[11][13] = ghost;
      }
    }
  }
}

// function passScan(shadowXCord, shadowYCord, xFree) {
//   let closeMovement;
//   if (shadowXCord > pacmanXCord) {
//     xDistance = shadowXCord - pacmanXCord;
//   } else {
//     xDistance = pacmanXCord - shadowXCord;
//   }
//   if (shadowYCord > pacmanYCord) {
//     yDistance = shadowYCord - pacmanYCord;
//   } else {
//     yDistance = pacmanYCord - shadowYCord;
//   }
//   if (xFree === 0) {
//     if (directionList.indexOf("upFree") === -1 && shadowYCord - 1 < yDistance) {
//       direction = "upFree";
//     }
//     if (directionList.indexOf("downFree") === -1 && shadowYCord + 1 < yDistance) {
//       direction = "downFree";
//     }
//   }
//   if (xFree === 1) {
//     if (directionList.indexOf("rightFree") === -1 && shadowXCord + 1 < yDistance) {
//       direction = "rightFree";
//     }
//     if (directionList.indexOf("leftFree") === -1 && shadowXCord - 1 < yDistance) {
//       direction = "leftFree";
//     }
//   }
// }
