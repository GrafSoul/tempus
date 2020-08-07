import React from 'react';

import classes from './StopwatchPrint.module.css';
import StopwatchPrintItem from './StopwatchPrintItem/StopwatchPrintItem';

const StopwatchPrint = (props) => {
	const resultPrint = props.resultPrint.map((item, index) => {
		return <StopwatchPrintItem
			key={index}
			index={index + 1}
			{...item}
			addZero={props.addZero} />
	});
    return (
            <div className={classes.StopwatchPrint}>
	            <hr />
	            { props.resultPrint.length > 0 ?
	            <ul className={classes.StopwatchPrintList}>
		            {resultPrint}
	            </ul> : null}
            </div>
        );
};

export default StopwatchPrint;
