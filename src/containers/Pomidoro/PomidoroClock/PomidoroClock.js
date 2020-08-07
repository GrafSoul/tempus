import React, { Component } from 'react';
import { Badge } from 'reactstrap';

import classes from './PomidoroClock.module.css';

class PomidoroClock extends Component {

	state = { date: new Date() };

	componentDidMount() {
		this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

    render() {
        return (
        	<div>
		        <p className={classes.Label}>Current time</p>
		        <Badge color="light" className={classes.Clock}>{this.state.date.toLocaleTimeString()}</Badge>
		        <hr />
	        </div>

        );
    }
}

export default PomidoroClock;
