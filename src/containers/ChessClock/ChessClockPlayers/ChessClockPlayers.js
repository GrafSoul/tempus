import React from 'react';

import classes from './ChessClockPlayers.module.css';

import ChessClockPlayer from './ChessClockPlayer/ChessClockPlayer';

const ChessClockPlayers = (props) => {
	const players = props.players.map((item, index) => {
		return <ChessClockPlayer
			key={index}
			number={index+1}
			playerId={item.id}
			playerMin={item.min}
			playerSec={item.sec}
			playerActive={item.active}
			zero={props.zero}
			startPlayer={props.startPlayer}
		/>
	});
    return (
            <div className={classes.ChessClockPlayers}>
	            {players}
            </div>
        );
};

export default ChessClockPlayers;
