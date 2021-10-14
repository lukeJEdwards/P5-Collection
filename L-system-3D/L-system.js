class L_system {
  constructor(sentence, rules, angle, len, count = 1) {
    this.sentence = sentence;
    this.rules = rules;
    this.angle = radians(angle);
    this.len = len;
    this.genCount = 0;
    this.gen(count);
  }

  drawSystem = (callback) => callback(this.sentence, this.angle, this.len);

  findRule(input) {
    for (let i = 0; i < this.rules.length; i++) {
      if (input == this.rules[i].input) {
        return i;
      }
    }
    return null;
  }

  gen(count = 1) {
    for (let gen = 0; gen < count; gen++) {
      var newSentence = "";
      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence[i];
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
