import type { Card } from "./cards.ts";
import { validate_type } from "./cards.ts";

export const CONCEPT_CARDS: Card[] = [
    {
        name: "Set Theory",
        tier: "College",
        type: "Concept",
        symbol: "$\\{ a, \\dots \\}$",
        func: (target: number) => {
            validate_type(target, Number, "target");
            return [target];
        }
    },
]