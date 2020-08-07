import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ChessClock.module.css';
import chessclockInfo from '../../store/info/chessclockinfo';

import ChessClassInfo from './ChessClockInfo/ChessClockInfo';
import ChessClockPlayers from './ChessClockPlayers/ChessClockPlayers';
import ChessClockControl from './ChessClockControl/ChessClockControl';
import ChessClockSelect from './ChessClockSelect/ChessClockSelect';

import * as actionCreators from "../../store/actions";

class ChessClock extends Component {

	componentWillUnmount() {
		this.handleCancelGame();
	}

	updateTime = () => {
		let id = this.props.activeId;
		let currentSec = this.props.players[id].sec;
		let currentMin = this.props.players[id].min;
		if(currentSec > 0) {
			currentSec = +currentSec - 1;
			this.props.setSec(currentSec, id);
		} else {
			if(currentMin > 0) {
				currentMin = +currentMin - 1;
				currentSec = 59;
				this.props.setSec(currentSec, id);
				this.props.setMin(currentMin, id);
			} else {

				if(currentMin === 0 && currentSec === 0 ) {
					clearInterval(this.timer);
					this.props.signalActive();
				}
			}
		}
	};

	handleTimeIncrement = () => {
		this.props.timeIncrement();
	};

	handleTimeDecrement = () => {
		this.props.timeDecrement();
	};

	handleApplyGame = () => {
		this.props.timeCopy();
		this.props.activeStatus();
		this.props.selectInfo(
			chessclockInfo.apply.text,
			chessclockInfo.apply.color
		);
	};

	handleCancelGame = () => {
		clearInterval(this.timer);
		this.props.activeUnmount();
		this.props.selectInfo(
			chessclockInfo.load.text,
			chessclockInfo.load.color
		);
	};

	handleStartPlayer = (id) => {
		clearInterval(this.timer);
		this.props.setActivePlayer(id);
		this.timer = setInterval(this.updateTime, 1000);
		this.props.selectInfo(
			chessclockInfo.apply.text,
			chessclockInfo.apply.color
		);
	};

	handleTimeReset = () => {
		clearInterval(this.timer);
		this.props.timeCopy();
		this.props.selectInfo(
			chessclockInfo.reset.text,
			chessclockInfo.reset.color
		);
	};

	handleTimePause = () => {
		clearInterval(this.timer);
		this.props.activeReset();
		this.props.selectInfo(
			chessclockInfo.pause.text,
			chessclockInfo.pause.color
		);
	};

	handleStopSignal = () => {
		this.props.signalStop();
		this.props.activeStatus();
		this.props.selectInfo(
			chessclockInfo.load.text,
			chessclockInfo.load.color
		);
	};

	addZero = item => item < 10 ? "0" + item : item;

    render() {
        return (
            <div className={classes.ChessClock}>

				<h2>Chess Clock</h2>

	            <ChessClassInfo
		            activeId={this.props.activeId}
		            colorInfo={this.props.info.color}
		            textInfo={this.props.info.text}
		            stopSignal={() => this.handleStopSignal}
		            signalStatus={this.props.signalStatus}
	            />

	            { this.props.running ?
		            <ChessClockPlayers
			            startPlayer={() => this.handleStartPlayer}
			            players={this.props.players}
			            zero={this.addZero}
		            />
		        :
		            <ChessClockSelect
			            running={this.props.running}
			            selectMin={this.addZero(this.props.selectMin)}
			            timeIncrement={() => this.handleTimeIncrement}
			            timeDecrement={() => this.handleTimeDecrement}
		            />
	            }

	            <ChessClockControl
		            running={this.props.running}
		            activeId={this.props.activeId}
		            timeReset={() => this.handleTimeReset}
		            timePause={() => this.handleTimePause}
		            activeGame={() => this.handleApplyGame}
		            activeCancel={() => this.handleCancelGame}
	            />

            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		selectMin: state.chessclock.selectMin,
		activeId: state.chessclock.activeId,
		players: state.chessclock.players,
		running: state.chessclock.running,
		signalStatus: state.chessclock.signal,
		info: state.chessclock.info
	}
};

const mapDispatchToProps = dispatch => {
	return {
		timeIncrement: () => dispatch(actionCreators.chessclockIncrement()),
		timeDecrement: () => dispatch(actionCreators.chessclockDecrement()),
		timeCopy: () => dispatch(actionCreators.chessclockTimeCopy()),
		timeReset: () => dispatch(actionCreators.chessclockTimeReset()),
		activeReset: () => dispatch(actionCreators.chessclockActiveReset()),
		activeStatus: () => dispatch(actionCreators.chessclockActiveStatus()),
		activeUnmount: () => dispatch(actionCreators.chessclockActiveUnmount()),
		setMin: (min, id) => dispatch(actionCreators.chessclockSetMin(min, id)),
		setSec: (sec, id) => dispatch(actionCreators.chessclockSetSec(sec, id)),
		setActivePlayer: (id) => dispatch(actionCreators.chessclockSetActivePlayer(id)),
		selectInfo: (text, color) => dispatch(actionCreators.chessclockSetInfo(text, color)),
		signalActive: () => dispatch(actionCreators.chessclockActiveSignal()),
		signalStop: () => dispatch(actionCreators.chessclockStopSignal())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ChessClock);
