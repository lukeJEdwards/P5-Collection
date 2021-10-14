const rules = [
  {
    input: "A",
    output: "B-F+CFC+F-D&F∧D-F+&&CFC+F+B//",
  },
  {
    input: "B",
    output: "A&F∧CFB∧F∧D∧∧-F-D∧|F∧B|FC∧F∧A//",
  },
  {
    input: "C",
    output: "|D∧|F∧B-F+C∧F∧A&&FA&F∧C+F+B∧F∧D//",
  },
  {
    input: "D",
    output: "|CFB-F+B|FA&F∧A&&FB-F+B|FC//",
  },
];
var system;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = () => false;

  system = new L_system("A", rules, 90, 20, 2);
  console.log(system.sentence);
}

function draw() {
  background(0);
  stroke(255);
  system.drawSystem(drawSystem);
}

function drawSystem(sentence, angle, len) {
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence[i];
    point(0, 0, 0);
    switch (current) {
      case "+":
        rotateX(angle);
        line(0, 0, 0, 0, len, 0);
        translate(0, len, 0);
        break;
      case "-":
        rotateX(-angle);
        line(0, 0, 0, 0, -len, 0);
        translate(0, -len, 0);
        break;
      case "&":
        rotateY(angle);
        line(0, 0, 0, len, 0, 0);
        translate(len, 0, 0);
        break;
      case "^":
        rotateY(-angle);
        line(0, 0, 0, -len, 0, 0);
        translate(-len, 0, 0);
        break;
      case "\\":
        rotateZ(angle);
        line(0, 0, 0, 0, 0, len);
        translate(0, 0, len);
        break;
      case "/":
        rotateZ(-angle);
        line(0, 0, 0, 0, 0, -len);
        translate(0, 0, -len);
        break;
      case "|":
        rotateY(PI);
        break;
      default:
        break;
    }
  }
}
