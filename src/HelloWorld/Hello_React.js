import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  constructor(props) {
    super(props)

    this.handleClickBtn = this.handleClickBtn.bind(this)
  }

  componentWillMount() {
    this.setState({
      msg: ''
    })
  }

  handleClickBtn() {
    this.setState({
      msg: 'Hello World'
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClickBtn}>Click to Hello World</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default Hello;
