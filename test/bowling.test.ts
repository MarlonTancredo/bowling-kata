import { Bowling } from "../src/bowling";

let bowling = new Bowling();

beforeEach(() => {
  bowling = new Bowling();
});

//X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
describe("Strike", () => {
  test("Should return 300 points if all frames got a strike ", () => {
    //Arrange
    //Act
    bowling.rollMany(10, "X");
    bowling.roll("X");
    bowling.roll("X");
    bowling.getScore();

    //Assert
    expect(bowling.getScore()).toBe(300);
  });
});
