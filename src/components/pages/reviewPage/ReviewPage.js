import React, { Component } from 'react';
import { getReview } from '../../../modules/services/review.service';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../modules/mapStoreToProps';

class ReviewPage extends Component {
  componentDidMount() {
    getReview().then((response) => {
      console.log(`Hello: ${response}`)
    })
  }
  clickReview = (event) => {
    const reviewId = event.target.dataset.id;
    const reviewObject = this.props.store.reviewReducer[reviewId];
    this.props.dispatch({ type: 'ADD_REVIEW', payload: reviewObject });
  }


  render() {

    const reviewArray = this.props.store.reviewReducer.map((item, index) => {
      return (
        <div key={index}>
          <span>{item.feeling} - {item.understanding} - {item.support}-{item.comments}</span>
          <button data-id={index} onClick={this.clickReview}>Submit</button>
        </div>
      )
    })
    return(
      <div>
        <h1>Review Your Feedback</h1>
        {reviewArray}
      </div>
    )

      
  }
  
  }




export default connect(mapStoreToProps)(ReviewPage);