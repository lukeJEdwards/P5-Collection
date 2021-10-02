class L_System {
  constructor(rules, start, angle) {
    this.rules = rules;
    this.sentence = start;
    this.angle = radians(angle);
    this.genCount = 0;
  }

  gen() {
    var newSentence = "";
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);
      let found = false;
      for (let j = 0; j < this.rules.length; j++) {
        if (current == this.rules[j].input) {
          found = true;
          newSentence += this.rules[j].output;
        }
      }
      if (!found) {
        newSentence += current;
      }
    }
    this.sentence = newSentence;
    this.genCount++;
    console.log(this.sentence);
  }

  drawSystem() {
    stroke(0, 102, 0);
    resetMatrix();
    translate(width / 2, height);
    for (let i = 0; i < this.sentence.length; i++) {
      let current = this.sentence.charAt(i);
      if (current == "F") {
        var len = 2;
        line(0, 0, 0, -len);
        translate(0, -len, 0);
      } else if (current == "+") {
        rotate(this.angle);
      } else if (current == "-") {
        rotate(-this.angle);
      } else if (current == "[") {
        push();
      } else if (current == "]") {
        pop();
      }
    }
  }
}
