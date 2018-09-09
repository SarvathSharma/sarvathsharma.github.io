
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawShapes();
}

function drawShapes() {
  if (key === "r") {
    if (mouseX < width/2) {
      noStroke();
      fill(random(255));
      rect(random(width/2), random(height), 100, 100);
    }
    else if (mouseX > width/2) {
      noStroke();
      fill(random(255), random(255), random(255));
      ellipse(random(width/2, width), random(height), 100, 100);
    }
  }
  if (key === "g") {
    if (mouseX < width/2) {
      noStroke();
      fill(random(255));
      rect(random(width), random(height), 100, 100);
    }
    else if (mouseX > width/2) {
      noStroke();
      fill(random(255), random(255), random(255));
      ellipse(random(width), random(height), 100, 100);
    }
  }
}
