import React, { Component } from 'react';

class SupportPage extends Component {
  handleClick =(event) => {
    this.props.history.push('/comment');
  }
  
  render() {
    return (
      <div>
        
        <h1>How well are you being supported?</h1>
        <button onClick={this.handleClick}>Start Feedback</button>
      
      </div>
      


    )
  }




}
export default SupportPage;