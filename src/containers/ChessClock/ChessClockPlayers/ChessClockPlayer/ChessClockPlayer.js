import React from 'react';

import { Badge, Button } from 'reactstrap';
import classes from './ChessClockPlayer.module.css';

const ChessClockPlayer = (props) => {
	return (
		<div className={classes.ChessClockPlayer}>
			<Button
				color="success"
				disabled={props.playerActive}
				onClick={props.startPlayer(props.playerId).bind(null,props.playerId)}>
				<i className="fas fa-hourglass-start" />{' '}
				Player {props.number}
			</Button>

			<div className={classes.ChessClockResultItemGroup} style={{opacity: !props.playerActive ? 1 : .5 }}>
				<Badge className={classes.ChessClockResultItem} color="warning">{props.zero(props.playerMin)}</Badge> : {' '}
				<Badge className={classes.ChessClockResultItem} color="warning">{props.zero(props.playerSec)}</Badge>
			</div>
		</div>
	);
};

export default ChessClockPlayer;
