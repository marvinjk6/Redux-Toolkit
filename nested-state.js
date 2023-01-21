
const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
    name: 'Victor Krauser',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
}

const STREET_UPDATE = 'STREET_UPDATE';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case STREET_UPDATE:
            // 
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            })
    
        default: {
            return state;
        }
    }
}

const store = redux.createStore(reducer);

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('Updated State', store.getState())
});

store.dispatch(updateStreet('456 Second St'));

unsubscribe();


/**
 * inicial code 
 * 
const redux = require('redux');

const initialState = {
    name: 'Victor Krauser',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
}

const STREET_UPDATE = 'STREET_UPDATE';

const updateStreet = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case STREET_UPDATE:

            return {
                ...state,//to ensure name won't be affected
                adress: {
                    // to ensure city and state wont'be affected
                    ...state.address, 
                    street: action.payload
                }
            } 
    
        default: {
            return state;
        }
    }
}

const store = redux.createStore(reducer);

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('Updated State', store.getState())
});

store.dispatch(updateStreet('456 Second St'));

unsubscribe();
 */