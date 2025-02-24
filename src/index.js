import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import App from './App';

import timerReducer from './store/reducers/timer';
import stopwatchReducer from './store/reducers/stopwatch';
import pomidoroReducer from './store/reducers/pomidoro';
import chessclockReducer from './store/reducers/chessclock';
import alarmReducer from './store/reducers/alarm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	timer: timerReducer,
	stopwatch: stopwatchReducer,
	pomidoro: pomidoroReducer,
	chessclock: chessclockReducer,
	alarm: alarmReducer
});

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>

);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

