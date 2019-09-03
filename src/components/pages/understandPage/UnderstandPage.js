import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';

class UnderstandPage extends Component {
  handleClick =(event) => {
    this.props.history.push('/comment');
  }
  
  render() {
    return (
      <div>
        
        <h1>How well are you understanding the content?</h1>
        <p>understanding?</p>
        <NumericInput min={1} max={5} value={1}/>
        <button onClick={this.handleClick}>Next</button>
      
      </div>
      


    )
  }


}
export default UnderstandPage;