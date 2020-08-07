import React from 'react';

import { Badge, Button } from 'reactstrap';
import classes from './PomidoroSelectItem.module.css';

const PomidoroSelectItem = (props) => {

    return (
            <div>

	            <h5 className={classes.PomidoroSelectTitle}>{props.name.toUpperCase()}</h5>

	            <div className={classes.PomidoroSelectItem}>
		            <Button
			            color="secondary"
			            disabled={props.setMinTime <= 1}
			            className={classes.PomidoroNumberBtn}
			            onClick={(props.setMinTime > 1) ?
				            props.timeDecrement(props.name).bind(null, props.name)
				            : null}><i className="fas fa-minus-square" /></Button>
		            <Badge
			            color="info"
			            className={classes.PomidoroNumber}>{props.setMinTime}</Badge>

		            <Button
			            color="secondary"
			            disabled={props.setMinTime >= 60}
			            className={classes.PomidoroNumberBtn}
			            onClick={(props.setMinTime < 60) ?
				            props.timeIncrement(props.name).bind(null, props.name)
				            : null}><i className="fas fa-plus-square" /></Button>
	            </div>
            </div>

        );
};

export default PomidoroSelectItem;
