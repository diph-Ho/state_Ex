import React from 'react';

class App extends React.Component{

  state = {
    count: 0
  }

  add = () => {
    this.setState( current =>({
      count: current.count + 1
    }))
  };
  minus = () => {
    this.setState( current => ({
      count: current.count - 1
    }))
  };

  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }

  render(){
    console.log("I'm rendering");
    return(
      <div>
        <h1>the number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
