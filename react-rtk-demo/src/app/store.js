import { configureStore } from '@reduxjs/toolkit';


//const reduxLogger = require('redux-logger');
// import reducers
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice');
const userReducer = require('../features/user/userSlice');

//const logger = reduxLogger.createLogger();

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

export default store;