import React from 'react';
import { Alert } from 'reactstrap';

import classes from './StopwatchInfo.module.css';

const StopwatchInfo = (props) => {
    return (
	    <div  className={['col-sm-12', 'col-md-offset-3', classes.StopwatchInfo].join(' ')}>
		    <Alert color={props.colorInfo}>{props.textInfo}</Alert>
		    <hr />
	    </div>
    );
};

export default StopwatchInfo;
