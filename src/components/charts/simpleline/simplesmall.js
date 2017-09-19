import React from 'react';
import {LineChart, ResponsiveContainer, Line} from 'recharts';
import data from './simple.json';

export default class SmallLine extends React.Component {

  render() {
    return(
        <ResponsiveContainer width={300} height={150}>
          <LineChart data={data.simple}  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <Line type="monotone" dataKey="pv" stroke="#268bd2" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="uv" stroke="#2aa198" strokeWidth={3} dot={false}/>
          </LineChart>
        </ResponsiveContainer>
    )
  }
}
