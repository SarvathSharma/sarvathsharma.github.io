// factorial recursion
// Sarvath Sharma
// May 3, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(factorial(0));
}

function draw() {
  background(255);

}

function factorial(n) {
  //base case
  if (n === 1 || n === 0) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}
