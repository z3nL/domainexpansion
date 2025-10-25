import './PlayCardModal.css';

// TODO implement actual onClick for playCardButton

function PlayCardModal({ handlePlayCardModal }: { handlePlayCardModal: () => void }) {
    return (
        <div className="playCardModal" onClick={handlePlayCardModal}>
            <div className="playCardModalContent" onClick={e => e.stopPropagation()}>
                <h2>Play Card</h2>
                <button className="playCardButton" onClick={handlePlayCardModal}>Let's Go!</button>
            </div>
        </div>
    );
}

export default PlayCardModal;