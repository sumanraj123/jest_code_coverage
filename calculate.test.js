const { sum, sub } = require("./calculate");

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test.skip("adds 1 + 2 to equal 3", () => {
    expect(sub(4, 1)).toBe(3);
  });
});
