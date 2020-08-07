import React from 'react';


import classes from './AlarmClockItem.module.css';

const AlarmClockItem = (props) => {
    return ( <span className={classes.AlarmClockItem} color={props.color}>{props.current}</span> );
};

export default AlarmClockItem;
