import type { ICard } from "../game/cards";
import MatchCard from "./MatchCard";
import CardSmall from "./CardSmall";
import { useState } from "react";

function MatchCardWrapper({ card, handlePlayCardModal }: {card: ICard, handlePlayCardModal: () => void}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && <MatchCard card={card} handlePlayCardModal={handlePlayCardModal} />}
            {!isHovered && <CardSmall card={card} />}
        </div>
    )
}

export default MatchCardWrapper;