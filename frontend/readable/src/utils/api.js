import { getData, postData, putData, deleteData, createUID } from './helpers.js'

export function getInitialData(){
  return Promise.all([
    getData('/posts'),
    getData('/categories')
  ]).then(([categories, posts]) => ({
    categories,
    posts
  }))
}

export function getPostsPerCategory(catId){
  return getData(`/${catId}/posts`)
    .then(posts => ({ posts }))
}

export function getPost(postId){
  return getData(`/posts/${postId}`)
    .then(post => ({ post }))
}

export function newPost(title, body, author, catId){
  const post = {
    id: createUID,
    timestamp: new Date().getTime(),
    title: title,
    body: body,
    author:author,
    category: catId
  }
  return postData('/posts', post)
    .then(post)
}

export function newComment(title, body, author, postId){
  const comment = {
    id: createUID,
    timestamp: new Date().getTime(),
    body: body,
    author:author,
    parentId: postId
  }
  return postData('/comments', comment)
    .then(comment)
}

export function deletePost(postId){
  return deleteData(`/posts/${postId}`)
  .then(postId)
}

export function deleteComment(commentId){
  return deleteData(`/comments/${commentId}`)
  .then(commentId)
}

export function getPostComments(postId){
  return getData(`/posts/${postId}/comments`)
  .then(comments => ({ comments }))
}

export function editPost(postId, title, body){
  const post = {
    title: title,
    body: body
  }
  return putData(`/posts/${postId}`, post)
    .then(post)
}

export function editComment(commentId, body){
  const comment = {
    timestamp: new Date().getTime(),
    body: body
  }
  return putData(`/comments/${commentId}`, comment)
    .then(comment)
}

export function editPostVote(postId, vote){
  const post = {
    option: vote
  }
  return postData(`/posts/${postId}`, post)
    .then(vote)
}

export function editCommentVote(commentId, vote){
  const comment = {
    option: vote
  }
  return postData(`/comments/${commentId}`, comment)
    .then(vote)
}
