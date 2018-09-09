// perlin noise demo

let heights = [];
let numberOfRectangles = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
  circleHigh();
}

function generateInitialTerrain(numberOfRectangles) {
  let time = 0;
  let dt = 0.01;
  for (let i = 0; i < numberOfRectangles; i++) {
    let currentHeight = noise(time) * 500;
    heights.push(currentHeight);
    time += dt;

  }
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  for (let i = 0; i < numberOfRectangles; i++) {
    fill(0);
    rect(i * rectWidth, height, (i + 1) * rectWidth, height - heights[i]);
  }
}

function circleHigh() {
  let tallest = 0;
  let rectWidth = width / numberOfRectangles;
  let topX;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > tallest) {
      tallest = heights[i];
      topX = i * rectWidth;
    }
  }
  let topY = height-tallest;
  fill(random(255), random(255), random(255));
  ellipse(topX, topY, 20, 20);
}
