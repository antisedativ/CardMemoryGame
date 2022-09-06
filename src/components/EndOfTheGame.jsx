import React from 'react';

const EndOfTheGame = ({score}) => {
    return (
        <div className="end_game">
            <div className="end_game-title">
                you won!!!
            </div>
            <div className="end_game-score">
                Score: {score}
            </div>
            <div className="end_game-gif">
                <img src={require('../icon/dance.gif')} alt="final_dance" width="300px" height="300px"/>
            </div>
        </div>
    );
};

export default EndOfTheGame;