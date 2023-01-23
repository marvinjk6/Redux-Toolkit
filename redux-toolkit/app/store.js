const configureStore = require('@reduxjs/toolkit').configureStore;
// import cake reducer
const cakeReducer = require('../features/cake/cakeSlice');
//import ice cream reducer
const iceCreamReducer = require('../features/icecream/iceCreamSlice');

// configureStore accepts an object as argument
const store = configureStore({
    // here is where we specify all the reducers from slices that belog to features
    reducer: {
        //key:  value
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
})

module.exports = store