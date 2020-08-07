import React from 'react';
import {Button} from 'reactstrap';

import classes from './AlarmAdd.module.css';
import AlarmSignal from '../AlarmSignal/AlarmSignal'

const AlarmAdd = (props) => {
	return (
		<div className={classes.AlarmAdd}>

			{props.signal ?
				<AlarmSignal
					stopSignal={props.stopSignal} />
				:
				<Button
					color="success"
					size="lg"
					onClick={props.setAlarm}>
					<i className="fas fa-plus-square" />{' '}
					Add New Alarm
				</Button>
			}

		</div>
	);
};

export default AlarmAdd;
