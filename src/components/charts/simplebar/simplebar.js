import React from 'react';
import {BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data from './simplebar.json';

export default class SimpleBar extends React.Component {
  render() {
    return(
      <div className="chartContainer">
        <ResponsiveContainer>
          <BarChart data={data.simple} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis stroke="#EAE3CB" dataKey="name"/>
            <YAxis stroke="#EAE3CB"/>
            <CartesianGrid stroke="#A57706" strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="pv" fill="#268bd2" />
            <Bar dataKey="uv" fill="#cb4b16" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
