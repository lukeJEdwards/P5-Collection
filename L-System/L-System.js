class L_System {
  constructor(rules, start, angle, len, genCount = 1) {
    this.rules = rules;
    this.sentence = start;
    this.angle = radians(angle);
    this.len = len;
    this.genCount = 0;
    this.gen(genCount);
  }

  drawSystem = (callback) => callback(this.sentence, this.angle, this.len);

  findRule(current) {
    for (let i = 0; i < this.rules.length; i++) {
      if (current == this.rules[i].input) {
        return i;
      }
    }
    return null;
  }

  gen(count = 1) {
    for (let i = 0; i < count; i++) {
      var newSentence = "";
      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence.charAt(i);
        let rule = this.findRule(current);
        if (rule != null) {
          newSentence += this.rules[rule].output;
        } else {
          newSentence += current;
        }
      }
      this.sentence = newSentence;
      this.genCount++;
    }
  }
}
