import axios from 'axios';

const url = 'localhost:5000/posts'

export const fetchPosts = () => axios.get(url);




export const createPost = (newPost) => axios.post(url, newPost);
//sets id and updatePost. `${url}/${id}` to get the url and id and second parameter gets updated post
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
