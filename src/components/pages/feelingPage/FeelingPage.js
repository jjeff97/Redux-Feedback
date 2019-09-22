import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../mapStoreToProps';

class FeelingPage extends Component {
  state = {
    feelingScore: 0,
    warning: false,
    disableButton: true

  }

  enterValue = (event) => {
    const feelingScore = parseInt(event.target.value);

    if (feelingScore < 0 || feelingScore > 5 || event.target.value.length == 0) {
      this.setState({
        warning: true,
        disableButton: true
      })
    } else {
      this.setState({
        feelingScore: feelingScore,
        warning: false,
        disableButton: false
      });
    }
  }

  clickConfirm = (event) => {
    this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feelingScore })
    this.props.history.push('/understand')
  }

  render() {

    let warnElement = <p className="warning">You must enter in a value between 1 and 5!</p>;

    if (this.state.warning == false) {
      warnElement = <div></div>
    }

    return (
      <div>
        <h1>feeling?</h1>
        <h4>How are you feeling? 1 (not great) - 5 (great!)</h4>

        {warnElement}
        <input type="number" onChange={this.enterValue} />
        <button disabled={this.state.disableButton} onClick={this.clickConfirm}>Next</button>
      </div>



    )
  }
}
  
export default connect(mapStoreToProps) (FeelingPage);