// import store
const { setUseProxies } = require('immer');
const store = require('./app/store');

//import cake actions
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

//import iceCream actions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions;

// import fetchUsers
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('Initial State', store.getState());

//const unsubscribe = store.subscribe(() => {console.log('update state', store.getState())});

store.subscribe(()=>console.log('update state', store.getState()));

// dispatch fetchUsers
store.dispatch(fetchUsers());

/*
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));
*/

//unsubscribe()
