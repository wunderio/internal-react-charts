import React from 'react';
import {ComposedChart, ResponsiveContainer, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data from './composed.json';

export default class MultipleCharts extends React.Component {
  render() {
    return(
      <div className="chartContainer">
        <ResponsiveContainer>
          <ComposedChart width={600} height={400} data={data.simple} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis stroke="#EAE3CB" dataKey="name"/>
            <YAxis stroke="#EAE3CB" />
            <Tooltip/>
            <Legend/>
            <CartesianGrid stroke="#A57706"/>
            <Area type='monotone' dataKey='amt' fill='#268bd2' stroke='#2aa198'/>
            <Bar dataKey='pv' barSize={20} fill='#2aa198'/>
            <Line type='monotone' dataKey='uv' stroke='#cb4b16'/>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
