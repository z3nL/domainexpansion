Using the follow interface schema, generate a deck of "Constant" type cards.
Give your descriptions a magical flair, and make sure to include a few of each tier.

```typescript
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
  description: string;
  tier: Tier;
  type: Type;
  symbol: string; // String to be interpreted in MarkDown
  func?: Function;
  value?: number;
}
```

### Example Output

```typescript
[
  {
    name: "One",
    description: "The one true constant. The source of unitary divinity.",
    tier: "Elementary", // Expected education level to understand this concept
    type: "Constant",
    symbol: "$1$", // A Latex string to be interpreted in MarkDown
    value: 1, // The value of the constant
    // Note: `func` is not required for constant cards
  },
]
```

Output only TypeScript code.