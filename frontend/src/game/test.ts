import { CONSTANT_CARDS } from "./constants";
import { FORMULA_CARDS } from "./formulas";
import { evaluate_formula } from "./cards";

// Example usage
const oneCard = namedConstantsDeck.find((card) => card.name === "One");
const twoCard = namedConstantsDeck.find((card) => card.name === "Two");
const additionCard = FORMULA_CARDS.find((card) => card.name === "Addition");
const subtractionCard = FORMULA_CARDS.find(
  (card) => card.name === "Subtraction",
);

// Attempt a valid evaluation
const result = evaluate_formula(additionCard!, 1, [twoCard!]);
if (result !== 3) {
  throw new Error("Addition(One, Two) should be 3, but was " + result);
} else {
  console.log("Addition(One, Two) was correctly evaluated to 3");
}

// Attempt an invalid evaluation
try {
  const result3 = evaluate_formula(additionCard!, [1], [twoCard!]);
  console.log(
    "Addition([1], Two) was incorrectly evaluated. Result: " + result3,
  );
} catch (error) {
  console.log("Addition([1], Two) was correctly rejected");
}

// Another valid
const result4 = evaluate_formula(subtractionCard!, 1, [twoCard!]);
if (result4 !== -1) {
  throw new Error("Subtraction(1, Two) should be -1, but was " + result4);
} else {
  console.log("Subtraction(1, Two) was correctly evaluated to -1");
}

// Sample multi-turn evaluation
