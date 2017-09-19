import React, { Component } from 'react';
import SimpleChart from './charts/simpleline/simple';
import SmallLine from './charts/simpleline/simplesmall'
import SimpleBar from './charts/simplebar/simplebar';
import SimpleArea from './charts/simplearea/simplearea';
import MultipleCharts from './charts/composedcharts/composed';
import RadarGraph from './charts/radarchart/radar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="header-text">Chart examples with Recharts</h2>
        </div>
        <div className="charts">
          <hr></hr>
          <h1>Simple line chart</h1>
          <SimpleChart />
          <p>Small with lines only</p>
          <SmallLine />
          <hr></hr>
          <h1>Simple Bar chart</h1>
          <SimpleBar />
          <hr></hr>
          <h1>Area chart</h1>
          <SimpleArea />
          <hr></hr>
          <h1>Multiple different charts in one</h1>
          <MultipleCharts />
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default App;
