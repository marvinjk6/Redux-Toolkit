const redux = require('redux');
// import redux-thunk
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

//State
const initialState = {
    loading: false,
    users: [],
    error: ''
}

//Actions Types

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// actions creators 
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,

    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
            
    
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
    }

}

//thunk middleware returns a function receives the dispacth method as its argument, import axios 
const fetchUsers = () => {
    return function(dispacth) {
        //before fire off our api call, dispatch fetch users request
        dispacth(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is the users
            const users = response.data.map(user => user.id)
            // when got the response dispacth
            dispacth(fetchUsersSuccess(users))
        }).catch(error =>{
            // error.message is the error message
            dispacth(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(()=>console.log(store.getState()));
store.dispatch(fetchUsers());


