import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var Apps = React.createClass({
    render: function() {
        return(
            <div>
                <div id="header"></div>
                <div className="container">
                    <div className="column">
                        <InboxPane />
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
            </div>
        )
    }
})

ReactDOM.render(<Apps />, document.getElementById('root'));
registerServiceWorker();
