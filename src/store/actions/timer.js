import * as actionTypes from './actionTypes';

export const timerSetHour = ( hour ) => {
	return {
		type: actionTypes.TIMER_SET_HOUR,
		hour:  hour
	};
};

export const timerSetMin = ( min ) => {
	return {
		type: actionTypes.TIMER_SET_MIN,
		min: min
	};
};

export const timerSetSec = ( sec ) => {
	return {
		type: actionTypes.TIMER_SET_SEC,
		sec: sec
	};
};

export const timerSetZero = () => {
	return {
		type: actionTypes.TIMER_SET_ZERO,
	};
};

export const timerShowSelect = () => {
	return {
		type: actionTypes.TIMER_SHOW_SELECT,
	};
};

export const timerHideSelect = () => {
	return {
		type: actionTypes.TIMER_HIDE_SELECT,
	};
};

export const timerActiveSignal = () => {
	return {
		type: actionTypes.TIMER_ACTIVE_SIGNAL,
	};
};

export const timerStopSignal = () => {
	return {
		type: actionTypes.TIMER_STOP_SIGNAL,
	};
};

export const timerSetInfo = ( text, color) => {
	return {
		type: actionTypes.TIMER_SET_INFO,
		text: text,
		color: color
	};
};

export const timerRunning = (status) => {
	return {
		type: actionTypes.TIMER_RUNNING,
		status: status
	};
};
