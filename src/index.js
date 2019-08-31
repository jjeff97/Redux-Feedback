import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider} from 'react-redux'
import logger from 'redux-logger';

import feelingReducer from './modules/reducers/feeling.reducer';
import understandReducer from './modules/reducers/understand.reducer';
import supportReducer from './modules/reducers/support.reducer';
import commentReducer from './modules/reducers/comment.reducer';


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger)
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();