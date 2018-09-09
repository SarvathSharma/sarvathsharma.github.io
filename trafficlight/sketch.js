//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.

let state, s, timeLapse;
let red, yellow, green;

function setup() {
  createCanvas(600, 600);
  state = 1;
  red = 3000;
  yellow = 1000;
  green = 3000;
  s = millis();
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkIfLightSwitched();
  displayCorrectLight();
}

function checkIfLightSwitched() {
  if (state === 1) {
    if (millis() > s + green) {
      state = 2;
      s = millis();
    }
  }
  else if (state === 2) {
    if (millis() > s + yellow) {
      state = 3;
      s = millis();
    }
  }
  else if (state === 3) {
    if (millis() > s + red) {
      state = 1;
      s = millis();
    }
  }
}

function displayCorrectLight() {
  if (state === 1) {
    drawGreen();
  }
  else if (state === 2) {
    drawYellow();
  }
  else if (state === 3) {
    drawRed();
  }
}

function drawGreen() {
  fill(0, 255, 0);
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function drawYellow() {
  fill(255, 255, 0);
  ellipse(width / 2, height / 2, 50, 50); //middle
}

function drawRed() {
  fill(255, 0, 0);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}
