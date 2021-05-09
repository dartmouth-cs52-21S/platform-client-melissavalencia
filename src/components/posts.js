/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
import { fetchPosts } from '../actions';

const Thumbnail = (props) => {
  return (
    <div className="card" id="tn-card">
      <img className="card-img-top" src={props.post.coverUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title" id="tn-title">{props.post.title}</h5>
        <p className="card-tags" id="tn-tags">{props.post.tags}</p>
      </div>
    </div>

  );
};

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  showPosts = (posts) => {
    if (posts) {
      return (posts.map((post) => {
        // put this in a nav link
        return (<Link id="tn-link" to={`posts/${post.id}`} key={post.id}> <Thumbnail id={post.id} key={post.id} post={post} /> </Link>);
        // return (<Link to={`posts/${post.id}`}> <Post id={post.id} key={post.id} post={post} /> </Link>);
      }));
    }
    return (
      <div />
    );
  }

  render() {
    return (
      <div className="all-posts">
        {this.showPosts(this.props.allPosts)}
      </div>
    );
  }
}

const mapStateToProps = (reduxstate) => ({
  allPosts: reduxstate.posts.allPosts,
});

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
