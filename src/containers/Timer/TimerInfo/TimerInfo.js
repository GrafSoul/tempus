import React from 'react';
import { Alert } from 'reactstrap';

import classes from './TimerInfo.module.css';

const TimerInfo = (props) => {
    return (
    	<div  className={['col-sm-12', 'col-md-offset-3', classes.TimerInfo].join(' ')}>
		    <Alert color={props.colorInfo}>{props.textInfo}</Alert>
		    <hr />
	    </div>
     );
};

export default TimerInfo;
