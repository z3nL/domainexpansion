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
      if (target === 0){
        return 0.001
      }
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
      return Math.sqrt(target);
    },
  },
];

export const trigFormulaDeck: ICard[] = [
  {
    name: "Sinodial Portal",
    description:
      "Step into the sinodial realm and ride the waves of change. Do not open near a cosodial portal.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\sin(x)$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return Math.sin(target);
    },
  },
  {
    name: "Cosodial Portal",
    description:
      "Step into the cosodial realm and ride the waves of change. Do not open near a sinodial portal.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\cos(x)$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return Math.cos(target);
    },
  },
  {
    name: "Tanodial Portal",
    description: "You should have heeded the warning.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\tan(x)$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return Math.tan(target);
    },
  },
];

export const statsFormulaDeck: ICard[] = [
  // {
  //   name: "Spell of Maximilia",
  //   description: "Only one number shall stall stronger than the rest.",
  //   tier: "High School",
  //   type: "Formula",
  //   symbol: "$f(u) = \\max(u)$",
  //   func: (target: number[]) => {
  //     validate_type(target, Array, "target");
  //     return Math.max(...target);
  //   },
  // },
  // {
  //   name: "Spell of Minimilia",
  //   description: "*\"Sometimes, cowards do survive.\"*",
  //   tier: "High School",
  //   type: "Formula",
  //   symbol: "$f(u) = \\min(u)$",
  //   func: (target: number[]) => {
  //     validate_type(target, Array, "target");
  //     return Math.min(...target);
  //   }
  // }
];
