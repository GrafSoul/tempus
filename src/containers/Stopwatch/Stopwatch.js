import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Stopwatch.module.css';
import stopwatchInfo from '../../store/info/stopwatchInfo';

import StopwatchInfo from './StopwatchInfo/StopwatchInfo';
import StopwatchResult from './StopwatchResult/StopwatchResult';
import StopwatchControl from './StopwatchControl/StopwatchControl';
import StopwatchPrint from './StopwatchPrint/StopwatchPrint';
import * as actionCreators from "../../store/actions";

class Stopwatch extends Component {

	componentWillUnmount() {
		clearInterval(this.interval);
		this.props.timeRunning(false);
		this.props.setZero();
	}

	updateTime = () => {
		const data = new Date().getTime();
		const duration = data - this.props.date;

		let milliseconds = Math.floor((duration % 1000) / 10);
		let seconds = Math.floor((duration / 1000) % 60);
		let minutes = Math.floor((duration / (1000 * 60)) % 60);
		let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

		if(this.props.date === null) {
			this.props.setDate(data);
		} else if (this.props.stopTime) {
			let timePassed = data - this.props.stopTime;
			let resultPassed = this.props.date + timePassed;
			this.props.setDate(resultPassed);
		} else {
			this.props.selectMs(milliseconds);
			this.props.selectSec(seconds);
			this.props.selectMin(minutes);
			this.props.selectHour(hours);
		}
	};

	addZero = (num) => (num < 10) ? "0" + num : num;

	handleStartTimer = () => {
		this.props.selectInfo(
			stopwatchInfo.play.text,
			stopwatchInfo.play.color
		);
		this.props.timeRunning(true);
		clearInterval(this.interval);
		this.props.setStopTime(null);
		this.props.setDate(null);
		this.updateTime();
		this.interval = setInterval(this.updateTime, 10);
	};

	handleStopTimer = () => {
		if(this.props.running) {
			this.props.selectInfo(
				stopwatchInfo.stop.text,
				stopwatchInfo.stop.color
			);
			this.handlePrintTime();
			this.props.timeRunning(false);
			clearInterval(this.interval);
			this.props.setStopTime(new Date().getTime());
		}
	};

	handleResetTimer = () => {
		this.props.selectInfo(
			stopwatchInfo.reset.text,
			stopwatchInfo.reset.color
		);
		this.props.timeRunning(false);
		clearInterval(this.interval);
		this.props.setZero();
	};

	handlePrintTime = () => {
		if(this.props.running) {
			this.props.printTime();
		}
	};

    render() {
        return (
            <div className={classes.Stopwatch}>
	            <h2>Stopwatch</h2>

	            <StopwatchInfo
		            colorInfo={this.props.info.color}
		            textInfo={this.props.info.text} />

	            <StopwatchResult
		            resultHour={this.addZero(this.props.hour)}
		            resultMin={this.addZero(this.props.min)}
		            resultSec={this.addZero(this.props.sec)}
		            resultMs={this.addZero(this.props.ms)} />

	            <StopwatchControl
		            running={this.props.running}
		            clickedStart={this.handleStartTimer}
		            clickedStop={this.handleStopTimer}
		            clickedReset={this.handleResetTimer}
		            clickedPrint={this.handlePrintTime}/>

	            <StopwatchPrint
		            resultPrint={this.props.print}
		            addZero={this.addZero} />

            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		hour: state.stopwatch.hour,
		min: state.stopwatch.min,
		sec: state.stopwatch.sec,
		ms: state.stopwatch.ms,
		date: state.stopwatch.date,
		stopTime: state.stopwatch.stopTime,
		info: state.stopwatch.info,
		print: state.stopwatch.print,
		running: state.stopwatch.running
	}
};

const mapDispatchToProps = dispatch => {
	return {
		timeRunning: (status) => dispatch(actionCreators.stopwatchRunning(status)),
		selectHour: (hour) => dispatch(actionCreators.stopwatchSetHour(hour)),
		selectMin: (min) => dispatch(actionCreators.stopwatchSetMin(min)),
		selectSec: (sec) => dispatch(actionCreators.stopwatchSetSec(sec)),
		selectMs: (ms) => dispatch(actionCreators.stopwatchSetMs(ms)),

		setDate: (date) => dispatch(actionCreators.stopwatchSetDate(date)),
		setStopTime: (stopTime) => dispatch(actionCreators.stopwatchSetStopTime(stopTime)),

		setZero: () => dispatch(actionCreators.stopwatchSetZero()),

		selectInfo: (text, color) => dispatch(actionCreators.stopwatchInfo(text, color)),

		printTime: () => dispatch(actionCreators.stopwatchPrintTime()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);


