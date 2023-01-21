// Code to lesson 8 - Restockin Cakes
/*
// import redux and use createStore
const redux = require('redux');
const createStore = redux.createStore;


const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

// An action is an object with a type property 
// Action create - is a function that returns an object
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1 
    }
}

// action to restock cake
function restockCake(qty) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

// Reducers: (previousState, action) => newState
// we need 2 arguments to a reduce
// first the state of the application before making any change
// second the action
// the state object might contain more than one property, in that case to handle with this cenario is more safe to create a copy of the state object ...state, with spread operator to not change others properties

const initialState = {
    numOfCakes: 10,
    anotherProperty: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        case CAKE_RESTOCKED:
        
            return {
                // this ...state isn't necessary because there'snt another properties
                ...state, 
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    }

}

// 1º responsabilitie the store holds the application state, the parameter is the reducer function
const store = createStore(reducer);
// 2º resposabilitie access to state via getState()
console.log('Initial state', store.getState());


// 4º- responsabilities - allow the app to subscribe to changes in the store
// subscribe method accepts a function
const unsubscribe = store.subscribe(()=>console.log('update state', store.getState()));

// 3º - responsabilidade - the store provides a dispatch method to update the state, the dispatch method accepts an action assets parameter
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));


// 5º unsubscribe from the store by calling the function returned from the subscribe method, to capturing the return we wrap the store.subscribe to a constant -> unsubscribe and excecute the unsubscribe()
unsubscribe();
*/