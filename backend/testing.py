import math
import random


def decompose(number: int) -> list[float]:
    numbers: list[float] = []
    remaining: float = number
    while remaining > 0:
        value: float = math.floor(random.random() * remaining)
        numbers.append(value)
        remaining -= value
    return numbers


def main():
    assert sum(decompose(10)) == 10
    assert sum(decompose(100)) == 100


if __name__ == "__main__":
    main()
