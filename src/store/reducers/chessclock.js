import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import info from '../info/chessclockinfo';

const initialState = {
	selectMin: 20,
	selectSec: 0,
	activeId: null,
	players: [
		{id: 0, min: 0, sec: 0, active: null},
		{id: 1, min: 0, sec: 0, active: null}
	],
	running: false,
	signal: false,
	info: {
		text: info.load.text,
		color: info.load.color
	}
};

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case actionTypes.CHESSCLOCK_INCREMENT:
			return updateObject(state, {selectMin: state.selectMin + 1});
		case actionTypes.CHESSCLOCK_DECREMENT:
			return updateObject(state, {selectMin: state.selectMin - 1});

		case actionTypes.CHESSCLOCK_ACTIVE_STATUS:
			return updateObject(state, {running: !state.running});

		case actionTypes.CHESSCLOCK_TIME_COPY:
			let players = state.players.slice();
			players.map((element) => {
				element.min = state.selectMin;
				element.sec = state.selectSec;
				element.active = null;
        return null;
			});
			return updateObject(state, {players: players, activeId: null});

		case actionTypes.CHESSCLOCK_TIME_RESET:
			let playersReset = state.players.slice();
			playersReset.map((element) => {
				element.min = state.selectMin;
				element.sec = state.selectSec;
				element.active = null;
        return null;
			});
			return updateObject(state, {players: playersReset, selectMin: 20, selectSec: 0, activeId: null});

		case actionTypes.CHESSCLOCK_ACTIVE_RESET:
			let playersActiveReset = state.players.slice();
			playersActiveReset.map(element => element.active = null);
			return updateObject(state, {players: playersActiveReset, activeId: null});

		case actionTypes.CHESSCLOCK_ACTIVE_UNMOUNT:
			let playersActiveUnmount = state.players.slice();
			playersActiveUnmount.map((element) => {
				element.min = state.selectMin;
				element.sec = state.selectSec;
				element.active = null
        return null;
			});
			return updateObject(state, {
				players: playersActiveUnmount,
				activeId: null,
				running: false,
				signal: false
			});

		case actionTypes.CHESSCLOCK_SET_ACTIVE_PLAYER:
			let playersActive = state.players.slice();
			let currentId = 0;
			playersActive.filter((element) => {
				return element.id === action.id ? element.active = true : element.active = false ;
			});
			playersActive.filter((element) => {
				return element.id !== action.id ? currentId = element.id : null;
			});
			return updateObject(state, {players: playersActive, activeId: currentId});

		case actionTypes.CHESSCLOCK_SET_MIN:
			let playersNewMin = state.players.slice();
			playersNewMin.filter((element) => {
				return element.id === action.id ? element.min = action.min : null ;
			});
		return updateObject(state, {players: playersNewMin});

		case actionTypes.CHESSCLOCK_SET_SEC:
			let playersNewSec = state.players.slice();
			playersNewSec.filter((element) => {
				return element.id === action.id ? element.sec = action.sec : null ;
			});
			return updateObject(state, {players: playersNewSec});

		case actionTypes.CHESSCLOCK_SET_INFO:
			return updateObject(state, {info: {
					text: action.text,
					color: action.color
				}});

		case actionTypes.CHESSCLOCK_ACTIVE_SIGNAL:
			return updateObject(state, {signal: state.signal = true});

		case actionTypes.CHESSCLOCK_STOP_SIGNAL:
			return updateObject(state, {signal: state.signal = false});

		default:
			return state;
	}
};

export default reducer;
