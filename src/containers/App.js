import React, { Component } from 'react'; 
import CounterComponent from './../components/Counter'; 

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1> Hello Redux </h1>
                <CounterComponent />
            </div>
        )
    }
}

export default App; 