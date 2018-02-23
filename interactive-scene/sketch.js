// Interactive Scene
// Sarvath Sharma
// Feb 9, 2018
// Extra for Experts: Attempted to use time to spawn balls but could not get it to work
// Extra for Experts = Also attempted to use collision detection (algorithm kind of works, but did not have all resources)

// The global variables
let xRect, yRect, xBall, yBall, ballSpeed, newBallX, newBallY;
let moveUp, moveDown, moveRight, moveLeft, isMousePressed;
let timePassed, newSeconds;
let ball, user, distance;

function setup() {
  // This function is to setup all the varibles and window for the first time
  createCanvas(windowWidth, windowHeight);
  xRect = width / 2;
  yRect = height / 2;
  xBall = 0;
  yBall = 0;
  newBallX = 0;
  newBallY = 0;
  ballSpeed = 5;
  moveUp = false;
  moveDown = false;
  moveLeft = false;
  moveRight = false;
  isMousePressed = false;
  timePassed = 10000;
  distance = dist(user, ball);
}

function draw() {
  // This function is to help run all the other functions in a continuos loop
  background(255);
  newSeconds = millis();
  fill(0);
  // This text helps the viewer know how many Milliseconds has run by
  text("Milliseconds \nrunning: \n" + millis(), 5, 40);

  moveRectangle();
  drawRectangle(xRect, yRect);
  followingCircle();
  // playerHitsBall();

  if (isMousePressed === true) {
    // If the mouse is pressed an ellipse will pop up
    noStroke();
    fill(0);
    ball = ellipse(xBall, yBall, 50, 50);
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

function drawRectangle(x, y) {
  // Once executed a recatngle of various colours will pop up
  fill(random(255), random(255), random(255));
  user = rect(xRect - 50, yRect - 80, 100, 100);
}

function mousePressed() {
  isMousePressed = true;
}

function moveRectangle() {
  // This function helps the rectangle move accross the screen
  if (moveUp) {
    yRect -= 10;
  }
  if (moveDown) {
    yRect += 10;
  }
  if (moveLeft) {
    xRect -= 10;
  }
  if (moveRight) {
    xRect += 10;
  }
  // This part allows the rectangle to move out of the screen, but still make its way back in
  if (xRect < 0) {
    xRect = width;
  }
  if (xRect > width) {
    xRect = 0;
  }
  if (yRect < 0) {
    yRect = height;
  }
  if (yRect > height) {
    yRect = 0;
  }
}

function followingCircle() {
  // When the ellipse appears it will detect the position of the rectangle and move its way to its position
  if (xBall < xRect) {
    xBall += ballSpeed;
  }
  if (xBall > xRect) {
    xBall -= ballSpeed;
  }
  if (yBall < yRect) {
    yBall += ballSpeed;
  }
  if (yBall > yRect) {
    yBall -= ballSpeed;
  }
}

// function playerHitsBall() {
//   if (distance < user + ball) {
//     // When the ellipse and the rectangle are at the same position the screen will pause and tell the user to restart
//     background(0);
//     fill(255);
//     text("Please press F5 to restart", 30, 80);
//   }
// }

// function timePassedBy() {
//   if (millis() > newSeconds + timePassed) {
//     // spawnBalls();
//     newSeconds = millis();
//     print(newSeconds);
//   }
// }

// function spawnBalls() {
//   ellipse(newBallX, newBallY, 100, 100);
//   newBallX += xBall - 100;
//   newBallY += yBall - 100;
// }
