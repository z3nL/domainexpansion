from random import random
import websockets
import asyncio


async def dummy_connect(name: str, url: str):
    await asyncio.sleep(random() * 5)

    try:
        async with websockets.connect(url) as ws:
            msg = await ws.recv()
            msg = str(msg)
            print(f"{name} received message: {msg}")

            for _ in range(10):
                if "1" in msg:
                    await ws.send("2")
                elif "2" in msg:
                    await ws.send("1")

                msg = await ws.recv()
                msg = str(msg)
                print(f"{name} received message: {msg}")
                await asyncio.sleep(1)
    except websockets.WebSocketException:
        print(f"{name} disconnected")
    except Exception as e:
        print(f"{name} disconnected with exception: {e}")


async def main():
    await asyncio.gather(
        dummy_connect("Client 1", "ws://172.18.52.28:4545/ws/"),
        dummy_connect("Client 2", "ws://172.18.52.28:4545/ws/"),
        dummy_connect("Client 3", "ws://localhost:8000/ws/"),
    )


if __name__ == "__main__":
    asyncio.run(main())
