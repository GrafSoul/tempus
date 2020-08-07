import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import info from '../info/timerInfo';

const initialState = {
	hour: 0,
	min: 0,
	sec: 0,
	visibleSelect: true,
	signal: false,
	running: false,
	info: {
		text: info.load.text,
		color: info.load.color
	}
};

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case actionTypes.TIMER_RUNNING:
			return updateObject(state, {running: action.status});
		case actionTypes.TIMER_SET_HOUR:
			return updateObject(state, {hour: action.hour});
		case actionTypes.TIMER_SET_MIN:
			return updateObject(state, {min: action.min});
		case actionTypes.TIMER_SET_SEC:
			return updateObject(state, {sec: action.sec});
		case actionTypes.TIMER_SET_ZERO:
			return updateObject(state, {
				hour: state.hour = 0,
				min: state.min = 0,
				sec: state.sec = 0
			});
		case actionTypes.TIMER_SHOW_SELECT:
			return updateObject(state, {
				visibleSelect: state.visibleSelect = true,
				signal: state.signal = false
			});
		case actionTypes.TIMER_HIDE_SELECT:
			return updateObject(state, {visibleSelect: false });

		case actionTypes.TIMER_ACTIVE_SIGNAL:
			return updateObject(state, {
				signal: state.signal = true
			});
		case actionTypes.TIMER_STOP_SIGNAL:
			return updateObject(state, {
				visibleSelect: !state.visibleSelect,
				signal: state.signal = false
			});
		case actionTypes.TIMER_SET_INFO:
			return updateObject(state, {info: {
					text: action.text,
					color: action.color
				}});
		default:
			return state;
	}
};

export default reducer;
