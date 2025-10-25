import './CardSmall.css'

function CardSmall() {
    //TODO format cards
    return (
        <div className="cardSmall">
            <div className='cardSmallCorners'>
                <p className='cardSmallCornerText'>[College]</p>
                <p className='cardSmallCornerText'><u>[10]</u></p>
            </div>

            <h3 className='cardSmallItem'><i>[sin(x)]</i></h3>

            <div className='cardSmallCorners'>
                <p className='cardSmallCornerText'><u>[10]</u></p>
                <p className='cardSmallCornerText'>[College]</p>
            </div>
        </div>
    );
}

export default CardSmall;
