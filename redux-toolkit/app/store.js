
const configureStore = require('@reduxjs/toolkit').configureStore;

//import logger
//const reduxLogger = require('redux-logger');

const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice');

// create logger
//const logger = reduxLogger.createLogger();


// configureStore accepts an object as argument
const store = configureStore({
    reducer: {
        //key:  value
        cake: cakeReducer,
        iceCream: iceCreamReducer
    },

    //middleware
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store;