import React from 'react';

import classes from './AlarmResult.module.css';
import AlarmResultItem from './AlarmResultItem/AlarmResultItem';

const AlarmResult = (props) => {
	const alarmsResult = props.alarms.map((item, index) => {

		return <AlarmResultItem
				key={index}
				id={item.id}
				hour={item.hour}
				min={item.min}
				signal={item.signal}
				deleteAlarm={props.deleteAlarm}
				addZero={props.addZero}
				editSignal={props.editSignal}
		/>;
	});
    return (
    	<div>
		    <hr />
		    { props.alarms.length > 0  &&
			    <div>
				    <h5 className={classes.AlarmResultTitle}>The list of alarms</h5>
				    <div className={classes.AlarmResult}>
					    <ul  className={classes.AlarmResultList}>
						    {alarmsResult}
					    </ul>
				    </div>
			    </div>
			}
	    </div>
        );
};

export default AlarmResult;
