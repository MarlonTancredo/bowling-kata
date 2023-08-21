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

  private isStrike = (roll: string) => {
    return roll === "X";
  };

  getScore = () => {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (this.isStrike(this.frame[i])) {
        score += 10;
        if (this.isStrike(this.frame[i + 1])) {
          score += 10;
        }
        if (this.isStrike(this.frame[i + 2])) {
          score += 10;
        }
      } else {
        score += parseInt(this.frame[i]);
      }
    }
    return score;
  };
}
