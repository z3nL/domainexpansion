import type { Card } from "./cards.ts";
import { validate_type } from "./cards.ts";

/*
Formula Syntax:
function formulaName(target: number | number[], otherArgs: number[]): number {
    // Validate inputs

    // Perform calculation
}
*/

export const FORMULA_CARDS: Card[] = [
  {
    name: "Addition",
    tier: "Elementary",
    type: "Formula",
    symbol: "$f(a, b) = a + b$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target + a;
    },
  },
  {
    name: "Subtraction",
    tier: "Elementary",
    type: "Formula",
    symbol: "$f(a, b) = a - b$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target - a;
    },
  },
  {
    name: "Multiplication",
    tier: "Elementary",
    type: "Formula",
    symbol: "$f(a, b) = a \\times b$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target * a;
    },
  },
  {
    name: "Division",
    tier: "Elementary",
    type: "Formula",
    symbol: "$f(a, b) = \\frac{a}{b}$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target / a;
    },
  },
  {
    name: "Power",
    tier: "High School",
    type: "Formula",
    symbol: "$f(a, b) = a^b$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target ** a;
    },
  },
  {
    name: "Logarithm",
    tier: "High School",
    type: "Formula",
    symbol: "$f(a, b) = \\log_{a}(b)$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return Math.log(target) / Math.log(a);
    },
  },
    {
        name: "Union",
        tier: "College",
        type: "Concept",
        symbol: "$f(u, v) = u \\cup v$",
    },
    {
        name: "Intersect",
        tier: "College",
        type: "Concept",
        symbol: "$f(a, b) = a \\cap b$",
    },
];
