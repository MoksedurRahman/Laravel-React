// import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = {
        counter: 0,
    };
    increamentCounter = (increamentValue) => {
        let newIncreament = this.state.counter + increamentValue;
        this.setState({
            counter: newIncreament,
        });
    };
    decreamentCounter = (decreamentValue) => {
        let newDecreament = this.state.counter - decreamentValue;
        this.setState({
            counter: newDecreament,
        });
    };
    render() {
        return (
            <div>
                <div className="container ml-5">
                    <h1>Count: {this.state.counter}</h1>
                    <p>
                        <button className="btn btn-success btn-lg"
                            onClick={()=>this.increamentCounter(20)}
                        >
                            +
                    </button>
                    <button className="btn btn-danger btn-lg"
                            onClick={()=>this.decreamentCounter(20)}
                        >
                           -
                    </button>
                    </p>
                </div>

            </div>

        );
    }
}

export default App;
// function App() {
//     return (
//         <div className="container">
//            <div>
//                Hello Component
//            </div>
//         </div>
//     );
// }

// export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
