import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';


class FeelingPage extends Component {


  clickConfirm =(event) => {
    //dispatch event here
    this.props.history.push('/understand')
  }
  
  render() {
    return (
      <div>
        
        <h1>How are you feeling?</h1>
        <p>feeling?</p>
        <NumericInput min={1} max={5} value={1}/>
        <button onClick={this.clickConfirm}>NEXT</button>
      
      </div>
      


    )
  }



}
export default FeelingPage;