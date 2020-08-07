import React from 'react';
import { Button } from 'reactstrap';

import classes from './ChessClockControl.module.css';

const ChessClockControl = (props) => {
	return (
	    <div className={classes.ChessClockBtnGroup}>
		    <hr />

		    {!props.running ?
			    <Button
				    className={classes.ChessClockBtn}
				    color="success"
				    disabled={props.running}
				    onClick={props.activeGame()}>
				    <i className="fa fa-check" />{' '}
				    Apply
			    </Button>
			:
			   <div>
				   <Button
					   className={classes.ChessClockBtn}
					   onClick={props.timeReset()}
					   disabled={!props.running}>
					   <i className="fa fa-sync" />{' '}
					   Reset
				   </Button>
				   {!props.running || props.activeId === null ?
					   <Button
						   className={classes.ChessClockBtn}
						   color="danger"
						   onClick={props.activeCancel()}
						   disabled={!props.running}>
						   <i className="fa fa-ban" />{' '}
						   Cancel
					   </Button>
					   :
					   <Button
						   className={classes.ChessClockBtn}
						   onClick={props.timePause()}
						   disabled={!props.running || props.activeId === null}>
						   <i className="fa fa-pause" />{' '}
						   Pause
					   </Button>
				   }
			   </div>
		    }

	    </div>
        );
};

export default ChessClockControl;
