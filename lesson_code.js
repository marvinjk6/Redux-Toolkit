/**
 * 
 * lesson 7 - store
 * // import redux and use createStore
const redux = require('redux');
const createStore = redux.createStore;


const CAKE_ORDERED = 'CAKE_ORDERED';

// An action is an object with a type property 
// Action create - is a function that returns an object
function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1 
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

// 5º unsubscribe from the store by calling the function returned from the subscribe method, to capturing the return we wrap the store.subscribe to a constant -> unsubscribe and excecute the unsubscribe()
unsubscribe();
 */







/**
 * Lesson 8 - restoking cakes
 * 
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
                numOfCakes: state.numOfCakes + action.payload
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
 */






/** 9- bind action creators
 * 
const redux = require('redux');
const createStore = redux.createStore;
const bindCreatord = redux.bindActionCreators;

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
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    }

}

const store = createStore(reducer);
console.log('Initial state', store.getState());


const unsubscribe = store.subscribe(()=>console.log('update state', store.getState()));

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(4))

const actions = bindCreatord({orderCake, restockCake}, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(5)

unsubscribe();
 */







/**
 * Lesson 12 - Combine Reducers
 * 
 * 
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
 */





/**
 *  14- middleware
 * 
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
 */