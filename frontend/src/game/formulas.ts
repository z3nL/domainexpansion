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
      if (target === 0) {
        return 0.001;
      }
      return 1 / target;
    },
  },
  {
    name: "The Root of Duality",
    description: "Reveal one's true dual nature, whether it be good or evil.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\sqrt{x}$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      if (Math.random() < 0.5) {
        return -1 * Math.sqrt(target);
      }
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
  {
    name: "Cosecantodial Portal",
    description:
      "Closely resembles the sinodial portal wonder if they are related",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\csc(x) = \\frac{1}{\\sin(x)}$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return 1 / Math.sin(target);
    },
  },
  
  {
    name: "Cotanodial Portal",
    description:
      "Flipping the tides of tandonial portal",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\cot(x) = \\frac{1}{\\tan(x)}$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return 1 / Math.tan(target);
    },
  },
  
  {
    name: "Secanodial Portal",
    description:
      "Does open near a cosodial portal.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x) = \\sec(x) = \\frac{1}{\\cos(x)}$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return 1 / Math.cos(target);
    },
  },


  {
    name: "Pythagorean Theorem",
    description: "All roads lead to c",
    tier: "High School",
    type: "Formula",
    symbol: "$f(x, y) = x^2 + y^2$",
    func: (target: number, a: number) => {
      validate_type(target, Number, "target");
      validate_type(a, Number, "argument");
      return target ** 2 + a ** 2;
    },
  },

];

export const geometryFormulaDeck: ICard[] = [
  {
    name: "Around the Global in 360 Degrees",
    description: "Take a trip around the world, and the unit circle.",
    tier: "High School",
    type: "Formula",
    symbol: "$f(r) = 2 \\pi r$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return 2 * Math.PI * target;
    },
  },
  {
    name: "Discriminant",
    description: "Dont judge based off number",
    tier: "High School",
    type: "Formula",
    symbol: "$D(x, y, z) = x^2 - 4(y)(z)$",
    func: (target: number, y: number, z: number) => {
      validate_type(target, Number, "target");
      validate_type(y, Number, "argument");
      validate_type(z, Number, "argument");
      return target ** 2 - (4 * y * z);
    },
  },
];

export const physicsFormulaDeck: ICard[] = [

  {
    name: "Kinetic Energy",
    description: "Give me your energy",
    tier: "High School",
    type: "Formula",
    symbol: "$KE(m, v) = \\frac{1}{2}mv^2$",
    func: (target: number, v: number) => {
      validate_type(target, Number, "target");
      validate_type(v, Number, "argument");
      return 0.5 * target * (v ** 2);
    },
  },
   {
    name: "Centripetal Force",
    description: "With an almighty push",
    tier: "High School",
    type: "Formula",
    symbol: "$F_{c}{m, v, r} = \\frac{mv^2}{r}$",
    func: (target: number, v: number,r: number ) => {
      validate_type(target, Number, "target");
      validate_type(v, Number, "argument");
      validate_type(r, Number, "argument");
      return (target * v ** 2) / r;
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
