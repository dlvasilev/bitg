import _ from 'lodash';
import { createSelector } from 'reselect';

const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostsIds;

const getPosts = (posts, selectedPostsIds) => {
  const selectedPosts = _.filter(
    posts,
    post => _.contains(selectedPostsIds, post.id)
  )

  console.log(selectedPosts);
  return selectedPosts;
}

export default createSelector(
  postsSelector,
  selectedPostsSelector,
  getPosts
);
