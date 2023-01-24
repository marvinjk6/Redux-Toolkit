import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

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
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCreams--
        })
    }
})

export default iceCreamSlice.reducer;
//iceCreamActions is the key to iceCreamSlice.actions
export const { ordered, restocked } = iceCreamSlice.actions;