import { Expression } from "../lang/Expressions";
import evaluate from "../runtime/evaluation";

export const shipService = {
  evaluate: async (expression: Expression) => {
    const result = evaluate(expression);
    return result;
  },
};
