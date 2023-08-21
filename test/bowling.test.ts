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

//9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
describe("Miss", () => {
  test("Should return 90 points", () => {
    //Arrange
    //Act
    bowling.rollMany(10, "9-");
    bowling.getScore();

    //Assert
    expect(bowling.getScore()).toBe(90);
  });
});

//5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150
describe("Spare", () => {
  test("Should return 150 points", () => {
    //Arrange
    //Act
    bowling.rollMany(10, "5/");
    bowling.roll("5");
    bowling.getScore();

    //Assert
    expect(bowling.getScore()).toBe(150);
  });
});
