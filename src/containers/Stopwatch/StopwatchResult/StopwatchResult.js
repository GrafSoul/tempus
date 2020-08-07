import React from 'react';
import { Badge } from 'reactstrap';

import classes from './StopwatchResult.module.css';

const StopwatchResult = (props) => {
	return (
		<div className={classes.StopwatchItemGroup}>
			<Badge className={classes.StopwatchItem} color="warning">{props.resultHour}</Badge> : {' '}
			<Badge className={classes.StopwatchItem} color="warning">{props.resultMin}</Badge> :  {' '}
			<Badge className={classes.StopwatchItem} color="warning">{props.resultSec}</Badge> : {' '}
			<Badge className={classes.StopwatchMilliseconds} >{props.resultMs}</Badge>
		</div>
	);
};

export default StopwatchResult;
