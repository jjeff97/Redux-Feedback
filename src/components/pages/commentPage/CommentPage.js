import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
class CommentPage extends Component {
  state = {
    NewComment: '',
  }

  handleClick =(event) => {
    this.props.history.push('/review');
  }
  clickSummary = () =>{
    const user ={
      userComment: this.state.userComment
    }
    //dispatch
  }

  updateFeedback = (key) => event => {
    this.setState({

    })
  }
  render() {
    return (
      <div>
        
        <h1>Any comments you want to leave?</h1>
        <input onChange={this.updateForm('comment')} type="text" placeholder="Enter your comment" />
        <button onClick={this.handleClick}>NEXT</button>
      
      </div>
      


    )
  }


}
export default connect()(CommentPage);