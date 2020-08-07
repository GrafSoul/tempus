import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Pomidoro.module.css';
import pomidoroInfo from '../../store/info/pomidoroInfo';

import PomidoroClock from './PomidoroClock/PomidoroClock';
import PomidoroSelect from './PomidoroSelect/PomidoroSelect';
import PomidoroControl from './PomidoroControl/PomidoroControl';
import PomidoroResult from './PomidoroResult/PomidoroResult';
import PomidoroInfo from './PomidoroInfo/PomidoroInfo';

import * as actionCreators from "../../store/actions";

class Pomidoro extends Component {

	componentWillMount() {
		this.props.pomidoroCopy();
	}

	componentWillUnmount() {
		clearInterval(this.timerWork);
		clearInterval(this.timerRelax);
		this.props.statusStop();
	}

	updateTimeWork = () => {
		let currentSec = this.props.workSec;
		let currentMin = this.props.workMin;
		if(currentSec > 0) {
			currentSec = +currentSec - 1;
			this.props.setWorkSec(currentSec);
		} else {
			if(currentMin > 0) {
				currentMin = +currentMin - 1;
				currentSec = 59;
				this.props.setWorkSec(currentSec);
				this.props.setWorkMin(currentMin);
			} else {

				if(currentMin === 0 && currentSec === 0 ) {
					clearInterval(this.timerWork);
					this.props.pomidoroCopy();
					this.props.pomidoroStatus();
					this.updateTimeRelax();
					this.timerRelax = setInterval(this.updateTimeRelax, 1000);
				}
			}
		}
	};

	updateTimeRelax = () => {
		let currentSec = this.props.relaxSec;
		let currentMin = this.props.relaxMin;
		if(currentSec > 0) {
			currentSec = +currentSec - 1;
			this.props.setRelaxSec(currentSec);
		} else {
			if(currentMin > 0) {
				currentMin = +currentMin - 1;
				currentSec = 59;
				this.props.setRelaxSec(currentSec);
				this.props.setRelaxMin(currentMin);
			} else {

				if(currentMin === 0 && currentSec === 0 ) {
					clearInterval(this.timerRelax);
					this.props.pomidoroCopy();
					this.props.pomidoroStatus();
					this.updateTimeWork();
					this.timerWork = setInterval(this.updateTimeWork, 1000);
				}
			}
		}
	};

	handleTimeStart = () => {
		if(!this.props.workStatus) {
		this.props.statusStart();
		this.props.pomidoroCopy();
		this.updateTimeWork();
		this.timerWork = setInterval(this.updateTimeWork, 1000);
			this.props.selectInfo(
				pomidoroInfo.play.text,
				pomidoroInfo.play.color
			);
		}
	};

	handleTimeReset = () => {
		this.props.pomidoroReset();
	};

	handleTimeStop = () => {
		if(this.props.workStatus) {
			clearInterval(this.timerWork);
			clearInterval(this.timerRelax);
			this.props.statusStop();
			this.props.pomidoroCopy();
			this.props.selectInfo(
				pomidoroInfo.stop.text,
				pomidoroInfo.stop.color
			);
		}
	};

	handleTimeIncrement = (section) => {
		this.props.timeIncrement(section);
		this.props.pomidoroCopy();
	};

	handleTimeDecrement = (section) => {
		this.props.timeDecrement(section);
		this.props.pomidoroCopy();
	};

	addZero = (item) => {
		if(item < 10 ) return "0" + item;
		return item;
	};

    render() {
        return (
            <div className={classes.Pomidoro}>
				<h2>Pomidoro</h2>

	            <PomidoroInfo  colorInfo={this.props.info.color}  textInfo={this.props.info.text} />

	            <PomidoroClock />

	            {this.props.workStatus ?
		            <PomidoroResult
			            workMin={this.addZero(this.props.workMin)}
			            workSec={this.addZero(this.props.workSec)}
			            relaxMin={this.addZero(this.props.relaxMin)}
			            relaxSec={this.addZero(this.props.relaxSec)}
			            relaxStatus={this.props.relaxStatus}
		            /> : null}

	            {!this.props.workStatus ?
		            <PomidoroSelect
			            setMinWork={this.addZero(this.props.setMinWork)}
			            setMinRelax={this.addZero(this.props.setMinRelax)}
			            timeIncrement={() => this.handleTimeIncrement}
			            timeDecrement={() => this.handleTimeDecrement}
		            />: null}

	            <PomidoroControl
		            running={this.props.workStatus}
		            clickedStart={this.handleTimeStart}
		            clickedStop={this.handleTimeStop}
		            clickedReset={this.handleTimeReset} />
            </div>
        );
    }
}


const mapStateToProps = state => {
	return {
		setMinWork: state.pomidoro.setMinWork,
		setSecWork: state.pomidoro.setSecWork,
		setMinRelax: state.pomidoro.setMinRelax,
		setSecRelax: state.pomidoro.setSecRelax,

		workMin: state.pomidoro.workMin,
		workSec: state.pomidoro.workSec,
		relaxMin: state.pomidoro.relaxMin,
		relaxSec: state.pomidoro.relaxSec,

		workStatus: state.pomidoro.workStatus,
		relaxStatus: state.pomidoro.relaxStatus,

		info: state.pomidoro.info,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		timeIncrement: (section) => dispatch(actionCreators.pomidoroIncrement(section)),
		timeDecrement: (section) => dispatch(actionCreators.pomidoroDecrement(section)),

		setWorkSec: (workSec) => dispatch(actionCreators.pomidoroSetWorkSec(workSec)),
		setWorkMin: (workMin) => dispatch(actionCreators.pomidoroSetWorkMin(workMin)),

		setRelaxSec: (relaxSec) => dispatch(actionCreators.pomidoroSetRelaxSec(relaxSec)),
		setRelaxMin: (relaxMin) => dispatch(actionCreators.pomidoroSetRelaxMin(relaxMin)),

		statusStart: () => dispatch(actionCreators.pomidoroStart()),
		statusStop: () => dispatch(actionCreators.pomidoroStop()),
		pomidoroReset: () => dispatch(actionCreators.pomidoroReset()),
		pomidoroCopy: () => dispatch(actionCreators.pomidoroCopy()),
		pomidoroStatus: () => dispatch(actionCreators.pomidoroStatus()),

		selectInfo: (text, color) => dispatch(actionCreators.pomidoroSetInfo(text, color)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Pomidoro);
