let x, y, radius;
let dx, dy;
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(5, 9);
  dy = random(5, 9);
  state = 1;
}

function draw() {
  background(255);
  playOrStart();
}

function playOrStart() {
  if (state === 1) {
    startScreen();
  }
  if (state === 2) {
    moveThing();
    displayThing();
  }
}

function startScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(255, 0, 0);

  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(255, 255, 0);
    if (mouseIsPressed) {
      state = 2;
    }
  }

  rect(leftSide, topSide, buttonWidth, buttonHeight);
  fill(255);
  text("Play", rectMode(CENTER), rectMode(CENTER));
}

function moveThing() {
  x += dx;
  y += dy;

  if (y + radius / 2 >= height || y - radius / 2 <= 0) {
    dy = dy * -1;
  }
  if (x + radius / 2 >= width || x - radius / 2 <= 0) {
    dx = dx * -1;
  }
}

function displayThing() {
  fill(random(255));
  ellipse(x, y, radius, radius);
}
