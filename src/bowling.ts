export class Bowling {
  frame: string[] = [];

  roll = (pins: string) => {
    this.frame.push(pins);
  };

  rollMany = (frames: number, pins: string) => {
    for (let i = 0; i < frames; i++) {
      this.frame.push(pins);
    }
  };

  getScore = () => {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (this.frame[i] === "X") {
        score += 10;
      }
      if (this.frame[i + 1] === "X") {
        score += 10;
      }
      if (this.frame[i + 2] === "X") {
        score += 10;
      }
    }
    return score;
  };
}
