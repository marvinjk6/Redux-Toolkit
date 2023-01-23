const createSlice = require('@reduxjs/toolkit').createSlice;

// now invoke the function and assign it to a constant, this function accepts an object as argument
// in this object we specift 3 properties name, initial state, reducer function

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    // here we can directly mutate the state
    // here we don't have to explicity return the new state
    reducers: {
        ordered: (state) =>{
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
}) 

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions