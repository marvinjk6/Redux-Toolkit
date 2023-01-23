// import store
const store = require('./app/store');

//import cake actions
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

//import iceCream actions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions;

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));

unsubscribe()
