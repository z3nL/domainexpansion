from typing import Literal
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from dataclasses import dataclass, field, asdict, astuple
from typing import TypedDict
import asyncio

app = FastAPI()


@dataclass
class Card:
    name: str
    description: str
    tier: str
    type: str
    symbol: str


@dataclass
class GameState:
    turn: int
    player1_score: float | list[float]
    player2_score: float | list[float]
    prev_moves: list[Card]
    game_over: bool
    winner: Literal["player1", "player2", "tie"]


@dataclass
class GameRole:
    role: Literal["player1", "player2"]


class GameRoom:
    def __init__(self):
        self.player1: WebSocket | None = None
        self.player2: WebSocket | None = None

    def fetch_role(self, websocket: WebSocket) -> GameRole:
        if self.player1 is None or self.player2 is None:
            raise Exception("Room is empty")

        return GameRole("player1") if websocket == self.player1 else GameRole("player2")

    def fetch_opponent(self, websocket: WebSocket) -> WebSocket:
        if self.player1 is None or self.player2 is None:
            raise Exception("Room is empty")

        return self.player1 if websocket == self.player2 else self.player2


# Global state
room = GameRoom()


@app.websocket("/ws/")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    # Assign player slots
    if not room.player1:
        room.player1 = websocket
        await room.player1.send_json(asdict(GameRole("player1")))
        print("Player 1 connected")
    elif not room.player2:
        room.player2 = websocket
        await room.player2.send_json(asdict(GameRole("player2")))
        print("Player 2 connected")
    else:
        await websocket.send_json({"error": "Room is full"})
        await websocket.close()
        return

    try:
        while True:
            if room.player1 is None or room.player2 is None:
                await websocket.send_json({"error": "Waiting for other player"})
                await asyncio.sleep(1)
            else:
                data = await websocket.receive_json()
                print(data)
                # Send message to other player
                await room.fetch_opponent(websocket).send_json(data)

    except WebSocketDisconnect:
        if room.player1 == websocket:
            room.player1 = None
            print("Player 1 disconnected")
        elif room.player2 == websocket:
            room.player2 = None
            print("Player 2 disconnected")

    except Exception as e:
        print("An error occurred:", e)


def main():
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=4545)


if __name__ == "__main__":
    main()
