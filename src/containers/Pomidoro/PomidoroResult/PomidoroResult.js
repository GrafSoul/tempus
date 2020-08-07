import React from 'react';
import { Badge } from 'reactstrap';

import classes from './PomidoroResult.module.css'

import PomidoroSignal from '../PomidoroSignal/PomidoroSignal';

const PomidoroResult = (props) => {
    return (
	    <div className={classes.PomidoroResultItemGroup}>

		    { !props.relaxStatus ?
			    <div>
				    <h5>WORK</h5>
				    <Badge className={classes.PomidoroResultItem} color="warning">{props.workMin}</Badge> : {' '}
				    <Badge className={classes.PomidoroResultItem} color="warning">{props.workSec}</Badge>
				    <PomidoroSignal />
			    </div>
			 : null}

		    { props.relaxStatus ?
				<div>
					<h5>RELAX</h5>
					<Badge className={classes.PomidoroResultItem} color="success">{props.relaxMin}</Badge> : {' '}
					<Badge className={classes.PomidoroResultItem} color="success">{props.relaxSec}</Badge>
					<PomidoroSignal />
				</div>
			: null}

	    </div>
        );
};

export default PomidoroResult;
