import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from '../../store/utility';

import classes from  './Timer.module.css';
import timerInfo from '../../store/info/timerInfo';

import TimerResult from './TimerResult/TimerResult';
import TimerControl from './TimerControl/TimerControl';
import TimerSelector from './TimerSelector/TimerSelector';
import TimerInfo from './TimerInfo/TimerInfo';
import TimerSignal from './TimerSignal/TimerSignal';

import * as actionCreators from "../../store/actions/index";

class Timer extends Component {

	componentWillUnmount() {
		clearInterval(this.timer);
		this.props.setZero();
		this.props.selectShow();
		this.props.timeRunning(false);
		this.props.selectInfo(
			timerInfo.load.text,
			timerInfo.load.color
		);
	}

	updateTime = () => {

		let currentHour = this.props.hour;
		let currentMin = this.props.min;
		let currentSec = this.props.sec;

		if(currentSec > 0) {
			currentSec = +currentSec - 1;
			this.props.selectSec(currentSec);

		} else {

			if(currentMin > 0) {
				currentMin = +currentMin - 1;
				currentSec = 59;
				this.props.selectSec(currentSec);
				this.props.selectMin(currentMin);

			} else {

				if(currentHour > 0) {
					currentHour = +currentHour - 1;
					currentSec = 59;
					currentMin = 59;
					this.props.selectSec(currentSec);
					this.props.selectMin(currentMin);
					this.props.selectHour(currentHour);

				} else {

					clearInterval(this.timer);
					this.props.setZero();
					this.props.signalActive();
					this.props.timeRunning(false);
					this.props.selectInfo(
						timerInfo.done.text,
						timerInfo.done.color
					);
				}
			}
		}
	};

	handleStartTimer = () => {
		clearInterval(this.timer);
		if(this.props.hour > 0 || this.props.min > 0 || this.props.sec > 0) {
			this.props.selectHide();
			this.props.selectInfo(
				timerInfo.start.text,
				timerInfo.start.color
			);
			this.props.timeRunning(true);
			this.updateTime();
			this.timer = setInterval(this.updateTime, 1000);
		} else {
			this.props.selectInfo(
				timerInfo.error.text,
				timerInfo.error.color
			);
		}
	};

	handleStopTimer = () => {
		clearInterval(this.timer);
		this.props.setZero();
		this.props.selectShow();
		this.props.timeRunning(false);
		if( this.props.hour > 0 ||
			this.props.min  > 0 ||
			this.props.sec  > 0) {
			this.props.selectInfo(
				timerInfo.stop.text,
				timerInfo.stop.color
			);
		}
	};

	handlePauseTimer = () => {
		clearInterval(this.timer);
		this.props.selectShow();
		this.props.timeRunning(false);
		if( this.props.hour > 0 ||
			this.props.min  > 0 ||
			this.props.sec  > 0) {
			this.props.selectInfo(
				timerInfo.pause.text,
				timerInfo.pause.color
			);
		}
	};

	handleStopSignal = () => {
		this.props.signalStop();
		this.props.timeRunning(false);
	};

	optionCreator = range(0, 61).map((num) => (
		<option key={num} value={num}>{num}</option>
	));

	addZero = (item) => {
		if(item < 10 ) return "0" + item;
		return item;
	};

	render() {

        return (
            <div className={classes.Timer}>

				<h2>Timer</h2>

	            <TimerInfo colorInfo={this.props.info.color}  textInfo={this.props.info.text}/>

	            <TimerResult
		            resultHour={this.addZero(this.props.hour)}
		            resultMin={this.addZero(this.props.min)}
		            resultSec={this.addZero(this.props.sec)}
	            />

	            {this.props.signal ?
		            <TimerSignal checkedSignal={this.handleStopSignal} /> :
		            <TimerControl
			            running={this.props.running}
			            clickedStart={this.handleStartTimer}
			            clickedPause={this.handlePauseTimer}
			            clickedStop={this.handleStopTimer} />
	            }

	            {this.props.visibleSelect ?
	            <TimerSelector
		            optionCreator={this.optionCreator}
		            currentHour={this.props.hour}
		            currentMin={this.props.min}
		            currentSec={this.props.sec}
		            selectHour={this.props.selectHour}
		            selectMin={this.props.selectMin}
		            selectSec={this.props.selectSec}
	            /> : null }

            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		hour: state.timer.hour,
		min: state.timer.min,
		sec: state.timer.sec,
		visibleSelect: state.timer.visibleSelect,
		signal: state.timer.signal,
		info: state.timer.info,
		running: state.timer.running
	}
};

const mapDispatchToProps = dispatch => {
	return {
		timeRunning: (status) => dispatch(actionCreators.timerRunning(status)),

		selectHour: (hour) => dispatch(actionCreators.timerSetHour(hour)),
		selectMin: (min) => dispatch(actionCreators.timerSetMin(min)),
		selectSec: (sec) => dispatch(actionCreators.timerSetSec(sec)),

		setZero: () => dispatch(actionCreators.timerSetZero()),

		selectShow: () => dispatch(actionCreators.timerShowSelect()),
		selectHide: () => dispatch(actionCreators.timerHideSelect()),

		signalActive: () => dispatch(actionCreators.timerActiveSignal()),
		signalStop: () => dispatch(actionCreators.timerStopSignal()),

		selectInfo: (text, color) => dispatch(actionCreators.timerSetInfo(text, color)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
