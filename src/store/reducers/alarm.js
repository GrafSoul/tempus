import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	currentHour: 0,
	currentMin: 0,
	currentSec: 0,
	setHour: 0,
	setMin: 0,
	editHour: 0,
	editMin: 0,
	editId: 0,
	isEdit: false,
	modal: false,
	signal: false,
	alarms: []
};

const reducer = ( state = initialState, action ) => {

	switch ( action.type ) {

		case actionTypes.ALARM_GET_LOCAL_ALARM:
			return updateObject(state, {alarms: action.alarms});

		case actionTypes.ALARM_SET_TIME:
			return updateObject(state, {setHour: state.currentHour,	setMin: state.currentMin });

		case actionTypes.ALARM_CURRENT_TIME:

			let statusSignal = false;
			let alarmsCurrent = state.alarms;

			alarmsCurrent.map(item => {
				return (item.hour === action.hour &&
					item.min ===  action.min &&
					action.sec === 0) ? item.signal = true : null;
			});

			alarmsCurrent.filter(item => {
				return (item.signal === true) ? statusSignal = true : null;
			});

			let addNewAlarms = JSON.stringify(alarmsCurrent);
			localStorage.setItem('alarms', addNewAlarms);

			return updateObject(state, {
				currentHour: action.hour,
				currentMin: action.min,
				currentSec: action.sec,
				alarms: alarmsCurrent,
				signal: statusSignal
			});

		case actionTypes.ALARM_TOGGLE_MODAL:
			return updateObject(state, {modal: !state.modal, isEdit: false});

		case actionTypes.ALARM_INCREMENT:
			if (action.set === 'hour') {
				return updateObject(state, {setHour: state.setHour + 1});
			} else if (action.set === 'min') {
				return updateObject(state, {setMin: state.setMin + 1});
			}
			return;

		case actionTypes.ALARM_DECREMENT:
			if (action.set === 'hour') {
				return updateObject(state, {setHour: state.setHour - 1});
			} else if (action.set === 'min') {
				return updateObject(state, {setMin: state.setMin - 1});
			}
			return;

		case actionTypes.ALARM_ADD_ALARM:
			let newAddAlarms = state.alarms;
			newAddAlarms.unshift({id: Date.now(), hour: state.setHour, min: state.setMin, signal: false });
			let addAlarms = JSON.stringify(newAddAlarms);
			localStorage.setItem('alarms', addAlarms);

			return updateObject(state, {alarms: newAddAlarms});

		case actionTypes.ALARM_DELETE_ALARM:
			let newDeleteAlarms = state.alarms.filter(item => {
				return item.id !== action.id
			});
			let deleteAlarms = JSON.stringify(newDeleteAlarms);
			localStorage.setItem('alarms', deleteAlarms);
			return updateObject(state, {alarms: newDeleteAlarms});

		case actionTypes.ALARM_STOP_SIGNAL:
			let newCurrentAlarms = state.alarms;
			newCurrentAlarms.map(item => {
				return (item.signal === true) ? item.signal = false : null;
			});
			let currentAlarms = JSON.stringify(newCurrentAlarms);
			localStorage.setItem('alarms', currentAlarms);
			return updateObject(state, {alarms: newCurrentAlarms, signal: false});

		case actionTypes.ALARM_EDIT_SIGNAL:

			return updateObject(state, {editHour: action.hour, editMin: action.min, editId: action.id, isEdit: true, modal: true});

		case actionTypes.ALARM_EDIT_INCREMENT:
			if (action.set === 'hour') {
				return updateObject(state, {editHour: state.editHour + 1});
			} else if (action.set === 'min') {
				return updateObject(state, {editMin: state.editMin + 1});
			}
			return;

		case actionTypes.ALARM_EDIT_DECREMENT:
			if (action.set === 'hour') {
				return updateObject(state, {editHour: state.editHour - 1});
			} else if (action.set === 'min') {
				return updateObject(state, {editMin: state.editMin - 1});
			}
			return;

		case actionTypes.ALARM_SAVE_ALARM:
			let newSaveAlarms = state.alarms;
			newSaveAlarms.map(item => {
				if(item.id === action.id) {item.hour = state.editHour; item.min = state.editMin;}
				return null;
			});
			let saveAlarms = JSON.stringify(newSaveAlarms);
			localStorage.setItem('alarms', saveAlarms);
			return updateObject(state, {alarms: newSaveAlarms});

		default:
			return state;
	}
};

export default reducer;

