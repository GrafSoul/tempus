import * as actionTypes from "./actionTypes";

export const pomidoroIncrement = (section) => {
	return {
		type: actionTypes.POMIDORO_INCREMENT,
		section: section
	};
};

export const pomidoroDecrement = (section) => {
	return {
		type: actionTypes.POMIDORO_DECREMENT,
		section: section
	};
};

export const pomidoroSetWorkMin = ( workMin ) => {
	return {
		type: actionTypes.POMIDORO_SET_WORK_MIN,
		workMin: workMin
	};
};

export const pomidoroSetWorkSec = ( workSec ) => {
	return {
		type: actionTypes.POMIDORO_SET_WORK_SEC,
		workSec: workSec
	};
};

export const pomidoroSetRelaxMin = ( relaxMin ) => {
	return {
		type: actionTypes.POMIDORO_SET_RELAX_MIN,
		relaxMin: relaxMin
	};
};

export const pomidoroSetRelaxSec = ( relaxSec ) => {
	return {
		type: actionTypes.POMIDORO_SET_RELAX_SEC,
		relaxSec: relaxSec
	};
};

export const pomidoroStart = () => {
	return {
		type: actionTypes.POMIDORO_START,
	};
};

export const pomidoroStop = () => {
	return {
		type: actionTypes.POMIDORO_STOP,
	};
};

export const pomidoroCopy = () => {
	return {
		type: actionTypes.POMIDORO_COPY,
	};
};

export const pomidoroReset = () => {
	return {
		type: actionTypes.POMIDORO_RESET,
	};
};

export const pomidoroStatus = () => {
	return {
		type: actionTypes.POMIDORO_STATUS,
	};
};

export const pomidoroSetInfo = ( text, color) => {
	return {
		type: actionTypes.POMIDORO_SET_INFO,
		text: text,
		color: color
	};
};

