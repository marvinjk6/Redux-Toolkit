const configureStore = require('@reduxjs/toolkit').configureStore;
// import cake reducer
const cakeReducer = require('../features/cake/cakeSlice')

// accepts an object as argument
const store = configureStore({
    // here is where we specify all the reducers from slices that belog to features
    reducer: {
        //key:  value
        cake: cakeReducer
    }
})

module.exports = store