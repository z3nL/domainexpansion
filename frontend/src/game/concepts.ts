import type { Card } from "./cards";
import { validate_type } from "./cards";

export const CONCEPT_CARDS: Card[] = [
  {
    name: "Set Theory",
    description: "[[SKIPPED]]",
    tier: "College",
    type: "Concept",
    symbol: "$\\{ a, \\dots \\}$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return [target];
    },
  },
  {
    name: "Arbitrary Decompose",
    description: "An inverse summation function.",
    tier: "PhD",
    type: "Concept",
    symbol: "$f(x) = \\sum_{i = 1}^{x} i$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      const nums: number[] = [];
      let remaining = target;
      while (remaining > 0) {
        const value = Math.floor(Math.random() * 10);
        nums.push(value);
        remaining -= value;
      }
      return nums;
    },
  },
];
