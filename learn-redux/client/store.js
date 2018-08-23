import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// User defined components, data sources etc.
import rootReducer from './reducers/index';

// Data sources
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data.
const defaultState = {
  posts,
  comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
