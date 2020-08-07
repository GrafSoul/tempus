import React from 'react';

import classes from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Header = (props) => (
	<header className={classes.Header}>
		<DrawerToggle clicked={props.drawerToggleClicked} />
		<nav className={classes.DesktopOnly}>
			<Navigation />
		</nav>
	</header>
);

export default Header;
