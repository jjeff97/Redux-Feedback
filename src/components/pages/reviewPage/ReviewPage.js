import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../mapStoreToProps';
import axios from 'axios';
class ReviewPage extends Component {

  submitFeedback = () => {

    const dataObject = {
        feeling: this.props.store.feedbackReducer.feeling,
        understanding: this.props.store.feedbackReducer.understanding,
        supported: this.props.store.feedbackReducer.support,
        comments: this.props.store.feedbackReducer.comments
    }

    axios({
        method: 'POST',
        url: '/feedback',
        data: dataObject
    }).then((response) => {
        this.props.history.push('/');
    })
}

render() {
    return (
        <div>
            <p>Feeling: {this.props.store.feedbackReducer.feeling}</p>
            <p>Understanding: {this.props.store.feedbackReducer.understanding}</p>
            <p>Supported: {this.props.store.feedbackReducer.support}</p>
            <p>Comments: {this.props.store.feedbackReducer.comments}</p>
            <button onClick={this.submitFeedback}>Submit Feedback!</button>
        </div>
    )
}
}



export default connect(mapStoreToProps)(ReviewPage);