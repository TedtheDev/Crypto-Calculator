import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
        <div>
            <h1>hello from crypto calculator</h1>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('.app')
);