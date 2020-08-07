import React from 'react';

import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => (
	<ul className={classes.Navigation}>
		<NavigationItem link="/" exact>Home</NavigationItem>
		<NavigationItem link="/timer">Timer</NavigationItem>
		<NavigationItem link="/stopwatch">Stopwatch</NavigationItem>
		<NavigationItem link="/pomidoro">Pomidoro</NavigationItem>
		<NavigationItem link="/chessclock">Chess Clock</NavigationItem>
		<NavigationItem link="/alarm">Alarm Clock</NavigationItem>
	</ul>
);

export default Navigation;
