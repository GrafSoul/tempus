import React from 'react';
import { Button } from 'reactstrap';

import classes from './AlarmSelect.module.css';
import AlarmSelectItem from './AlarmSelectItem/AlarmSelectItem';

const AlarmSelect = (props) => {
	return (
		<div>
			<h5 className={classes.AlarmSelectTitle}>Select time and add alarm</h5>
			<div className={classes.AlarmSelect}>

				<AlarmSelectItem
					name="hour"
					timeIncrement={props.timeIncrement}
					timeDecrement={props.timeDecrement}
					setCurrentTime={props.setHour}
				/>

				<AlarmSelectItem
					name="min"
					timeIncrement={props.timeIncrement}
					timeDecrement={props.timeDecrement}
					setCurrentTime={props.setMin}/>

			</div>
			<div className={classes.AlarmSelectBtnGroup}>

				<Button
					outline
					color="success"
					className={classes.AlarmSelectBtn}
					onClick={props.addAlarm}>
					<i className="fas fa-plus-square" />{' '}
					Save alarm
				</Button>

				<Button
					outline
					color="secondary"
					className={classes.AlarmSelectBtn}
				    onClick={props.toggleModal}>
					<i className="fas fa-ban" />{' '}
					Cancel
				</Button>

			</div>
		</div>
	);
};

export default AlarmSelect;
