
const redux = require('redux');
const createStore = redux.createStore;

const CAKE_ORDERED = 'CAKE_ORDERED';

const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1 
    }
}

function restockCake(qty) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}


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
                ...state,
            }
        default:
            return state;
    }

}

const store = createStore(reducer);
console.log('Initial state', store.getState());


const unsubscribe = store.subscribe(()=>console.log('update state', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(4))

unsubscribe();