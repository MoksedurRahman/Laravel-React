import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
           <div>
               Hello Component!....
           </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
