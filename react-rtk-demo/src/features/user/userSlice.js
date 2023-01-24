// import createSlice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Generates pending, fullfilled and rejected action types
// we have the async logic written using the create async thunk function
// first argument is the action type
// second argument is a async function which returns a promise
// before we're catching the id, now we have the browser so lets get the entire object
export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        //pending
        builder.addCase(fetchUsers.pending, state =>{
            state.loading = true
        });
        // fulfilled
        builder.addCase(fetchUsers.fulfilled, (state, actions) => {
            state.loading = false,
            state.users = actions.payload,
            state.error = ''
        });
        // rejected
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = [],
            state.error = action.error.message
        });
    }
});

// export reducer and fetch users
export default userSlice.reducer;
