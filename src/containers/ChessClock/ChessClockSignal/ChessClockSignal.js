import React from 'react';

import { Button } from 'reactstrap';

import signal from '../../../assets/signal.mp3';
import classes from './ChessClockSignal.module.css';

const ChessClockSignal = (props) => {
    return (
            <div>
	            <Button
		            className={classes.SignalBtn}
		            color="danger"
		            size="lg"
	                onClick={props.stopSignal()}>
		            <i className="fa fa-volume-up" />{' '}
		            The Player {props.activeId + 1} ran out of time. Turn off signal
	            </Button>
	            <audio src={signal} loop autoPlay />
            </div>
        );
};

export default ChessClockSignal;
