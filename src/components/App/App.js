import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from '../pages/homePage/HomePage';
import FeelingPage from '../pages/feelingPage/FeelingPage';
import UnderstandPage from '../pages/understandPage/UnderstandPage';
import SupportPage from '../pages/supportPage/SupportPage';
import CommentPage from '../pages/commentPage/CommentPage';
import ReviewPage from '../pages/reviewPage/ReviewPage';
import AdminPage from '../pages/AdminPage/AdminPage';

class App extends Component {
 
  

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
      <br/>
      
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understand" component={UnderstandPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comment" component={CommentPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/admin" component={AdminPage} />

        </Router>
      </div>
    );

  }
}
export default App;
