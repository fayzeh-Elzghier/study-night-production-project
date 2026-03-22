import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle function", () => {
  it("should return a new array with the same length as the original", () => {
    const cards = [1, 2, 3, 4, 5];
    const shuffledCards = shuffle(cards);

    expect(shuffledCards).to.have.lengthOf(cards.length);
  });

  it("should contain the same elements as the original array", () => {
    const cards = [1, 2, 3, 4, 5];
    const shuffledCards = shuffle(cards);

    expect(shuffledCards.sort()).to.deep.equal(cards.sort());
  });

  it("should not modify the original array", () => {
    const cards = [1, 2, 3, 4, 5];
    const originalCards = [...cards];

    shuffle(cards);

    expect(cards).to.deep.equal(originalCards);
  });
});