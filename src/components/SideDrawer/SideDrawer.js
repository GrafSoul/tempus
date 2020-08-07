import React from 'react';

import NavigationItems from '../Navigation/Navigation';
import Backdrop from '../Ui/Backdrop/Backdrop';
import Aux from '../../hoc/AuxComponent/AuxComponent';
import classes from './SideDrawer.module.css';

const sideDrawer = ( props ) => {

	let attachedClasses = [classes.SideDrawer, classes.Close];

	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed}/>

			<div className={attachedClasses.join(' ')}>
				<nav onClick={props.closed}>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
