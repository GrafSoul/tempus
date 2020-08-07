import React from 'react';
import { Button } from 'reactstrap';

import classes from './PomidoroControl.module.css';

const PomidoroControl = (props) => {
    return (
	    <div className={classes.PomidoroBtnGroup}>
		    <hr />
		    { !props.running ?
			    <Button className={classes.PomidoroBtn} disabled={props.running} color="success" onClick={props.clickedStart} >
				    <i className="fa fa-play" />{' '}
				    Start
			    </Button>
			  :
			    <Button className={classes.PomidoroBtn} disabled={!props.running} color="danger" onClick={props.clickedStop} >
				    <i className="fa fa-stop" />{' '}
				    Stop
			    </Button>
		    }

		    <Button className={classes.PomidoroBtn} disabled={props.running} onClick={props.clickedReset} >
			    <i className="fa fa-sync" />{' '}
			    Reset
		    </Button>
	    </div>
        );
};

export default PomidoroControl;
