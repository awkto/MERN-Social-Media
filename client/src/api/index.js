import axios from 'axios';

const url = 'http://localhost:5000/posts'

//create a function
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);