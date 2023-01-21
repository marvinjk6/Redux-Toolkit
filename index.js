
const redux = require('redux');
const createStore = redux.createStore;
const bindCreator = redux.bindActionCreators;
// Combine Reducers redux method
const combineReducers = redux.combineReducers;

//type of cake actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

//type of Ice Creams actions
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// Cake Actions
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

//Ice Cream Actions
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

// cake inicial state
const cakeInitialState = {
    numOfCakes: 10,
}

// ice cream initial state
const iceCreamInitialState = {
    numOfIceCreams: 10,
}

//cake reducer
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

//ice cream reducer
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


const store = createStore(combinedReducers);
console.log('Initial state', store.getState());


const unsubscribe = store.subscribe(()=>console.log('update state', store.getState()));

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