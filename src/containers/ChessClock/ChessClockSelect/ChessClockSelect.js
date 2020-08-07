import React from 'react';

import classes from './ChessClockSelect.module.css';
import { Badge, Button } from 'reactstrap';

const ChessClockSelect = (props) => {
    return (
	    <div className={classes.ChessClockSelectWrap}>

		    <h5 className={classes.ChessClockSelectTitle}>Select Game Time</h5>

		    <div className={classes.ChessClockSelect}>
			    <Button
				    color="secondary"
				    className={classes.ChessClockNumberBtn}
				    disabled={props.selectMin <= 1 || props.running}
				    onClick={props.timeDecrement()}
			    ><i className="fas fa-minus-square" /></Button>
			    <Badge
				    color="info"
				    className={classes.ChessClockNumber}>{props.selectMin}</Badge>

			    <Button
				    color="secondary"
					className={classes.ChessClockNumberBtn}
				    disabled={props.selectMin >= 60 || props.running}
				    onClick={props.timeIncrement()}
			    ><i className="fas fa-plus-square" /></Button>
		    </div>
	    </div>

    );
};

export default ChessClockSelect;
