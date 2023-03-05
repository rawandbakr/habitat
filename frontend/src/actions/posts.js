import * as api from '../api/index.js';
import { FETCH_ALL,CREATE,DELETE,FETCH_SINGLE} from '../reducer/posts'

export const getposts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(FETCH_ALL(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getpost = (id) => async (dispatch) => {
  try {
   const {data}= await api.fetchPost(id);
   dispatch(FETCH_SINGLE(data));
  } catch (error) {
    console.log(error.message);
  }
};


export const createPost=(post)=> async (dispatch)=>{
  try {
    const { data }= await api.createPost(post);
    console.log(post)
    dispatch(CREATE(data));
  }  catch (error) {
    console.log(error.message);
  }
};
export const removePost=(id)=> async (dispatch)=>{
  try {
    const { data }= await api.deletePost(id);
    dispatch(DELETE(data));
  }  catch (error) {
    console.log(error.message);
  }
};