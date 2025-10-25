import type { ICard } from "./cards";
import { validate_type } from "./cards";

/*
Formula Syntax:
function formulaName(target: number | number[], otherArgs: number[]): number {
    // Validate inputs

    // Perform calculation
}
*/

export const elementaryFormulaDeck: ICard[] = [
  {
    name: "Spell of Scalar Union",
    description: "Two numbers merge into one. A summation of perfect harmony.",
    tier: "Elementary",
    type: "Formula",
    symbol: "$f(x, y) = x + y$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target + a;
    },
  },
  {
    name: "The Art of Reduction",
    description: "Seperate a whole and reveal the remaining truths.`",
    tier: "Elementary",
    type: "Formula",
    symbol: "$f(x, y) = x - y$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target - a;
    },
  },
  {
    name: "The Charm of Growth",
    description:
      "Achieve great abundance through the use of the dark art of multiplication.",
    tier: "Elementary",
    type: "Formula",
    symbol: "$f(x, y) = x \\times y$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target * a;
    },
  },
  {
    name: "Spell of Sharding",
    description:
      "Fracture a form into perfect shards. The perfect balnce of precision and chaos.",
    tier: "Elementary",
    type: "Formula",
    symbol: "$f(x, y) = \\frac{x}{y}$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target / a;
    },
  },
];

export const advancedFormulaDeck: ICard[] = [
  {
    name: "Invocation of Magnitude",
    description: "Now you're playing with **POWER!**",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x, k) = x^k$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target ** a;
    },
  },
  {
    name: "Magnitude's Cipher",
    description:
      "Unveil hidden exponents and release the power that lies beneath the surface.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x, b) = \\log_{b}(x)$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return Math.log(target) / Math.log(a);
    },
  },
  {
    name: "Realm Inversion",
    description: "Turn the world inside-out, and discover one's true nature.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\frac{1}{x}$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return 1 / target;
    },
  },
  {
    name: "The Root of Duality",
    description: "Reveal one's true dual nature.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\sqrt{x}$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      const root: number = Math.sqrt(target);
      return [-1 * root, root];
    },
  },
];

export const trigFormulaDeck: ICard[] = [];

export const statsFormulaDeck: ICard[] = [];
