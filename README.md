# Domain Expansion<sub>(tm)</sub>

Build your knowledge and your deck to conquer your opponents and your next math test.

## Overview

A turn-based card game where your objective is to leverage your mathematical understanding to out maneuver your opponent.

==expand upon==

### Quick Links

- [Implementation](#implementation)
- [Deployment and Usage](#deployment-and-usage)
- [Reflection](#reflection)
- [Game Rules](#game-rules)

## Developers

| Name           | Role       			| GitHub                                        | LinkedIn                                                        |
| -------------- | ---------------------| --------------------------------------------- | --------------------------------------------------------------- |
| Zen Lamberus   | Design / Structure  	| [z3nL](https://github.com/z3nL)               | [Zen Lambertus](https://www.linkedin.com/in/zenlambertus)       |
| Dillon Wilson  | Design / Structure   | [KingDill305](https://github.com/KingDill305) | [Dillon Wilson](https://www.linkedin.com/in/dillon-wilson-1bb85720a)    |
| Marion Forrest | Game Logic / Backend | [TheAdaptoid](https://github.com/TheAdaptoid) | [Marion Forrest](https://www.linkedin.com/in/themarionforrest/) |

## Implementation

### Languages, Libraries, and Frameworks

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

### Architecture

==A high level description of the project's architecture==

#### Frontend only

==why==

#### TypeScript-React Tech Stack

==why==

#### Peer-2-Peer game hosting with web sockets

==why==

## Deployment and Usage

### Dependencies

- [node](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

```bash
npm i # install dependencies
```

### How to Play

==how to play/run the game==

## Reflection

### What We Learned

#### Zen

#### Dillon

#### Marion

- First major project with TypeScript
- First time doing a game

### Issues and Challenges

#### Zen

#### Dillon

#### Marion

- Very in-experienced with TypeScript and Node
- Small hiccups with TypeScript syntax

## Game Rules

### Deck Building

Each player's deck will consist of **60** cards. Decks can be either assembled manually or generated at random. The total power level of the deck *cannot exceed* **500** points.

There are three main card types: **Constants, Formulas, and Concepts**. *Constants* are fixed, known, numbers. Constants serve as plug-and-play variables for formulas and concepts. *Formulas* are well-defines functions and operations that can be applied to player values and constants and be expressed as $f(x) = y$. *Concepts* are mathematical theorems and ideas that can be applied to both constants and, abstractly, formulas. Concepts also include functions and operations that arbitrarily change, or *expand*, the domain of the player's value. Cards should be allocated in a 2 constants to 1 formula to 1 concept ratio (*2-1-1*).

- **Constants**: $0, 1, 5, 6.7, \pi, e, \dots$
- **Formulas**: where $u$ is a set or vector
	- $f(a, b) = a + b$
	- $f(a)=2^a$
	- $f(a,b)=\log_{a}(b)$,
	- $f(u)=\text{max}(u)$
	- $f(u) = \text{softmax}(u)$
- **Concepts**:
	- **Set Theory**: Converts a scalar into a set. $2 \to \{ 2 \}$
	- **Union & Intersect**: Combines or Intersects two sets.
	- **Central Limit Theorem**: Adds random values to a set until it has a size of at least $30$
	- **Dual Root**: $f(a) = \{-\sqrt{ a }, \sqrt{ a }\}$
	- **Complexify**: $f(a) = x + yi$

Cards also have tiers: **Elementary, High School, College, PHD**. Card tier availability will be effected by game difficulty. With higher education levels, more complex and powerful cards are unlocked.

| Card Tier   | Equivalent Rarity | Power |
| ----------- | ----------------- | ----- |
| Elementary  | Common            | 1     |
| High School | Rare              | 5     |
| College     | Ultra Rare        | 10    |
| Phd.        | Legendary         | 20    |

### Turn Structure

There is a maximum of **20** turns. At the start of their turn, each player can play any combination of their hand. Players **must** play at least one concept card or one formula card. At the end of their turn, each player draws *enough* cards to refill their hand. Cards are drawn at random, *without replacement*, from their starting deck.

The player's *"data type"* with determine what operations are valid against it. At any given moment a player's value maybe one of:

- An integer or decimal scalar
- A set, `{ }`, of scalars
- An $n$-component vector, `[ ]`
- undefined, $\emptyset$

### Meta and Strategy

- **Undefined**: Doing *zero-division* and other undefined behavior will put the player's value in **Undefined** mode. While in this state the player's value is immune to all actions that do not result in regaining defined behavior (buff). However, while in this state the player's value is effectively negative infinity. So if the game reaches an end clause, they will lose the match.
- **Set Theory and Domain Expansion**: Expanding a player's value into multiple dimensions grants the opportunity to accelerate divergences. With multiple component vectors, all of the values are fair game for the end clauses.
	- Apply *Min* to an opponent to decrease their value
	- Apply *Summation* or *Max* to one-self to increase their value 

### Wining/Losing Criteria

The a winner is crowned and the game ends when one of the following occurs:

- One player reaches *positive infinity*, winner of the match
- One player reaches *negative infinity*, loser of the match
- **20** turns have been completed. Winner is the player with the *largest positive value*
- At least one player has run out of cards. Winner is the player with the *largest positive value*

### Constants, Functions, and Concepts

| Type    | Tier        | Name           | Notation |
| ------- | ----------- | -------------- | -------- |
| Formula | Elementary  | Addition       |          |
| Formula | Elementary  | Subtraction    |          |
| Formula | Elementary  | Multiplication |          |
| Formula | Elementary  | Division       |          |
| Formula | High School | Power          |          |
| Formula | High School | Logarithm      |          |
