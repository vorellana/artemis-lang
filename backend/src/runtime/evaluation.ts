import { Expression } from "../lang/Expressions";
import { ExpressionType } from "../lang/ExpressionTypes";

export default function evaluate(expression: Expression): any {
  switch (expression.type) {
    case ExpressionType.Const:
      return expression.payload.value;
    case ExpressionType.If:
      return evaluate(expression.payload.test_expression)
        ? evaluate(expression.payload.if_true)
        : evaluate(expression.payload.if_false);
    case ExpressionType.And:
      return expression.payload.expressions.every((e) => evaluate(e));
    case ExpressionType.Or:
      return expression.payload.expressions.some((e) => evaluate(e));
    case ExpressionType.Not:
      return !evaluate(expression.payload.expression);
    case ExpressionType.StringToUpper:
      return evaluate(expression.payload.value).toUpperCase();
    case ExpressionType.StringToLower:
      return evaluate(expression.payload.value).toLowerCase();
    case ExpressionType.Eq:
      return (
        evaluate(expression.payload.left) === evaluate(expression.payload.right)
      );
    default:
      return new Error("operator not supported");
  }
}
