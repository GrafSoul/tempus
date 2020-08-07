import React from 'react';
import { Badge } from 'reactstrap';

import classes from './TimerResult.module.css';

const TimerResult = (props) => {
    return (
	    <div className={classes.TimerItemGroup}>
		    <Badge className={classes.TimerItem} color="warning">{props.resultHour}</Badge> : <Badge
		    className={classes.TimerItem} color="warning">{props.resultMin}</Badge> : <Badge
		    className={classes.TimerItem} color="warning">{props.resultSec}</Badge>
	    </div>
    );
};

export default TimerResult;
