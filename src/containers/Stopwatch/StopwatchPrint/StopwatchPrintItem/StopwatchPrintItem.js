import React from 'react';
import { Badge, UncontrolledAlert } from 'reactstrap';

import classes from './StopwatchPrintItem.module.css';

const StopwatchPrintItem = (props) => {

    return (
            <li>
	            <UncontrolledAlert>

		            <span className={classes.StopwatchPrintNumber}>#{props.index} - </span>{' '}

		            <Badge className={classes.StopwatchPrintItem} color="secondary">
			            {props.addZero(props.hour)}
			            </Badge> : {' '}
		            <Badge className={classes.StopwatchPrintItem} color="secondary">
			            {props.addZero(props.min)}
			            </Badge> : {' '}
		            <Badge className={classes.StopwatchPrintItem} color="secondary">
			            {props.addZero(props.sec)}
			            </Badge> : {' '}
		            <Badge className={classes.StopwatchPrintItemMs} color="secondary">
			            {props.addZero(props.ms)}
			        </Badge>

	            </UncontrolledAlert>
            </li>
        );
};

export default StopwatchPrintItem;
