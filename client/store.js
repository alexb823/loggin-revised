import {createStore, applyMiddleware, combineReducers} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';

const LOGGED_IN_USER = 'LOGGED_IN_USER';

const loggedInUser = user => {
  return {
    type: LOGGED_IN_USER,
    user
  }
}

//thunks
export const login = (email, password) => {
  return dispatch => {
    return axios.post('/auth', {email, password})
    .then(response => response.data)
    .then(user => dispatch(loggedInUser(user)))
  }
}

export const sessionLogin = () => {
  return dispatch => {
    return axios.get('/auth')
    .then(response => response.data)
    .then(user => dispatch(loggedInUser(user)))
  }
}



const userReducer = (state = { }, action) => {
  switch(action.type) {
    case LOGGED_IN_USER:
    return action.user;
    default:
    return state;
  }
}

const reducer = combineReducers({
  user: userReducer
});

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
