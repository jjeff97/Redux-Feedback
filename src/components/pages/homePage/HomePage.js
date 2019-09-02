import React, { Component } from 'react';


class HomePage extends Component {

  handleClick =(event) => {
    this.props.history.push('/feeling');
  }
  
  render() {
    return (
      <div>
        
        <h1>Home</h1>
        <button onClick={this.handleClick}>Start Feedback</button>
      
      </div>
      


    )
  }



}
export default HomePage;