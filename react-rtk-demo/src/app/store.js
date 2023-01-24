import { configureStore } from '@reduxjs/toolkit'

// import reducers i update in this commit
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from'../features/icecream/iceCreamSlice'
import userReducer from '../features/user/userSlice'

// configureStore accepts an object as argument
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }
})

export default store