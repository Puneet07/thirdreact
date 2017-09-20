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
          {this.state.test.map((test, i) => 
            <span key={i}>
              <h1>{test.test1} </h1>
              <h2>{test.test2}</h2>
            </span>
          )}
      </div>
    );
  }
}

export default App;
