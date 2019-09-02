import React, { Component } from 'react';


class FeelingPage extends Component {

  clickConfirm =(event) => {
    //dispatch event here
    this.props.history.push('/understand')
  }
  
  render() {
    return (
      <div>
        
        <h1>How are you feeling?</h1>
        <button onClick={this.clickConfirm}>NEXT</button>
      
      </div>
      


    )
  }



}
export default FeelingPage;