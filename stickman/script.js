// global variables
let x, y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;
}

function draw() {
  background(255);

  moveStickman();

  drawStickman(mouseX, mouseY);
  drawStickman(x, y);
}

function keyPressed() {
  if (key == 'w' || key == 'W') {
    isMovingUp = true;
  }
  else if (key == 's' || key == 'S') {
    isMovingDown = true;
  }
  if (key == 'a' || key == 'A') {
    isMovingLeft = true;
  }
  else if (key == 'd' || key == 'D') {
    isMovingRight = true;
  }
}

function keyReleased() {
  if (key == 'w' || key == 'W') {
    isMovingUp = false;
  }
  else if (key == 's' || key == 'S') {
    isMovingDown = false;
  }
  if (key == 'a' || key == 'A') {
    isMovingLeft = false;
  }
  else if (key == 'd' || key == 'D') {
    isMovingRight = false;
  }
}

function moveStickman() {
  if (isMovingUp) {
    y = y - 10;
  }
  if (isMovingDown) {
    y = y + 10;
  }
  if (isMovingLeft) {
    x -= 10;
  }
  if (isMovingRight) {
    x += 10;
  }
}

function drawStickman(x, y) {
  //body
  line(x, y, x, y+200);

  fill(random(0,255), random(0,255), random(0,255));
  ellipse(x, y, 100, 100);

  fill(random(0,255), random(0,255), random(0,255));
  rect(x-50, y-80, 100, 30);
  rect(x-25, y-130, 50, 50);


  line(x-50, y+100, x+50, y+100);

  line(x, y+200, x-50, y+250);
  line(x, y+200, x+50, y+250);
}
