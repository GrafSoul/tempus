import React from 'react';

import classes from './AlarmClock.module.css';
import AlarmClockItem from './AlarmClockItem/AlarmClockItem';

const AlarmClock = (props) => {
    return (
            <div className={classes.AlarmClock}>
	            <h5>Current Time</h5>
	            <AlarmClockItem current={props.currentHour} /> : {' '}
	            <AlarmClockItem current={props.currentMin} /> : {' '}
	            <AlarmClockItem current={props.currentSec} />
	            <hr/>
            </div>
        );
};

export default AlarmClock;
