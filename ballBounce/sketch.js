let x, y, radius;
let dx, dy;
let kimmy;

function preload() {
  kimmy = loadImage("kimmy.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
}

function draw() {
  background(255);
  moveThing();
  displayThing();
}

function moveThing() {
  x += dx;
  y += dy;

  if (y + kimmy.height/2 >= height || y - kimmy.height/2 <= 0) {
    dy = dy * -1;
  }
  if (x + kimmy.width/2 >= width || x - kimmy.width/2 <= 0) {
    dx = dx * -1;
  }
}

function displayThing() {
  fill(random(255));
  imageMode(CENTER);
  image(kimmy, x, y);
}
