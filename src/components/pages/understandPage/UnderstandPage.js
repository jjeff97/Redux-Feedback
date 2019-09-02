import React, { Component } from 'react';

class UnderstandPage extends Component {
  handleClick =(event) => {
    this.props.history.push('/comment');
  }
  
  render() {
    return (
      <div>
        
        <h1>How well are you understanding the content?</h1>
        <button onClick={this.handleClick}>Next</button>
      
      </div>
      


    )
  }


}
export default UnderstandPage;