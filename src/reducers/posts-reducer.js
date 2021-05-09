import { ActionTypes } from '../actions';

const initialState = {
  allPosts: [],
  currentPost: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, allPosts: action.payload };
    case ActionTypes.FETCH_POST:
      return { ...state, currentPost: action.payload };
    default:
      return state;
  }
};

export default PostsReducer;
