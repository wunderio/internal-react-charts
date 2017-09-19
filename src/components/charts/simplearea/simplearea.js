import React from 'react';
import {AreaChart, ResponsiveContainer, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import data from './simplearea.json';

export default class SimpleArea extends React.Component {
  render() {
    return(
      <div className="chartContainer">
        <ResponsiveContainer>
          <AreaChart data={data.simple} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <XAxis stroke="#EAE3CB" dataKey="name"/>
            <YAxis stroke="#EAE3CB"/>
            <CartesianGrid stroke="#A57706" strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stroke='#268bd2' fill='#268bd2' dot={false}/>
            <Area type='monotone' dataKey='pv' stroke='#2aa198' fill='#2aa198' dot={false}/>
            <Area type='monotone' dataKey='amt' stroke='#cb4b16' fill='#cb4b16' dot={false}/>
            <Area type='monotone' dataKey='re' stroke='#dc322f' fill='#dc322f' dot={false}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
