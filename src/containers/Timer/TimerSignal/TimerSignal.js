import React from 'react';

import { Button } from 'reactstrap';

import signal from '../../../assets/signal.mp3';
import classes from './TimerSignal.module.css';

const TimerSignal = (props) => {
    return (
            <div>
	            <Button
		            className={classes.SignalBtn}
		            color="danger"
		            size="lg"
	                onClick={props.checkedSignal}>
		            <i className="fa fa-volume-up" />  Turn off signal
	            </Button>
	            <audio src={signal} loop autoPlay/>
            </div>
        );
};

export default TimerSignal;
