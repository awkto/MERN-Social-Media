//asterisk means import everything as actions
import * as api from '../api';

//Action Creators
//these are functions that return actions
export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});

    } catch (error) {
        console.log(error.message);
    }
    
    //commented out to convert into try/catch syntax
    // const action = { type: 'FETCH_ALL', payload: [] }
    // //with redux thunk, instead of return you must dispatch 
    // dispatch(action);    
}
// use redux thunk allows us to specify an additional function

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}