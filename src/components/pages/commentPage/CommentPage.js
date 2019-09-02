import React, { Component } from 'react';

class CommentPage extends Component {
  handleClick =(event) => {
    this.props.history.push('/review');
  }
  
  render() {
    return (
      <div>
        
        <h1>Any comments you want to leave?</h1>
        <button onClick={this.handleClick}>NEXT</button>
      
      </div>
      


    )
  }


}
export default CommentPage;