import React from 'react';

import { Button } from 'reactstrap';

import classes from './StopwatchControl.module.css';

const StopwatchControl = (props) => {
	return (
		<div className={classes.StopwatchBtnGroup}>
			{ !props.running ?
				<Button className={classes.StopwatchBtn} disabled={props.running} color="success" onClick={props.clickedStart}>
					<i className="fa fa-play" />{' '}
					Start
				</Button>
			:
				<Button className={classes.StopwatchBtn} disabled={!props.running} color="danger" onClick={props.clickedStop}>
					<i className="fa fa-stop" />{' '}
					Stop
				</Button>
			}

			<Button className={classes.StopwatchBtn} disabled={props.running} onClick={props.clickedReset}>
				<i className="fa fa-sync" />{' '}
				Reset
			</Button>
			<Button className={classes.StopwatchBtn} disabled={!props.running} color="primary" onClick={props.clickedPrint}>
				<i className="fa fa-flag-checkered" />{' '}
				Lap
			</Button>
		</div>
	);
};

export default StopwatchControl;
