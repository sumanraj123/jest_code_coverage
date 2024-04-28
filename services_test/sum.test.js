const { sum } = require("../services/sum/sum.js");

describe("Calculate", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
