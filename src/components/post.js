/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPost, deletePost, updatePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: '',
      tags: '',
      content: '',
      coverUrl: '',
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  onEdit = () => {
    console.log('in edit');
    this.setState({
      isEditing: true,
      title: this.props.post.title,
      content: this.props.post.content,
      tags: this.props.post.tags,
      coverUrl: this.props.post.coverUrl,
    });
  }

  handleDeleteClick = () => {
    this.props.deletePost(this.props.post.id, this.props.history);
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

  onUpdate = () => {
    const currPost = {
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags,
      coverUrl: this.state.coverUrl,
    };
    this.props.updatePost(this.props.match.params.postID, currPost);
    this.setState({
      isEditing: false,
      title: '',
      tags: '',
      content: '',
      coverUrl: '',
    });
    // this.props.fetchPost(this.props.match.params.postID);
  }

  renderMap = () => {
    if (this.state.isEditing) {
      return (
        <form>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control form-control-lg" id="input" type="text" onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <div className="form-group">
            <label>Tags</label>
            <textarea id="input" type="text" className="form-control" onChange={this.handleTagsChange} value={this.state.tags} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea id="input" type="text" className="form-control" onChange={this.handleContentChange} value={this.state.content} />
          </div>
          <div className="form-group">
            <label>Inspo Image URL</label>
            <input id="input" type="text" className="form-control form-control-sm" onChange={this.handleUrlChange} value={this.state.coverUrl} />
          </div>
          <div className="icon-container">
            <Link to="/">
              <img className="icon" id="delete-icon" src="https://static.thenounproject.com/png/3896196-200.png" alt="delete-icon" onClick={this.handleDeleteClick} />
            </Link>
            <img className="icon" id="done-icon" src="https://static.thenounproject.com/png/3095890-200.png" alt="done-icon" onClick={this.onUpdate} />
          </div>
        </form>
      );
    } else {
      return (
        <div className="post-container">
          <div className="card" id="post-card">
            <img className="card-img-top" id="post-img" src={this.props.post.coverUrl} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title" id="post-title">{this.props.post.title}</h5>
              <p className="card-tags" id="post-tags">{this.props.post.tags}</p>
              <p className="card-content" id="post-content">{this.props.post.content}</p>
              <p className="card-author" id="post-author">author: {this.props.post?.author?.username}</p>
            </div>
            <div className="icon-container">
              <img className="icon" id="delete-icon" src="https://static.thenounproject.com/png/3896196-200.png" alt="delete-icon" onClick={this.handleDeleteClick} />
              <img className="icon" id="edit-icon" src="https://static.thenounproject.com/png/3653710-200.png" alt="edit-icon" onClick={this.onEdit} />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.props.error === '') {
      return (
        <div className="one-post">
          <div className="post-info">
            <div className="info">{this.renderMap()}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 id="error-msg">Error. Page does not exist.</h1>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  post: state.posts.currentPost,
  error: state.error.error,
});

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post));
