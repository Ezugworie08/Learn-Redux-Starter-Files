import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Import css
import css from './styles/style.styl';

// User defined components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

// Set up mount point
render(router, document.getElementById('root'));
