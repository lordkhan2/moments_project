// import everything from api, so we can use fetchposts
import * as api from '../api';

//Action Creators// fetch all data from api
export const getPosts = () => async (dispatch) => {
    try {
        //destructure data, we get the reponse from api as data
        const {data} =await api.fetchPosts();
        //dispatch the action //payload is the data 
        dispatch({ type: 'FETCH_ALL', payload : data});
        
    } catch (error) {
        console.log(error.message);
        
    } 
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const deletePost = (id) => async (dispatch) => {
    try {
        // no need of const {data} = //since we dont need response data
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

/*
usually done
const action ={type: 'FETCH_ALL', payload: []}
return action;
an action is an object
since its async data we have to use async thunk
to use redux thunk, const getPosts = () => async (dispatch) => {
    const action= { type: 'FETCH_ALL', payload : data}
    dispatch action
}
redux thunk doesnt use return, so we have to dispatch action
therefore we directly dispatch({ type: 'FETCH_ALL', payload : data})
 */
