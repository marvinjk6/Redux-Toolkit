
const redux = require('redux');
const createStore = redux.createStore;
const bindCreator = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// function to use middleware 
const applyMiddleware = redux.applyMiddleware;

// require redux-logger and create logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';


function orderCake(qty) {
    return {
        type: CAKE_ORDERED,
        payload: qty || 1
    }
}

function restockCake(qty) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty || 1
    }
}

function orderIceCream(qty) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty || 1
    }
}

function restockIceCream(qty) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty || 1
    }
}

const cakeInitialState = {
    numOfCakes: 10,
}

const iceCreamInitialState = {
    numOfIceCreams: 10,
}

const cakeReducer = (state = cakeInitialState , action) => {

    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        default:
            return state;
    }

}

const iceCreamReducer = (state = iceCreamInitialState , action) => {

    switch (action.type) {

        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.payload
            }

        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }

        default:
            return state;
    }

}

const combinedReducers = combineReducers({
    //key: value
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//use the applyMiddleware as a second parameter os store, and logger in applyMiddleare
const store = createStore(combinedReducers, applyMiddleware(logger));
console.log('Initial state', store.getState());

//remove the consolelog
const unsubscribe = store.subscribe(()=>{});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(4))

const actions = bindCreator({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch);
actions.orderCake(7);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(5)

actions.orderIceCream(3);
actions.orderIceCream();
actions.restockIceCream(5)

unsubscribe();