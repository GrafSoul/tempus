import React from 'react';
import { Badge, Button } from 'reactstrap';

import classes from './AlarmSelectItem.module.css';

const AlarmSelectItem = (props) => {

    return (
            <div>
	            <div className={classes.AlarmSelectItem}>
		            <Button
			            color="secondary"
			            disabled={props.setCurrentTime <= 0}
			            className={classes.AlarmNumberBtn}
			            onClick={() => props.timeDecrement(props.name)}>
			            <i className="fas fa-minus-square" /></Button>

		            <Badge
			            color="info"
			            className={classes.AlarmNumber}>{props.setCurrentTime}</Badge>

		            <Button
			            color="secondary"
			            disabled={
				            (props.name === 'min' && props.setCurrentTime) >= 59 ||
				            (props.name === 'hour' && props.setCurrentTime) >= 24
			            }
			            className={classes.AlarmNumberBtn}
			            onClick={() => props.timeIncrement(props.name)}>
			            <i className="fas fa-plus-square" /></Button>
	            </div>
            </div>

        );
};

export default AlarmSelectItem;
