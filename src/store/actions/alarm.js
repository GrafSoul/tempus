import * as actionTypes from './actionTypes';

export const alarmGetLocalAlarms = (alarms) => {
	return {
		type: actionTypes.ALARM_GET_LOCAL_ALARM,
		alarms: alarms
	};
};

export const alarmSetTime = () => {
	return {
		type: actionTypes.ALARM_SET_TIME
	};
};

export const alarmCurrentTime = ( hour, min, sec ) => {
	return {
		type: actionTypes.ALARM_CURRENT_TIME,
		hour: hour,
		min: min,
		sec: sec
	};
};

export const alarmToggleModal = () => {
	return {
		type: actionTypes.ALARM_TOGGLE_MODAL
	};
};

export const alarmIncrement = (set) => {
	return {
		type: actionTypes.ALARM_INCREMENT,
		set: set
	};
};

export const alarmDecrement = (set) => {
	return {
		type: actionTypes.ALARM_DECREMENT,
		set: set
	};
};

export const alarmAddAlarm = () => {
	return {
		type: actionTypes.ALARM_ADD_ALARM
	};
};

export const alarmDeleteAlarm = ( id ) => {
	return {
		type: actionTypes.ALARM_DELETE_ALARM,
		id: id
	};
};

export const alarmStopSignal = () => {
	return {
		type: actionTypes.ALARM_STOP_SIGNAL,
	};
};

export const alarmEditSignal = (id, hour, min ) => {
	return {
		type: actionTypes.ALARM_EDIT_SIGNAL,
		id: id,
		hour: hour,
		min: min
	};
};

export const alarmEditIncrement = (set) => {
	return {
		type: actionTypes.ALARM_EDIT_INCREMENT,
		set: set
	};
};

export const alarmEditDecrement = (set) => {
	return {
		type: actionTypes.ALARM_EDIT_DECREMENT,
		set: set
	};
};

export const alarmSaveAlarm = ( id ) => {
	return {
		type: actionTypes.ALARM_SAVE_ALARM,
		id: id
	};
};

