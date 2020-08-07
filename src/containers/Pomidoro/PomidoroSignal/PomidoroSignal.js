import React from 'react';

import signal from '../../../assets/signal.mp3';

const PomidoroSignal = () => {
	return (
		<div>
			<audio src={signal} autoPlay/>
		</div>
	);
};

export default PomidoroSignal;
