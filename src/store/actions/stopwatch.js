import * as actionTypes from './actionTypes';

export const stopwatchSetHour = ( hour ) => {
	return {
		type: actionTypes.STOPWATCH_SET_HOUR,
		hour:  hour
	};
};

export const stopwatchSetMin = ( min ) => {
	return {
		type: actionTypes.STOPWATCH_SET_MIN,
		min: min
	};
};

export const stopwatchSetSec = ( sec ) => {
	return {
		type: actionTypes.STOPWATCH_SET_SEC,
		sec: sec
	};
};

export const stopwatchSetMs = ( ms ) => {
	return {
		type: actionTypes.STOPWATCH_SET_MS,
		ms: ms
	};
};

export const stopwatchSetDate = ( date ) => {
	return {
		type: actionTypes.STOPWATCH_SET_DATE,
		date: date
	};
};

export const stopwatchSetStopTime = ( stopTime ) => {
	return {
		type: actionTypes.STOPWATCH_SET_STOP_TIME,
		stopTime: stopTime
	};
};

export const stopwatchSetZero = () => {
	return {
		type: actionTypes.STOPWATCH_ZERO,
	};
};

export const stopwatchInfo = (text, color) => {
	return {
		type: actionTypes.STOPWATCH_INFO,
		text: text,
		color: color
	};
};

export const stopwatchPrintTime = () => {
	return {
		type: actionTypes.STOPWATCH_PRINT_TIME
	};
};

export const stopwatchRunning = (status) => {
	return {
		type: actionTypes.STOPWATCH_RUNNING,
		status: status
	};
};
