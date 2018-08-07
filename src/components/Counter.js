import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import CounterActions from './../actions/CounterActions'; 

class Counter extends Component {
    constructor(props) {
        super(props)

        this.handleIncrement = this.handleIncrement.bind(this); 
        this.handleDecrement = this.handleDecrement.bind(this); 
    }

    handleIncrement() {
        this.props.onIncrement();
    }

    handleDecrement() {
        this.props.onDecrement();
    }

    render() {
        const { value } =  this.props; 
        console.log(this.props);
        return (
            <div>
                <h2>Clicked: { value } times</h2>
                <button onClick={ this.handleIncrement }> Increment </button>
                <button onClick={ this.handleDecrement }> Decrement </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (value) => dispatch(CounterActions.onIncrement(value)),
        onDecrement: (value) => dispatch(CounterActions.onDecrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 