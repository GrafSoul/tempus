import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import info from '../info/stopwatchInfo';

const initialState = {
	hour: 0,
	min: 0,
	sec: 0,
	ms: 0,
	date: null,
	stopTime: null,
	print: [],
	running: false,
	info: {
		text: info.load.text,
		color: info.load.color
	}
};

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {

		case actionTypes.STOPWATCH_RUNNING:
			return updateObject(state, {running: action.status});
		case actionTypes.STOPWATCH_SET_HOUR:
			return updateObject(state, {hour: action.hour});
		case actionTypes.STOPWATCH_SET_MIN:
			return updateObject(state, {min: action.min});
		case actionTypes.STOPWATCH_SET_SEC:
			return updateObject(state, {sec: action.sec});
		case actionTypes.STOPWATCH_SET_MS:
			return updateObject(state, {ms: action.ms});
		case actionTypes.STOPWATCH_SET_DATE:
			return updateObject(state, {date: action.date});
		case actionTypes.STOPWATCH_SET_STOP_TIME:
			return updateObject(state, {stopTime: action.stopTime});

		case actionTypes.STOPWATCH_ZERO:
			return updateObject(state, {
				hour: state.hour = 0,
				min: state.min = 0,
				sec: state.sec = 0,
				ms: state.ms = 0,
				date: null,
				stopTime: null,
				print: []
			});

		case actionTypes.STOPWATCH_INFO:
			return updateObject(state, {info: {
					text: action.text,
					color: action.color
				}});

		case actionTypes.STOPWATCH_PRINT_TIME:
			let newTime = state.print;
				newTime.push({
					id: Date.now(),
					hour: state.hour,
					min: state.min,
					sec: state.sec,
					ms: state.ms
				});
			return updateObject(state, {print: newTime});

		default:
			return state;
	}
};

export default reducer;
