import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../../mapStoreToProps';
class CommentPage extends Component {

  state = {
      comments: ''
  }

  enterValue = (event) => {
      this.setState({
          comments: event.target.value
      })
  }

  onNextClick = (event) => {
      // dispatch this value to a reducer
      this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments})
      this.props.history.push('/review');
  }

  render() {
      return (
          <div>
              <h1>Additional Comments</h1>
              <h5>What do you want us to know?</h5>
              <input type="text" onChange={this.enterValue} />
              <button onClick={this.onNextClick}>Next</button>
          </div>
      )
  }
}


export default connect(mapStoreToProps)(CommentPage);