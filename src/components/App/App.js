import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from '../pages/homePage/HomePage';
import FeelingPage from '../pages/feelingPage/FeelingPage';
import UnderstandPage from '../pages/understandPage/UnderstandPage';
import SupportPage from '../pages/supportPage/SupportPage';
import CommentPage from '../pages/commentPage/CommentPage';
import ReviewPage from '../pages/reviewPage/ReviewPage';

class App extends Component {
 
  

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
      
        <Router>
          <Route exact path="/" component={HomePage} />
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
