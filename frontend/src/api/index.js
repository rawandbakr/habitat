import axios from 'axios';

const postUrl='http://localhost:4000/posts';

export const fetchPosts=()=> axios.get(postUrl);
export const fetchPost=(id)=> axios.get(`${postUrl}/${id}`);
export const createPost=(post)=>axios.post(postUrl,post)
export const deletePost=(id)=>axios.delete(`${postUrl}/${id}`)
// export const updatePost=(post)=>axios.patch()