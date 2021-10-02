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

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.oncontextmenu = function () {
    return false;
  };
  system = new L_System(rules, "X", 25);
  translate(windowWidth / 2, height);
}

function draw() {
  background(255);
  system.drawSystem();
  if (system.genCount < 7) {
    system.gen();
  }
}
