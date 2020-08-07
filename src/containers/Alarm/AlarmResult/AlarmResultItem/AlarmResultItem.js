import React from 'react';
import {Alert, Badge, Button} from 'reactstrap';

import classes from './AlarmResultItem.module.css';

const AlarmResultItem = (props) => {

	return (
		<li className={props.signal ? classes.AlertSignal : null }>
			<div className={classes.AlarmResultItem}>
				<Alert
					color={props.signal ? 'danger' : 'success'}
					className={classes.AlarmResultAlert }>

					<Badge
						className={classes.AlarmResultTime}
						color="warning">
						{props.addZero(props.hour)}
					</Badge>

					<span className={classes.AlarmResultDotted}>:</span>

					<Badge
						className={classes.AlarmResultTime}
						color="warning">
						{props.addZero(props.min)}
					</Badge>{' '}

					<div className={classes.AlarmResultBtnGroup}>
						<Button className={classes.AlarmResultBtn}
						        color="light"
								onClick={() => props.editSignal(props.id, props.hour, props.min)}>
							<i className="fas fa-edit"/>{' '}
						</Button>{' '}
						<Button
							className={classes.AlarmResultBtn}
							color="light"
							onClick={() => props.deleteAlarm(props.id)}>
							<i className="fas fa-trash-alt"/>{' '}
						</Button>
					</div>
				</Alert>
			</div>
		</li>
	);
};

export default AlarmResultItem;
