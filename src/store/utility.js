export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};

export const range = function (start, edge, step) {
	let ret = [];

	if (arguments.length === 1) {
		edge = start;
		start = 0;
	}

	edge = edge || 0;
	step = step || 1;
	for (ret; (edge - start) * step > 0; start +=  step) {
		ret.push(start);
	}
	return ret;
};


