import React from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data from './composed.json';

export default class MultipleCharts extends React.Component {
  render() {
    return(
      <ComposedChart width={600} height={400} data={data.simple} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip/>
          <Legend/>
          <CartesianGrid stroke='#f5f5f5'/>
          <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
          <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
          <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
       </ComposedChart>
    )
  }
}
