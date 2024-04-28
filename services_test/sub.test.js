const { sub } = require("../services/sub/sub.js");

describe("Calculate", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sub(4, 1)).toBe(3);
  });
});
