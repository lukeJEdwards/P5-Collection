let zoffs = [];
const circleCount = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < circleCount; i++) {
    zoffs.push(0);
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (let i = zoffs.length - 1; i > 0; i--) {
    circleWithNoise(100 * (i * 0.5), 500, i);
  }
}

function circleWithNoise(minR, maxR, zoff) {
  noStroke();
  fill(minR, maxR, zoff * 100);
  let t = 0;
  let noiseMax = 5;
  beginShape();
  for (let i = 0; i < TWO_PI; i += 0.01) {
    let xoff = map(cos(i), -1, 1, 0, noiseMax);
    let yoff = map(sin(i), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoffs[zoff]), 0, 1, minR, maxR);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
    t += 0.1;
  }
  endShape(CLOSE);
  zoffs[zoff] += 0.01;
}
