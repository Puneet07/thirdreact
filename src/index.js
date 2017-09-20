import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

var App = React.createClass({
    render: function(){
        return(
            <div>
                <div id="header"></div>
                <div className="container">
                    <div className="column">
                        <InboxPane />
                    </div>
                    <div className="column">
                    </div>
                    <div className="column">
                    </div>
                </div>
            </div>
        )
    }
});

var InboxPane = React.createClass({
    render: function() {
        return(
         <div id="inbox-pane">
              <h1>Inbox</h1>
              <table>
                  <thead>
                      <tr>
                          <th>chat Received</th>
                          <th>Name</th>
                          <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        <InboxItem />
                    </tbody>
              </table>
         </div>
        );
    }
});

var InboxItem = React.createClass({
    render: function(){
        return(
            <tr>
                <td>5pm</td>
                <td>Rami loves pizza</td>
                <td>confirmed</td>
            </tr>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
