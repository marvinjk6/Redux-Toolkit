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
    }
})

module.exports = iceCreamSlice.reducer
//iceCreamActions is the key to iceCreamSlice.actions
module.exports.iceCreamActions = iceCreamSlice.actions