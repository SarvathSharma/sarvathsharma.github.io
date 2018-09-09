// Keyboard and Mouse
// Sarvath Sharma
// Feb 8, 2017

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  document.contextmenu=null;
}

function mousePressed() {
  fill(random(255), random(255), random(255));
  if (mouseButton === LEFT) {
    rect(mouseX, mouseY, random(100), random(100));
  }
  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(100), random(100));
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    background(255);
  }
  else if (key === 'b' || key === 'B') {
    background(0);
  }
}
