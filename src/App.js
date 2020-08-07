import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Timer from './containers/Timer/Timer';
import Stopwatch from './containers/Stopwatch/Stopwatch';
import Pomidoro from './containers/Pomidoro/Pomidoro';
import ChessClock from "./containers/ChessClock/ChessClock";
import Alarm from "./containers/Alarm/Alarm";

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Switch>
						<Route path="/alarm" component={Alarm} />
						<Route path="/chessclock" component={ChessClock} />
						<Route path="/pomidoro" component={Pomidoro} />
						<Route path="/stopwatch" component={Stopwatch} />
						<Route path="/timer" exact component={Timer} />
            <Route path="/" exact component={Home} />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
