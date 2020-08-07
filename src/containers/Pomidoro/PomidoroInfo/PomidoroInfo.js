import React from 'react';
import { Alert } from 'reactstrap';

import classes from './PomidoroInfo.module.css';

const PomidoroInfo = (props) => {
    return (
	    <div  className={['col-sm-12', 'col-md-offset-3', classes.PomidoroInfo].join(' ')}>
		    <Alert color={props.colorInfo}>{props.textInfo}</Alert>
		    <hr />
	    </div>
        );
};

export default PomidoroInfo;
