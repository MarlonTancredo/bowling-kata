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

  private isStrike = (roll: string) => {
    return roll === "X";
  };

  private isSpare = (roll: string) => {
    return roll.includes("/");
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
      } else if (this.isSpare(this.frame[i])) {
        score += 10 + parseInt(this.frame[i + 1]);
      } else {
        score += parseInt(this.frame[i]);
      }
    }
    return score;
  };
}
