import axios from 'axios';

const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=m_valencia';
// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  ERROR_CATCH: 'ERROR_CATCH',
  ERROR_CLEAR: 'ERROR_CLEAR',
  // UPDATE_POST: 'UPDATE_POST',
  // CREATE_POST: 'CREATE_POST',
  // DELETE_POST: 'DELETE_POST',
};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
    }).catch((error) => {
    });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      dispatch({ type: ActionTypes.ERROR_CLEAR, payload: '' });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_CATCH, payload: error });
    });
  };
}

export function createPost(post, history) {
  axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then(() => {
    history.push('/');
  }).catch((error) => {
  });
}

export function deletePost(id, history) {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => {
    history.push('/');
  }).catch((error) => {
  });
}

export function updatePost(id, post) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then((response) => {
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch((error) => {
    });
  };
}
