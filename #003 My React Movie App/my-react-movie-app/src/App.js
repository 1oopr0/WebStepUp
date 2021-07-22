import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  };

  //setState는 render함수를 호출한다.
  add = () => {
    this.setState(current => ({count : current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("updated");
  }
  componentWillUnmount(){
    console.log("good bye");
  }
  render() {
    console.log("redering..");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
