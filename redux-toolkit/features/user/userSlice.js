// import createSlice
const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Generates pending, fullfilled and rejected action types
const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
    // return
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map(user => user.id))
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
module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;