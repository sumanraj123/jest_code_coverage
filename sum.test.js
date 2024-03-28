const sum = require("./sum");

const sub = require("./sub");

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("subtracts 4 - 1 to equal 3", () => {
    expect(sub(4, 1)).toBe(3);
  });
});
