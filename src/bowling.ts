type Movements = "X" | "/" | "-" | string;

export class Bowling {
  frame: Movements[] = [];

  roll = (pins: Movements) => {
    this.frame.push(pins);
  };

  rollMany = (frames: number, pins: Movements) => {
    for (let i = 0; i < frames; i++) {
      this.frame.push(pins);
    }
  };

  getScore = () => {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (this.frame[i] === "X") {
        score += 10;
        if (this.frame[i + 1] === "X") {
          score += 10;
        }
        if (this.frame[i + 2] === "X") {
          score += 10;
        }
      } else {
        score += parseInt(this.frame[i]);
      }
    }
    return score;
  };
}
