export function evaluate(expression: any): any {
  if (typeof expression === "number") {
    return expression;
  }

  if (!Array.isArray(expression)) {
    return new Error("unsupported type");
  }

  if (expression.length <= 1) {
    return new Error("missing arguments");
  }

  const operator = expression[0];
  const args = expression.slice(1, expression.length);

  switch (operator) {
    case "+":
      return args.map((a) => evaluate(a)).reduce((prev, next) => prev + next);
    case "-":
      return args.map((a) => evaluate(a)).reduce((prev, next) => prev - next);
    case "*":
      return args.map((a) => evaluate(a)).reduce((prev, next) => prev * next);
    default:
      return Error("operator not supported");
  }
}
