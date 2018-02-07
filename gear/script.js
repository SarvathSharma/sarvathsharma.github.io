let x;
let y;
let isMovingUp, isMovingDown, isMovingLeft, isMovingRight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2
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
  if (key === 'w'|| key === 'W') {
    // y -= 10;
    isMovingUp = true;
  } if (key === 's'|| key === 'S') {
    // y += 10;
    isMovingDown = true;
  } if (key === 'd'|| key === 'D') {
    // x += 10;
    isMovingLeft = true;
  } if (key === 'a'|| key === 'A') {
    // x -= 10;
    isMovingRight = true;
  }
}

function moveStickman() {
  if (key === 'w'|| key === 'W') {
    y -= 10;
  } if (key === 's'|| key === 'S') {
    y += 10;
  } if (key === 'd'|| key === 'D') {
    x += 10;
  } if (key === 'a'|| key === 'A') {
    x -= 10;
  }
}

function keyReleased() {
  if (key === 'w'|| key === 'W') {
    isMovingUp = true;
  } if (key === 's'|| key === 'S') {
    isMovingDown = true;
  } if (key === 'd'|| key === 'D') {
    isMovingLeft = true;
  } if (key === 'a'|| key === 'A') {
    isMovingRight = true;
  }
}

function drawStickman(x, y) {
  fill(random(0,255), random(0,255), random(0,255));

  line(x, y, x, y+200);
  line(x-50, y+100, x+50, y+100);
  line(x, y+200, x-50, y+250);
  line(x, y+200, x+50, y+250);

  ellipse(x,y,100,100);

  rect(x-50, y-80, 100, 30);
  rect(x-25, y-130, 50, 50);

}
