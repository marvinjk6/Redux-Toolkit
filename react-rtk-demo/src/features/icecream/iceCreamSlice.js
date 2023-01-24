import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

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
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCreams--
        })
    }
})

export default iceCreamSlice.reducer
//iceCreamActions is the key to iceCreamSlice.actions
export const { ordered, restocked } = iceCreamSlice.actions