import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import info from '../info/pomidoroInfo';

const initialState = {
	setMinWork: 20,
	setSecWork: 0,
	setMinRelax: 5,
	setSecRelax: 0,

	workMin: 0,
	workSec: 0,
	relaxMin: 0,
	relaxSec: 0,

	workStatus: false,
	relaxStatus: false,

	info: {
		text: info.load.text,
		color: info.load.color
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case actionTypes.POMIDORO_INCREMENT:
			if (action.section === 'work') {
				return updateObject(state, {setMinWork: state.setMinWork + 1});
			} else if  (action.section === 'relax') {
				return updateObject(state, {setMinRelax: state.setMinRelax + 1});
			}
			return;

		case actionTypes.POMIDORO_DECREMENT:
			if (action.section === 'work') {
					return updateObject(state, {setMinWork: state.setMinWork - 1});
			} else if (action.section === 'relax') {
					return updateObject(state, {setMinRelax: state.setMinRelax -1});
			}
			return;

		case actionTypes.POMIDORO_START:
			return updateObject(state, {workStatus: true});

		case actionTypes.POMIDORO_STOP:
			return updateObject(state, {workStatus: false, relaxStatus: false});

		case actionTypes.POMIDORO_COPY:
			return updateObject(state, {
				workMin: state.setMinWork,
				workSec: state.setSecWork,
				relaxMin: state.setMinRelax,
				relaxSec: state.setSecRelax,
			});

		case actionTypes.POMIDORO_RESET:
			return updateObject(state, {
				setMinWork: 20,
				setSecWork: 0,
				setMinRelax: 5,
				setSecRelax: 0,
			});

		case actionTypes.POMIDORO_STATUS:
			return updateObject(state, {relaxStatus: !state.relaxStatus});

		case actionTypes.POMIDORO_SET_WORK_MIN:
				return updateObject(state, {workMin: action.workMin});

		case actionTypes.POMIDORO_SET_WORK_SEC:
			return updateObject(state, {workSec: action.workSec});

		case actionTypes.POMIDORO_SET_RELAX_MIN:
			return updateObject(state, {relaxMin: action.relaxMin});

		case actionTypes.POMIDORO_SET_RELAX_SEC:
			return updateObject(state, {relaxSec: action.relaxSec});

		case actionTypes.POMIDORO_SET_INFO:

			return updateObject(state, {info: {
					text: action.text,
					color: action.color
				}});

		default:
			return state;
	}
};

export default reducer;
