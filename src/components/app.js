import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import '../style.scss';
import NewPost from './new-post';
import Post from './post';
import Posts from './posts';
import NavBar from './nav-bar';
import SignIn from './sign-in';
import SignUp from './sign-up';
import PrivateRoute from './privateRoute';

const App = (props) => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Posts} />
        <PrivateRoute path="/posts/new" component={NewPost} />
        <PrivateRoute path="/posts/:postID" component={Post} />
        {/* <Route path="/posts/new" component={NewPost} /> */}
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route render={() => (<div id="error-msg">Error. Page not found.</div>)} />
      </Switch>
    </Router>
  );
};

export default App;
