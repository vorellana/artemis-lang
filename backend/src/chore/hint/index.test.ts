import { evaluate } from ".";

describe("hint evaluate", () => {
  const cases = [
    {
      input: ["+", 1, 2],
      output: 3,
    },
    {
      input: ["-", ["+", 1, 2], 1],
      output: 2,
    },
    {
      input: ["*", ["-", ["+", 1, 2], 1], 2, ["+", 1, 1]],
      output: 8,
    },
  ];

  test.each(cases)("evaluate($input) -> $output", ({ input, output }) => {
    expect(evaluate(input)).toStrictEqual(output);
  });
});
