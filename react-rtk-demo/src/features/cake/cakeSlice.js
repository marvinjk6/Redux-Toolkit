import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state) =>{
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload || 1
        }
    }
}) 

// exports the reducer and actions
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions