![Domain Expansion Logo](./frontend/src/assets/title.png)

Build your knowledge and your deck to conquer your opponents and your next math test.

## Overview

A turn-based card game where your objective is to leverage your mathematical understanding to out maneuver your opponent. Inspired by a fictional card game from an instagram video, Domain Expansion is intended to provide a fun way to learn, practice, and retain math concepts.

### Quick Links

- [Implementation](#implementation)
- [How to Play](#how-to-play)
- [Reflection](#reflection)
- [Game Rules](#game-rules)

## Developers

| Name           | Role       			| GitHub                                        | LinkedIn                                                        			|
| -------------- | ---------------------| --------------------------------------------- | --------------------------------------------------------------------------|
| Zen Lamberus   | Design / Structure   | [z3nL](https://github.com/z3nL)               | [Zen Lambertus](https://www.linkedin.com/in/zenlambertus)       			|
| Dillon Wilson  | Design / Middleware  | [KingDill305](https://github.com/KingDill305) | [Dillon Wilson](https://www.linkedin.com/in/dillon-wilson-1bb85720a)    	|
| Marion Forrest | Game Logic / Backend | [TheAdaptoid](https://github.com/TheAdaptoid) | [Marion Forrest](https://www.linkedin.com/in/themarionforrest/) 			|

## Implementation

### Languages, Libraries, and Frameworks

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [FastAPI](https://fastapi.tiangolo.com/)

### Architecture

#### TypeScript-React Tech Stack

- We all knew JavaScript, so it immediately seemed ideal
- Most of us were familiar with React, so we figured we could count on it to make an easily modularizable frontend
- A lot of processing data with specific parameters needed to be done, so we agreed to use TypeScript to easily define and reference interfaces

#### Peer-2-Peer game hosting with web sockets

We figured this system would be (relatively) quick and easy to set up and implement. To eleminate the need for extra logic to simulate a "host", we chose to use a server as a middleman relay so that both players could use the same client side logic.

Player 1 <===> Server <===> Player 2

With a simple TypeScript `interface` to store game state, we were able to successfully implement a peer-to-peer game. 

## How to Play

1. Start the server
2. Start player 1's client
3. Start player 2's client
4. Enjoy

#### Server

```bash
cd backend
uv sync
uv run server.py
```

#### Client

```bash
cd frontend
npm install
npm run dev
```

## Reflection

### What We Learned

#### Zen

I have never tried making a game, but it was lots of fun discussing the game concept and coming together to design it. Learning TypeScript was a bit of a learning curve for me at first, but as I got comfortable it felt easier to work with than JavaScript. I also put serious focus into app appearance for the first time in a while and was able to write intentful CSS. Besides that, I'm already familiar with React, but I always manage to learn more every time I use it - I leveraged multiple Context hooks to organize states even more efficiently, and this went a long way in carefully structuring the Component tree as the app became full of different views. This hackathon was also a return to WebSockets for me, where I was able to write a custom TypeScript Interface to serve as the blueprint for communication payloads.

#### Dillon

Throughout the hackathon, I became accustomed to React native as we developed a web app. I learned the syntax of TypeScript while enhancing my CSS skills, as I was the one helping design the pages and states of the game. I appreciated learning about implementing web sockets and a server to run our game through a Python server. My teammates taught me how to properly right code without running into to many problems while bug fixes an example being how to avoid prop drilling. In CSS, I became more knowledgeable about display, mostly using flex display, alignment, and flex direction to set up my pages. Then I was taught how to implement multiple states to allow for our design of the card on the active match page. All in all, the hackathon was a great and memorable experience, and I will definitely practice react as we only scratched the surface of potential using the language.

#### Marion

This was my first time using React and TypeScript for a hackathon project. Working on a frontend focused project was a wholely new experience for me. I got a decent introduction React and better familiarized myself with TypeScript. Additionally, this was my first video game submission to a hackathon. Figuring out how to manage game state and peer-to-peer communication was a very rewarding challenge and experience.

### Issues and Challenges

#### Zen

- Setting up WebSocket connection was slightly tedious
- Lots of states to keep track of throughout React components; had to be very careful with structure
- Have never actually written TypeScript for a project and faced lots of typing errors throughout development

#### Dillon

- Web Socket Learning Curve
- Accidentally prop drilling
- First time React User

#### Marion

- Very in-experienced with TypeScript and Node
- Had to get very creative with how react states were managed
- Some compromises had be made when implementing game mechanics in order to balance feature completeness and our obvious time constraints. 

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
