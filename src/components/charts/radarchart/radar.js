import React from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import data from './radar.json';

export default class RadarGraph extends React.Component {
  render() {
    return(
      <RadarChart outerRadius={150} width={600} height={500} data={data.simple}>
        <Radar name="Mike" dataKey="A" stroke="#cb4b16" fill="#cb4b16" fillOpacity={0.6}/>
        <Radar name="Lisa" dataKey="B" stroke="#268bd2" fill="#268bd2" fillOpacity={0.6}/>
        <PolarGrid stroke="#A57706"/>
        <PolarAngleAxis dataKey="subject" stroke="#EAE3CB"/>
        <PolarRadiusAxis />
      </RadarChart>
    )
  }
}
