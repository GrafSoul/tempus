import React from 'react';
import { Button } from 'reactstrap';

import classes from './TimerControl.module.css';

const TimerControl = (props) => {
    return (
	    <div className={classes.TimerBtnGroup}>
		    {!props.running ?
			    <Button className={classes.TimerBtn} color="success" disabled={props.running} onClick={props.clickedStart}>
				    <i className="fa fa-play" />{' '}
				    Start
			    </Button>
			:
			    <Button className={classes.TimerBtn} color="danger" disabled={!props.running} onClick={props.clickedStop}>
				    <i className="fa fa-stop" />{' '}
				    Stop
			    </Button>
		    }

		    <Button className={classes.TimerBtn} disabled={!props.running} onClick={props.clickedPause}>
			    <i className="fa fa-pause" />{' '}
			    Pause
		    </Button>

	    </div>
     );
};

export default TimerControl;
