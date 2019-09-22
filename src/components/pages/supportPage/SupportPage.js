import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../mapStoreToProps';

class SupportPage extends Component {

  state = {
    supportScore: 0,
    warning: false,
    disableButton: true
  }

  enterValue = (event) => {
    const supportScore = parseInt(event.target.value);

    if (supportScore < 0 || supportScore > 5 || event.target.value.length == 0) {
      this.setState({
        warning: true,
        disableButton: true
      })
    } else {
      this.setState({
        supportScore: supportScore,
        warning: false,
        disableButton: false
      });
    }
  }
  handleClick = (event) => {
    this.props.dispatch({ type: 'SET_SUPPORTED', payload: this.state.supportScore })
    this.props.history.push('/comment');
  }

  render() {

    let warnElement = <p className="warning">You must enter in a value between 1 and 5!</p>;

    if (this.state.warning == false) {
      warnElement = <div></div>
      return (
        <div>

          <h1>Supported</h1>
          <h4>Did you feel supported today? 1 (no.) - 5 (Yes!)</h4>
          {warnElement}
          <input type="number" onChange={this.enterValue} />
          <button disabled={this.state.disableButton} onClick={this.handleClick}>Next</button>

        </div>



      )
    }
  }



  }
  export default connect(mapStoreToProps) (SupportPage);