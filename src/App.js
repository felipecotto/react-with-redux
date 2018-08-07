import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.handleClickBtn =  this.handleClickBtn.bind(this); 
  }

  handleClickBtn(){
    this.props.sayHello(); 
  }

  render(){
    const { msg } =  this.props;
    return(
      <div>
        <button onClick={this.handleClickBtn}>Click to Hello World</button>
        <p>{ msg.data }</p>
      </div>
    )
  }
}

export default App;
