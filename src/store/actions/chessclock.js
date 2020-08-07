import * as actionTypes from "./actionTypes";

export const chessclockIncrement = () => {
	return {
		type: actionTypes.CHESSCLOCK_INCREMENT,
	};
};

export const chessclockDecrement = () => {
	return {
		type: actionTypes.CHESSCLOCK_DECREMENT,
	};
};

export const chessclockTimeCopy = () => {
	return {
		type: actionTypes.CHESSCLOCK_TIME_COPY,
	};
};

export const chessclockTimeReset = () => {
	return {
		type: actionTypes.CHESSCLOCK_TIME_RESET,
	};
};

export const chessclockActiveReset = () => {
	return {
		type: actionTypes.CHESSCLOCK_ACTIVE_RESET,
	};
};

export const chessclockActiveStatus = () => {
	return {
		type: actionTypes.CHESSCLOCK_ACTIVE_STATUS,
	};
};

export const chessclockActiveUnmount = () => {
	return {
		type: actionTypes.CHESSCLOCK_ACTIVE_UNMOUNT,
	};
};

export const chessclockSetMin = (min, id) => {
	return {
		type: actionTypes.CHESSCLOCK_SET_MIN,
		min: min,
		id: id
	};
};

export const chessclockSetSec = (sec, id) => {
	return {
		type: actionTypes.CHESSCLOCK_SET_SEC,
		sec: sec,
		id: id
	};
};

export const chessclockSetActivePlayer = (id) => {
	return {
		type: actionTypes.CHESSCLOCK_SET_ACTIVE_PLAYER,
		id: id
	};
};

export const chessclockSetInfo = ( text, color) => {
	return {
		type: actionTypes.CHESSCLOCK_SET_INFO,
		text: text,
		color: color
	};
};

export const chessclockActiveSignal = () => {
	return {
		type: actionTypes.CHESSCLOCK_ACTIVE_SIGNAL,
	};
};

export const chessclockStopSignal = () => {
	return {
		type: actionTypes.CHESSCLOCK_STOP_SIGNAL,
	};
};
