import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';

class SupportPage extends Component {
  handleClick =(event) => {
    this.props.history.push('/comment');
  }
  
  render() {
    return (
      <div>
        
        <h1>How well are you being supported?</h1>
        <p>support?</p>
        <NumericInput min={1} max={5} value={1}/>
        <button onClick={this.handleClick}>Start Feedback</button>
      
      </div>
      


    )
  }




}
export default SupportPage;