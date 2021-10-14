var system;
var len = 15;
const rules = [
  {
    input: "F",
    output: "FF",
  },
  {
    input: "X",
    output: "F+[[X]-X]-F[-FX]+X",
  },
];

function drawSystem(sentence, angle, len) {
  stroke(0, 102, 0);
  resetMatrix();
  translate(width / 2, height);
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);
    if (current == "F") {
      var len = 2;
      line(0, 0, 0, -len);
      translate(0, -len, 0);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  system = new L_System(rules, "X", 25, 2, 7);
}

function draw() {
  background(255);
  system.drawSystem(drawSystem);
}
