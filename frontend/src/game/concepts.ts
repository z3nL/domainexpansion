import type { ICard } from "./cards";
import { validate_type } from "./cards";

export const conceptDeck: ICard[] = [
  {
    name: "The Phantom Zone",
    description:
      "Go beyond the limits of reality, and beyond the void, and step into the ***phantom zone***.",
    tier: "High School",
    type: "Concept",
    symbol: "$f(x) = -1 \\times x$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return target * -1;
    },
  },
  {
    name: "Sha's 256 Ciphers",
    description:
      "Sha's 256 Ciphers are a series of enchantations that allow you to alter reality for a chance at great success, or a risk of greater failure.",
    tier: "College",
    type: "Concept",
    symbol: "$\\text{hash}(x)$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      const hash = Math.abs(Math.sin(target) * 10000);
      return Math.floor(hash % target) + 1;
    },
  },
  {
    name: "The Secrets of the Universe",
    description:
      "Learn the secrets of the universe and gain access to **Unlimited Power!**.",
    tier: "High School",
    type: "Concept",
    symbol: "$E(m) = mc^2$",
    func: (target: number) => {
      validate_type(target, Number, "target");
      return target * 299792458 ** 2;
    },
  },
  // {
  //   name: "Set Theory",
  //   description: "[[SKIPPED]]",
  //   tier: "College",
  //   type: "Concept",
  //   symbol: "$x \\to \\{ x \\}$",
  //   func: (target: number): number[] => {
  //     validate_type(target, Number, "target");
  //     return [target];
  //   },
  // },
  // {
  //   name: "Central Limit Theorem",
  //   description: "You've failed to contain the raw numerical power of statistics. Now you're cursed to bare the weight of **30** random samples.",
  //   tier: "College",
  //   type: "Concept",
  //   symbol: "$x \\to \\{ x_1, \\dots, x_{30} \\}$",
  //   func: (target: number): number[] => {
  //     const nums: number[] = [];
  //     let direction: number = 1;
  //     for (let i = 0; i < 30; i++) {
  //       if (i > 20) { // Last 10 are negative
  //         direction = -1;
  //       }
  //       nums.push(Math.random() * target * direction);
  //     }
  //     return nums;
  //   },
  // },
  // {
  //   name: "The Chains of Pow-Ar",
  //   description: "Now you're *really* playing with **POWER!**",
  //   tier: "College",
  //   type: "Concept",
  //   symbol: "$x \\to \\{ x^1, x^2, \\dots, x^{10} \\}$",
  //   func: (target: number): number[] => {
  //     const nums: number[] = [];
  //     for (let i = 1; i <= 10; i++) {
  //       nums.push(target ** i);
  //     }
  //     return nums;
  //   },
  // },
];
