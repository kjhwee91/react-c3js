//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BarChart, LineChart } from './components';
import {C3Chart} from './C3Chart';

const chartData = {
	line: {
		data: {
			columns: [
				['data1', 30, 20, 50, 40, 60, 50],
				['data2', 200, 130, 90, 240, 130, 220],
				['data3', 300, 200, 160, 400, 250, 250]
			]
		}
	},
	bar: {
		data1: [30, 200, 100, 400, 150, 250],
		data2: [130, 100, 140, 200, 150, 50]
	},
	colors: {
		data1: '#ff0000',
		data2: '#00ff00',
		data3: '#0000ff'
	}
};

const lineConfig = {
	point: {
		focus: {
			expand: {
				r: 10
			}
		}
	},
	zoom: {
		enabled: false
	},
	size: {
		width: 640
	},
	padding: {
		top: 20
	},
	data: {
		selection: {
			draggable: true
		},
		columns: [
			['data1', 30, 20, 50, 40, 60, 50],
			['data2', 200, 130, 90, 240, 130, 220],
			['data3', 300, 200, 160, 400, 250, 250]
		],
		type: 'bar',
		colors: {
			data1: '#ff0000',
			data2: '#00ff00',
			data3: '#0000ff'
		}
	}
};
const mountNode = document.getElementById('react-c3js');

ReactDOM.render(
	<div>
		<h1>react-c3js</h1>
		<h2>Line Chart</h2>
		<C3Chart config={lineConfig} />
		<h2>Bar Chart</h2>
		<C3Chart config={chartData.line} />
	</div>, mountNode
);
