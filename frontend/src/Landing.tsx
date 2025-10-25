import './Landing.css'

function Landing() {
    return (
        <>
            <h1>Domain Expansion</h1>
            <div className='landingOptions'>
                <button className='landingButton'>New Game</button>
                <button className='landingButton'>Edit Deck</button>
            </div>
            <footer className='landingFooter'>
                <p>by Marrion Forrest, Dillon Wilson, and Zen Lambertus</p>
            </footer>
        </>
    )
}

export default Landing;