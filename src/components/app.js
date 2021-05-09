import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import '../style.scss';
import NewPost from './new-post';
import Post from './post';
import Posts from './posts';
import Nav from './nav-bar';

const App = (props) => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/new" component={NewPost} />
        <Route path="/posts/:postID" component={Post} />
        <Route render={() => (<div id="error-msg">Error. Page not found.</div>)} />
      </Switch>
    </Router>
  );
};

export default App;
