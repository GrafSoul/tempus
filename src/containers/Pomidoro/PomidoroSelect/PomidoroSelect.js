import React from 'react';

import PomidoroSelectItem from './PomidoroSelectItem/PomidoroSelectItem';
import classes from './PomidoroSelect.module.css';

const PomidoroSelect = (props) => {
	return (
		<div>
			<div className={classes.PomidoroSelect}>

				<PomidoroSelectItem
					setMinTime={props.setMinWork}
					name="work"
					timeIncrement={props.timeIncrement}
					timeDecrement={props.timeDecrement}/>

				<PomidoroSelectItem
					setMinTime={props.setMinRelax}
					name="relax"
					timeIncrement={props.timeIncrement}
					timeDecrement={props.timeDecrement}/>

			</div>
		</div>
	);
};

export default PomidoroSelect;
