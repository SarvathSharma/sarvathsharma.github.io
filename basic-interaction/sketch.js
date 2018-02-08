// Basic Interaction Demo
// Sarvath Sharma
// Feb 7, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed() {
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(width),random(height), random(100), random(100));
}

function mouseClicked() {
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX, mouseY, random(255), random(255));
}

function deviceShaken() {
  fill(random(255), random(255), random(255), random(255));
  textSize(500);
  text('Congrats! You did something!!', 500, 500);
}
