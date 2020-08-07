import React from 'react';
import { Button } from 'reactstrap';

import signal from '../../../assets/signal.mp3';
import classes from './AlarmSignal.module.css';

const AlarmSignal = (props) => {
    return (
            <div className={classes.AlarmSignal}>
	            <Button
		            className={classes.SignalBtn}
		            color="danger"
		            size="lg"
	                onClick={props.stopSignal}>
		            <i className="fa fa-volume-up" />  Turn off signal
	            </Button>

	            <audio src={signal} loop autoPlay />

            </div>
        );
};

export default AlarmSignal;
