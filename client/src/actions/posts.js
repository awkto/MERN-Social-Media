//asterisk means import everything as actions
import * as api from '../api';

//Action Creators
//these are functions that return actions
const getPosts = () => async (dispatch) => {
    const action = { type: 'FETCH_ALL', payload: [] }
    //with redux thunk, instead of return you must dispatch 
    dispatch(action);    
}
// use redux thunk allows us to specify an additional function