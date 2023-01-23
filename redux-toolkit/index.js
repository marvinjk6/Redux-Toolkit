// import store
const store = require('./app/store');
//import cake actions
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

unsubscribe()
