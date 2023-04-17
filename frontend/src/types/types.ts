
export type ExpressionType = 'null' | 'if' | 'and' | 'or' | 'not' | 'const' | 'eq' | 'tl' | 'tu';

export const expressionTypesValues = [
  { value: 'null', label: '(SELECT)' },
  { value: 'if', label: 'IF' },
  { value: 'and', label: 'AND' },
  { value: 'or', label: 'OR' },
  { value: 'not', label: 'NOT' },
  { value: 'const', label: 'CONST' },
  { value: 'eq', label: 'EQ' },
  { value: 'tl', label: 'TO-LOWER' },
  { value: 'tu', label: 'TO-UPPER' },
];
