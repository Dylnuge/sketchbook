let rval = 0;
let change = 1;
let GROW_COLOR = "#CC349B";
let SHRINK_COLOR = "#FF8926";
let circle_color = GROW_COLOR;

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  frameRate(60);
}

function draw() {
  background("rgba(75, 206, 250, 0.1)");

  rval += change;
  if (rval >= 275) {
    change = -1;
  } else if (rval <= 0) {
    change = 1;
  }
  circle_color = lerpColor(color(SHRINK_COLOR), color(GROW_COLOR), rval/255);
  stroke(0x41, 0xd9, 0xa6, 0.3);
  fill(color(circle_color));
  ellipse(
    (windowWidth-50)/2,
    (windowHeight-50)/2,
    200 + rval
  );
}
