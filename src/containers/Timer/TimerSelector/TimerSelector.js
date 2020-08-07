import React from 'react';
import { FormGroup, Label, Input, Form } from 'reactstrap';

import classes from './TimerSelector.module.css';

const TimerSelector = (props) => {
	return (
		<div>
			<hr />
			<div className={classes.TimerSelectGroup}>
				<h5>Select new time</h5>
				<Form inline>
					<FormGroup className={[classes.TimerSelector, "mb-2", "mr-sm-2", "mb-sm-0"].join(' ')}>
						<Label for="hourSelect" className="mr-sm-2">Hour </Label>
						<Input
							type="select"
							name="hourSelect"
							id="hourSelect"
							value={props.currentHour}
							onChange={(event) => props.selectHour(event.target.value)}>
							{props.optionCreator}
						</Input>
					</FormGroup>
					<FormGroup className={[classes.TimerSelector, "mb-2", "mr-sm-2", "mb-sm-0"].join(' ')}>
						<Label for="minSelect" className="mr-sm-2">Min. </Label>
						<Input
							type="select"
							name="minSelect"
							id="minSelect"
							value={props.currentMin}
							onChange={(event) => props.selectMin(event.target.value)}>
							{props.optionCreator}
						</Input>
					</FormGroup>
					<FormGroup className={[classes.TimerSelector, "mb-2", "mr-sm-2", "mb-sm-0"].join(' ')}>
						<Label for="secSelect" className="mr-sm-2">Sec. </Label>
						<Input
							type="select"
							name="secSelect"
							id="secSelect"
							value={props.currentSec}
							onChange={(event) => props.selectSec(event.target.value)}>
							{props.optionCreator}
						</Input>
					</FormGroup>
				</Form>
			</div>
		</div>

	);
};

export default TimerSelector;
