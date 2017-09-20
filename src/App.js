import React, { Component } from 'react';
import './App.css';

var test = [
  {
    test2: 'test text 1',
    test1: 'test text 2',
  }
]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      test
    };
  }

  render() {
    return (
      <div>
          
      </div>
    );
  }
}

export default App;
