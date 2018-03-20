// State Variables
// Sarvath Sharma
// March 19, 2018
// Extra for Experts: Made an AI to chase the user
// Added music and was able to get the collison to work (some glitches but still proud)
// Credits: Dom, Alex, Jerry, Mr. Schellenberg, Youtube Guy

// The global variables
let moveUp, moveDown, moveRight, moveLeft, isMousePressed;
let timePassed, newSeconds, timeLasted, backgroundMusic;
let hit, state;
// These arrays help make the sketch easier by assigning the varibles to a proper group
let ball = {
  xBall: 0,
  yBall: 0,
  newBallX: 0,
  newBallY: 0,
  ballSpeed: 5,
  radius: 50,
};
let userRect = {
  xRect: 250,
  yRect: 250,
  rectSize: 75,
};

function preload() {
  backgroundMusic = loadSound("assets/game-song.mp3");
}

function setup() {
  // This function is to setup all the varibles and window for the first time
  createCanvas(windowWidth, windowHeight);
  moveUp = false;
  moveDown = false;
  moveLeft = false;
  moveRight = false;
  isMousePressed = false;
  timePassed = 10000;
  hit = false;
  state = 1;
  timeLasted = 0;
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
}

function draw() {
  // This function is to help run all the other functions in a continuos loop

  if (state === 1) {
    // The state allows the game to shift from the start to play
    startScreen();
  }
  if (state === 2) {
    background(255);
    moveRectangle();
    drawRectangle(userRect.xRect, userRect.yRect);
    followingCircle();
    playerHitsBall();
    timePassedBy();
    spawnBalls();
    newSeconds = millis();
    fill(0);
    // This text helps the viewer know how many milliseconds has run by
    text("Time \npassed: \n" + millis(), width/2, 40);
  }
  if (state === 3) {
    // When the player loses, the end screen comes along
    background(192, 192, 192);
    textAlign(CENTER);
    fill(255);
    textSize(85);
    text("Congrats you lasted " + timeLasted + " seconds", width/2, height/2 - 300);
    text("Press F5 to restart", width/2, height/2 - 400);
  }

  if (isMousePressed === true) {
    // When the mouse is clicked a ball will spawn to chase the user
    noStroke();
    fill(0);
    ellipse(ball.xBall, ball.yBall, ball.radius, ball.radius);
  }
}

function keyPressed() {
  // This function is to let the user use their keyboard to perform various functions
  if (key === "w" || key === "W") {
    moveUp = true;
  }
  if (key === "s" || key === "S") {
    moveDown = true;
  }
  if (key === "a" || key === "A") {
    moveLeft = true;
  }
  if (key === "d" || key === "D") {
    moveRight = true;
  }
  if (keyCode === 32) {
    // When the spacebar is pressed the game will start
    state = 2;
  }
}

function keyReleased() {
  // This function is to let the user use their keyboard to perform various functions
  if (key === "w" || key === "W") {
    moveUp = false;
  }
  if (key === "s" || key === "S") {
    moveDown = false;
  }
  if (key === "a" || key === "A") {
    moveLeft = false;
  }
  if (key === "d" || key === "D") {
    moveRight = false;
  }
}

function startScreen() {
  // This function is made to develop the start screen
  background(192, 192, 192);
  fill(0);
  rect(width/2, height/2, 400, 200);
  rectMode(CENTER);
  textAlign(CENTER);
  fill(255);
  textSize(85);
  text("The Hunt", width/2, height/2 - 300);
  textSize(16);
  text("Press Spacebar to start game", width/2, height/2);
  fill(0);
  text("Use WASD keys to move", width/2, height/2 + 300);
  text("Do not click the mouse", width/2, height/2 + 320);
}

function drawRectangle(x, y) {
  // Once executed a recatngle of various colours will pop up
  fill(random(255), random(255), random(255));
  rect(userRect.xRect - 50, userRect.yRect - 80, userRect.rectSize, userRect.rectSize);
}

function mousePressed() {
  // This simple function allows the ball to spawn by clicking the mouse
  isMousePressed = true;
}

function moveRectangle() {
  // This function helps the rectangle move accross the screen
  if (moveUp) {
    userRect.yRect -= 10;
  }
  if (moveDown) {
    userRect.yRect += 10;
  }
  if (moveLeft) {
    userRect.xRect -= 10;
  }
  if (moveRight) {
    userRect.xRect += 10;
  }
  // This part allows the rectangle to move out of the screen, but still make its way back in
  if (userRect.xRect < 0) {
    userRect.xRect = width;
  }
  if (userRect.xRect > width) {
    userRect.xRect = 0;
  }
  if (userRect.yRect < 0) {
    userRect.yRect = height;
  }
  if (userRect.yRect > height) {
    userRect.yRect = 0;
  }
}

function followingCircle() {
  // When the ellipse appears it will detect the position of the rectangle and move its way to its position
  if (ball.xBall <= userRect.xRect) {
    ball.xBall += ball.ballSpeed;
  }
  if (ball.xBall >= userRect.xRect) {
    ball.xBall -= ball.ballSpeed;
  }
  if (ball.yBall <= userRect.yRect) {
    ball.yBall += ball.ballSpeed;
  }
  if (ball.yBall >= userRect.yRect) {
    ball.yBall -= ball.ballSpeed;
  }
}

function playerHitsBall() {
  // Brought from a new library, when the user and the chaser collide a 2d detection is caught and told to change the state
  hit =  collideRectCircle(userRect.xRect, userRect.yRect, userRect.rectSize, userRect.rectSize, ball.xBall, ball.yBall, ball.radius);
  if (hit) {
    state = 3;
    timeLasted += second();
  }
}

function timePassedBy() {
  // A function to help determine how long has time passed by and if the collsion has occured
  if (millis() > newSeconds + timePassed && hit === false) {
    spawnBalls();
    newSeconds = millis();
    print(newSeconds);
  }
}

function spawnBalls() {
  // If a collision occurs a new ball should appear
  fill(0);
  ellipse(ball.newBallX, ball.newBallY, ball.radius, ball.radius);
  ball.newBallX += ball.xBall - 300;
  ball.newBallY += ball.yBall - 300;
}
