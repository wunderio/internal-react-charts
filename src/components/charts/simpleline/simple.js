import React from 'react';
import {LineChart, ResponsiveContainer, Line, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data from './simple.json';

export default class SimpleChart extends React.Component {

  render() {
    return(
      <div className="chartContainer">
        <ResponsiveContainer>
          <LineChart data={data.simple} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis stroke="#EAE3CB" dataKey="name"/>
            <YAxis stroke="#EAE3CB"/>
            <CartesianGrid stroke="#A57706"/>
            <Tooltip/>
            <Legend verticalAlign="top" height={36} stroke="#EAE3CB" />
            <Line type="monotone" dataKey="pv" stroke="#268bd2" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="uv" stroke="#2aa198" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="amt" stroke="#cb4b16" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="re" stroke="#dc322f" strokeWidth={3} dot={false}/>
            <Brush stroke="#EAE3CB" height={20} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
