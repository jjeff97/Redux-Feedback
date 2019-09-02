import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import FeelingPage from '../pages/commentPage/CommentPage';
import UnderstandPage from '../pages/understandPage/UnderstandPage';
import SupportPage from '../pages/supportPage/SupportPage';
import CommentPage from '../pages/commentPage/CommentPage';
import ReviewPage from '../pages/reviewPage/ReviewPage';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understand" component={UnderstandPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comment" component={CommentPage} />
          <Route exact path="/review" component={ReviewPage} />
        </Router>
      </div>
    );

  }
}
export default App;
