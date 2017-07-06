import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import data from './simplearea.json';

export default class SimpleArea extends React.Component {
  render() {
    return(
      <AreaChart width={600} height={400} data={data.simple} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='green' fill='#8884d8' />
        <Area type='monotone' dataKey='pv' stroke='blue' fill='#82ca9d'/>
        <Area type='monotone' dataKey='amt' stroke='red' fill='#ffc658' />
        <Area type='monotone' dataKey='re' stroke='black' fill='pink' />
      </AreaChart>
    )
  }
}
