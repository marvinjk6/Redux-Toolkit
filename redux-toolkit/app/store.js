
const configureStore = require('@reduxjs/toolkit').configureStore;

//const reduxLogger = require('redux-logger');

const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice');

//const logger = reduxLogger.createLogger();

//import user reducer
const userReducer = require('../features/user/userSlice');


// configureStore accepts an object as argument
const store = configureStore({
    reducer: {
        //key:  value
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }

    //middleware
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store;