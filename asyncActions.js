
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

const fetcUsersFailure = (error) => {
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
                user: action.payload,
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

const store = require('redux').createStore(reducer);

