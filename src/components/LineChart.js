//import React from 'react';
import PropTypes from 'prop-types';
import {
	compose,
	setDisplayName,
	setPropTypes,
	onlyUpdateForKeys
} from 'recompose';

import C3Chart from './C3Chart';

const enhance = compose(
	setDisplayName('LineChart'),
	setPropTypes({
		//data: PropTypes.object.isRequired
	}),
	onlyUpdateForKeys(['data'])
);

const LineChart = enhance(({ config }) =>
	<C3Chart config={config} />
);


export { LineChart };
export default LineChart;
