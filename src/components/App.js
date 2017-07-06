import React, { Component } from 'react';
import SimpleChart from './charts/simpleline/simple';
import SimpleBar from './charts/simplebar/simplebar';
import SimpleArea from './charts/simplearea/simplearea';
import MultipleCharts from './charts/composedcharts/composed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="header-text">Chart examples with Recharts</h2>
        </div>
        <div className="charts">
          <p className="App-intro">Charts</p>
          <hr></hr>
          <SimpleChart />
          <hr></hr>
          <SimpleBar />
          <hr></hr>
          <SimpleArea />
          <hr></hr>
          <MultipleCharts />
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default App;
