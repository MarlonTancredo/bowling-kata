type Roll = "X" | "/" | "-" | string;
let frame: string[] = [];

beforeEach(() => {
  frame = [];
});

describe("Testing Bowling", () => {
  //Arrange
  const roll = (pins: Roll) => {
    frame.push(pins);
  };

  const rollMany = (frames: number, pins: Roll) => {
    for (let i = 0; i < frames; i++) {
      frame.push(pins);
    }
  };

  const isStrike = (roll: string) => {
    return roll === "X";
  };

  const isSpare = (roll: string) => {
    return roll.includes("/");
  };

  const getScore = () => {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (isStrike(frame[i])) {
        score += 10;
        if (isStrike(frame[i + 1])) {
          score += 10;
        }
        if (isStrike(frame[i + 2])) {
          score += 10;
        }
      } else if (isSpare(frame[i])) {
        score += 10 + parseInt(frame[i]);
      } else {
        score += parseInt(frame[i]);
      }
    }
    return score;
  };

  test("strike", () => {
    //Act
    rollMany(10, "X");
    roll("X");
    roll("X");
    getScore();

    //Assert
    expect(getScore()).toBe(300);
  });

  test("miss", () => {
    //Act
    rollMany(10, "9-");
    getScore();

    //Assert
    expect(getScore()).toBe(90);
  });

  test("spare", () => {
    //Act
    rollMany(10, "5/");
    getScore();

    //Assert
    expect(getScore()).toBe(150);
  });
});
