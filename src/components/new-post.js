/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
      coverUrl: '',
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleTagsChange = (event) => {
    this.setState({ tags: event.target.value });
  }

  handleContentChange = (event) => {
    this.setState({ content: event.target.value });
  }

  handleUrlChange = (event) => {
    this.setState({ coverUrl: event.target.value });
  }

  onSubmit = (event) => {
    this.setState({
      title: '',
      tags: '',
      content: '',
      coverUrl: '',
    });
    this.props.createPost(this.state, this.props.history);
  }

  onCancel = (event) => {
    this.setState({
      title: '',
      tags: '',
      content: '',
      coverUrl: '',
    });
  }

  render() {
    return (
      <div className="create-post-container">
        <div className="header">
          <div id="create">Create a New Post</div>
          <div id="share">Share your own inspo and style!</div>
        </div>
        <div className="form-group">
          <label>Title</label>
          <input id="input" className="form-control form-control-lg" type="text" onChange={this.handleTitleChange} value={this.state.title} />
        </div>
        <div className="form-group">
          <label>Tags</label>
          <input id="input" placeholder="i.e. brand names, designs, etc. etc." className="form-control" type="text" onChange={this.handleTagsChange} value={this.state.tags} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input id="input" className="form-control" type="text" onChange={this.handleContentChange} value={this.state.content} />
        </div>
        <div className="form-group">
          <label>Inspo Image URL</label>
          <input id="input" placeholder="insert img or gif" className="form-control" type="text" onChange={this.handleUrlChange} value={this.state.coverUrl} />
        </div>
        <div className="icon-container">
          <Link to="/">
            <img className="icon" id="delete-icon" src="https://static.thenounproject.com/png/3896196-200.png" alt="delete-icon" onClick={this.onCancel} />
          </Link>
          <img className="icon" id="done-icon" src="https://static.thenounproject.com/png/3095890-200.png" alt="done-icon" onClick={this.onSubmit} />
        </div>
      </div>

    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
