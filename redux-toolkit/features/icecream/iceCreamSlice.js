// import cakeActios from cakeSlice.js
const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfIceCreams: 20
}

// how the key and the value are the same we can just put initialState
const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIceCreams--
        },

        // || was used in the case of don't pass a payload
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload || 1
        }   
    },

    //extra reducers to give an ice cream for free when the client order a cake
    // this is the recomended way, as a function with the builder argument
    extraReducers: (builder) => {
        //addCase - the action - function
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCreams--
        })
    }

    // the name is the same generated at cakeSlice and the method ordered, we saw 'cake/ordered' at Logger Midleware
    /*** this is not the recomended way
    extraReducers: {
        ['cake/ordered']: (state) => {
            state.numOfIceCreams--
        }
    }
    **/
})

module.exports = iceCreamSlice.reducer
//iceCreamActions is the key to iceCreamSlice.actions
module.exports.iceCreamActions = iceCreamSlice.actions