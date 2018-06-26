import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';
import RouteComponent from './view_src/Navigation/RouterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <RouteComponent />
      </div>
    );
  }
}

export default App;
