import React from 'react';
import { Alert } from 'reactstrap';

import classes from './ChessClockInfo.module.css';
import ChessClockSignal from '../ChessClockSignal/ChessClockSignal';

const ChessClockInfo = (props) => {
    return (
	    <div  className={['col-sm-12', 'col-md-offset-3', classes.ChessClockInfo].join(' ')}>
		    {!props.signalStatus ?
			    <Alert color={props.colorInfo}>{props.textInfo}</Alert>
			:
			    <ChessClockSignal activeId={props.activeId} stopSignal={props.stopSignal}/>
		    }
		    <hr />
	    </div>
        );
};

export default ChessClockInfo;
