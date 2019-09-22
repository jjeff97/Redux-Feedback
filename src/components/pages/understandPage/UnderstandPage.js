import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../mapStoreToProps';

class UnderstandPage extends Component {

  state = {
    understandingScore: 0,
    warning: false,
    disableButton: true
  }

  enterValue = (event) => {
    const understandingScore = parseInt(event.target.value);
    if (understandingScore < 0 || event.target.value.length == 0) {
      this.setState({
        warning: true,
        disableButton: true
      })

    } else {
      this.setState({
        understandingScore: understandingScore,
        warning: false,
        disableButton: false
      })
    }
  }
  handleClick = (event) => {
    this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understandingScore })
    this.props.history.push('/support');
  }

  render() {
    let warnElement = <p className="warning">You must enter in a value between 1 and 5!</p>;

    if (this.state.warning == false) {
      warnElement = <div></div>
      return (
        <div>
          <h1>Understanding</h1>
          <h4>How well did you understand the material today? 1 (not great) - 5 (great!)</h4>
          {warnElement}
          <input type="number" onChange={this.enterValue} />
          <button disabled={this.state.disableButton} onClick={this.handleClick}>Next</button>

        </div>



      )
    }


  }
}
  export default connect(mapStoreToProps)(UnderstandPage);