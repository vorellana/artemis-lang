import { ExpressionType } from "./ExpressionTypes";

export interface BaseExpression<T extends ExpressionType, P = any> {
  type: T;
  payload: P;
}
