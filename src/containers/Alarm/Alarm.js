import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Alarm.module.css';

import AlarmClock from './AlarmClock/AlarmClock';
import AlarmAdd from './AlarmAdd/AlarmAdd';
import AlarmSelect from './AlarmSelect/AlarmSelect';
import AlarmResult from './AlarmResult/AlarmResult';
import ModalWindow from '../../components/Ui/Modal/Modal';

import * as actionCreators from "../../store/actions";

class Alarm extends Component {

	componentWillMount() {

		let alarms = localStorage.getItem('alarms');
		if(alarms) this.props.getAlarms(JSON.parse(alarms));

		let updateTime = () => {
		let date = new Date();
		this.props.setCurrentTime(date.getHours(), date.getMinutes(), date.getSeconds());
		};
		this.time = setInterval(() => updateTime(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.time);
	}

	handleAddNewAlarm = () => {
		this.props.toggleModal();
		this.props.setTime();
	};

	handleAddAlarm = () => {
		this.props.toggleModal();
		this.props.addAlarm();
	};

	handleSaveAlarm = () => {
		this.props.toggleModal();
		this.props.saveAlarm(this.props.editId);
	};

	handleEditSignal = (id, hour, min) => {
		this.props.editSignal(id, hour, min);
	};

	addZero = (num) => (num < 10) ? "0" + num : num;

    render() {
        return (
            <div className={classes.Alarm}>
	            <h2>Alarm</h2>

	            <AlarmClock
		            currentHour={this.addZero(this.props.currentHour)}
		            currentMin={this.addZero(this.props.currentMin)}
		            currentSec={this.addZero(this.props.currentSec)}/>

	            <AlarmAdd
		            setAlarm={this.handleAddNewAlarm}
		            signal={this.props.signal}
		            stopSignal={this.props.stopSignal}
	            />

	            <AlarmResult
		            alarms={this.props.alarms}
		            deleteAlarm={this.props.deleteAlarm}
		            addZero={this.addZero}
		            editSignal={this.handleEditSignal}
	            />

	            <ModalWindow
		            isOpen={this.props.modal}
		            toggleModal={this.props.toggleModal}>

		            {this.props.isEdit ?
			            <AlarmSelect
				            toggleModal={this.props.toggleModal}

				            setHour={this.addZero(this.props.editHour)}
				            setMin={this.addZero(this.props.editMin)}

				            timeIncrement={this.props.editIncrement}
				            timeDecrement={this.props.editDecrement}
					        addAlarm={this.handleSaveAlarm}
			            />
		            :
			            <AlarmSelect
				            toggleModal={this.props.toggleModal}

				            setHour={this.addZero(this.props.setHour)}
				            setMin={this.addZero(this.props.setMin)}

				            timeIncrement={this.props.timeIncrement}
				            timeDecrement={this.props.timeDecrement}
				            addAlarm={this.handleAddAlarm} />
		            }
	            </ModalWindow>

            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		currentHour: state.alarm.currentHour,
		currentMin: state.alarm.currentMin,
		currentSec: state.alarm.currentSec,
		setHour: state.alarm.setHour,
		setMin: state.alarm.setMin,
		editHour: state.alarm.editHour,
		editMin: state.alarm.editMin,
		editId: state.alarm.editId,
		isEdit: state.alarm.isEdit,
		modal: state.alarm.modal,
		signal: state.alarm.signal,
		alarms: state.alarm.alarms
	}
};

const mapDispatchToProps = dispatch => {
	return {
		timeIncrement: (set) => dispatch(actionCreators.alarmIncrement(set)),
		timeDecrement: (set) => dispatch(actionCreators.alarmDecrement(set)),
		setTime: () => dispatch(actionCreators.alarmSetTime()),
		setCurrentTime: (hour, min, sec) => dispatch(actionCreators.alarmCurrentTime(hour, min, sec)),

		toggleModal: () => dispatch(actionCreators.alarmToggleModal()),
		getAlarms: (alarms) => dispatch(actionCreators.alarmGetLocalAlarms(alarms)),
		addAlarm: () => dispatch(actionCreators.alarmAddAlarm()),
		deleteAlarm: (id) => dispatch(actionCreators.alarmDeleteAlarm(id)),
		stopSignal: () => dispatch(actionCreators.alarmStopSignal()),

		editSignal: (id, hour, min) => dispatch(actionCreators.alarmEditSignal(id, hour, min)),
		editIncrement: (set) => dispatch(actionCreators.alarmEditIncrement(set)),
		editDecrement: (set) => dispatch(actionCreators.alarmEditDecrement(set)),
		saveAlarm: (id) => dispatch(actionCreators.alarmSaveAlarm(id)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Alarm);

