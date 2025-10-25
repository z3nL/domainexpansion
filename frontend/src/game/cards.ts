type Tier = "Elementary" | "High School" | "College" | "PhD";
type Type = "Constant" | "Formula" | "Concept";

/**
 * Represents a card in the game
 *
 * @param name The name of the card
 * @param tier The tier of the card
 * @param type The type of the card
 * @param symbol The symbol of the card, to be displayed in MarkDown
 * @param func The function of the card, if it is a formula card
 * @param value The value of the card, if it is a constant card
 */
interface Card {
  name: string;
  tier: Tier;
  type: Type;
  symbol: string; // String to be interpreted in MarkDown
  func?: Function;
  value?: number;
}


/**
 * Utility function that checks if a given value is of a certain type.
 *
 * @param value The value to check
 * @param expectedType The expected type of the value
 * @param position The position of the value, either "target" or "argument"
 * @returns true if the value is of the expected type, false otherwise
 * @throws If the value is not of the expected type
 */
function validate_type(
  value: any,
  expectedType: NumberConstructor | ArrayConstructor,
  position: "target" | "argument" = "target",
): boolean {
  if (expectedType === Number) {
    if (typeof value === "number") {
      return true;
    }
  } else if (expectedType === Array) {
    if (Array.isArray(value)) {
      return true;
    }
  }
  throw new Error(`Invalid ${position} type`);
}


/**
 * Evaluates a formula card with the given target and arguments
 *
 * @throws If the formula card is not a formula card or if any of the arguments are not constant cards with values
 * @param formula The formula card to evaluate
 * @param target The target value to pass to the formula card's function
 * @param args Optional additional arguments to pass to the formula card's function
 * @returns The result of the formula card's function
 */
function evaluate_formula(
  formula: Card,
  target: number | number[],
  args?: Card[],
): number {
  if (formula.type !== "Formula" || !formula.func) {
    throw new Error("Card is not a formula");
  }

  // No additional arguments
  if (args === undefined) {
    return formula.func(target);
  }

  // Additional arguments
  const argValues = args.map((arg) => {
    // Validate all arguments are constants with values
    if (arg.type !== "Constant" || arg.value === undefined) {
      throw new Error("Argument is not a constant with a value");
    }
    return arg.value;
  });
  return formula.func(target, ...argValues);
}

export { evaluate_formula, validate_type };
export type { Card, Tier, Type };
