import React from 'react';
import {LineChart, Line, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data from './simple.json';

export default class SimpleChart extends React.Component {
  
  render() {
    return(
      <LineChart width={600} height={300} data={data.simple} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
       <Line type="monotone" dataKey="amt" stroke="#ff7300" />
       <Line type="monotone" dataKey="re" stroke="#aa0000" />
       <Brush />
      </LineChart>
    )
  }
}
