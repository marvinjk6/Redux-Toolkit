# Redux-Toolkit Youtube channel Codevolution
Tutorial de Redux-Toolkit 

### Redux Toolkit

* React is a library used to build user interfaces;
* Redux is a library for managing state in a predictable way in Javascript applications;
* Redux toolkit is a library for efficient redux development;
* React-redux is a library that provides bindings to use React and Redux (toolkit) together in an application;

- npm init --yes
- npm install redux

### Three concepts

* Store: Holds the state of your application
* Action: Describes what happened in the application
* Reducer: which handles the action and decides how to update the state. 

### Three Principles

* 1- Global State: The Global state of your application is stored as an object inside a single store.
    - Maintain our application state in a single object which would be managed by the Redux store.

* 2- State only: The only way to change the state is to dispatch an action, an object that describes what happened.
    - to update the state of your app, you need to let Redux know abaout that with a action, not allowed to directle update the state object.

* 3- To specify ho the state is updated based an actions, you write pure reducers.
    - Reducer - (previousState, action) => newState.

## Restocking cakes

In this scenario, everyday a vendro comes to the shop to restock the shelves. The vendor can stock up one or more number of cakes depending on the previous day sales.

* was created a new action restockCake(qtd)
    - quantity is passed as a parameter for the action;
    - in redux the convention is to use payload for any addtional information you want to send;
    - see the differences of how the actions were passed in the reducer (CAKE_ORDERED - CAKE_RESTOCKED)

## Bind action creators

until this moment we invoke dispatch on the store an pass in the action -> store.dispatch(orderCake()), but there is an alternative way
- import bind action creators -> redux.bindActionCreators
- first parameter is an object with the actions;
- second the store method - store.dispatch;

## Cakes and Ice Creams - Multiple Reducers

We have a cake shop, and we have cakes stored on the shelf, the business is doing very well and the shop wants to sell ice creams in addition to cakes, now we have two shopkeepers, one for the cakes and other for the ice creams

* create the initial state, action and reducer for the ice cream
* we can put the actions of iceCream in the same reducer of cakes - but this is not a good approach

## Cake and Ice Cream - Combine Reducers 

* now we're going to create two reducers and combine them, this is a better approach, using the redux method combineReducers;
* when we dispatch and action, both reducers receive the action but the action just occurs for the especifc reducer
* the combineReducers method receive as parameters an object with the two reducers, we can put a key(cake) and the value(CakeReducer)

## Immer - library to work with Redux

Earlier when we defined a reducer we learned that we should never mutate the state and always return a new object that resembles the next state, we've done that with both reducer cake and ice Cream. We have been careful to ensure the existing state is copied and only the necessary property is updated, so spread the state (...state) and change number of cakes and ice Creams.

In more complex applications to update the state of an element is more complex and becomes a pain to deal with it due the necessity to make a copy of the state many times ...spread
* in the reducer we need 

* to help we can use a library called npm install immer
* import the produce method
* produce has two parameters state and draft
    - produce (state, (draft) => {
        return draft.
    }

### Middleware 

Here we'll learn how to use middleware in Redux, the middleware will be incorporating into our cake and ice cream shop application is redux logger.
This library basically logs all information releted to redux in the application.
* npm install redux-logger
* const reduxLogger = require('redux-logger');
* 
* import redux.applyMiddleware - pass it as an argument to createStore(), and pass in the middleware to the applyMeddleware method

### Async Actions

The application we are going to build will fecth a list of users from an API endpoint and stores this in the redux store:

State of the application:
* Properties:
    -   loading: indicates whether the data is currently being fetched or not
    -   data: the data is an list of users, the initial state is an empty array
    -   error: the api request might fail for some reason, in that scenario we get an error, the initial state is sring empty ''

* Actions:
    -   FETCH_USERS_REQUESTED - a list of users have been requested from the api endpoint
    -   the second and third action are dependent on the first one
        *   if the data was fecthed successfully we have an action with the type FETCH_USERS_SUCCEEDED
        * if there's an error we have an action whith type FETCH_USERS_FAILED

* Reducer:
    -   if the action type is FETCH_USERS_REQUESTED
        * loading: true
    -   if the action type is FETCH_USERS_SUCCEEDED
        * loading: false
        * return the data from the API
            -  users: data (from API)
    -   if actions type is FETCH_USERS_FAILED
        * loading: false
        * return the error from API
            - error: error


## Redux thunk Middleware

Now we'll learn how to use action creators with network requests, that is how to make an api call when working with redux, well need two packages

* Axios: will be used to make get requests to an API endpoint
* Redux-thunk: is the standard way to define asynchronous actions creators in applications, is basically a middleware we will applying to our redux store
* npm i axios redux-thunk
* second step is to get applyMiddleware, and pass it as a second parameter of createStore()
* third step is to import thunk middleware

fetchUsers is an action creator, we have leanrd so far is that an action creator returns an action, but what the thunk middleware brings to the the table is the ability for an action creator to return a function instead an action object

* use the jsonplaceholder 
 

## Redux Toolkit Intro

Now we're going to develop the same cake and ice cream shop application but this time with Redux Toolkit

Redux toolkit has some opinions on the folder structure, and we're going to follow the same.
- The folder App with store.js;
- the folder features;

##  Cake Slice

We're going to define the actions and reducers, the recommendations is to group together the reducer logic and actions for a single feature in a single file, the file should contain slice as suffix;
- create a feature slice using the createSlice function, wich generates actions and reducers;
- cakeSlice.js
- iceCreamSlice.js

## Configuring Store

With redux toolkit we use configure store to define our store 

* cakeSlice.js
    
    - create the store using configure store function
    - dispatch actions on the store using store.dispatch

## Ice Cream Feature

* Fist start with slice -> create iceCreamSlice.js in the folder features
    - require the function createSlice
    - set the initial state
    - put createSlice in a const -> createSlice receive as parameter an objcet with:
        * name
        * initialState
        * reducers
    - module.exports = iceCreamSlice.reducer
    - module.exports.iceCreamActions = iceCreamSlice.actions

* Second in the store import iceCreamSlice
    - add the iceCreamSlice in the reducer
    - iceCream: iceCreamSlice
    - we don't need to use combine reducers

* Third at index.js
    - import iceCreamActions
    - dispacth iceCreamActions (ordered and restocked)

 ### Logger Middleware

 The middleware we will apply is the same logger middleware we had used when working with plane redux and this is because it serves two purposes:
 * 1: we will leanr how to extend redux toolkit funcionality using middleware
 * 2: the logger middleware will give insight into the actions dispatched that we neede to see and understand what redux toolkit does under the herd
 * npm i redux-logger
    - firt create a logger for the application in store.js
    - to apply this logger middleware we especify the middleware property after reducer

 * in index.js remove console.log and in the subscribe method
    - when run node index, well see the actions tyoe in green, the redux-toolkit take care of this, the name of the type comes from the slices key name

##  Extra Reducers

* Now we're going to learn about the concept of extra reducers in redux toolkit, before in redux was used a combiner reducers and when we dispatch an action both the reducers receive that action, one of them acts on that action, whereas the other just ignores it. 

* But a reducer can respond to any action dispatched in the application, iceCreamReducer update just the number of ice creams but it can still respond to the cake order action type. 

* with redux toolkit that does not happen, the slice will only respond to the action types generated by the same slice, if you want a slice to respond to other action types besides it has generated will need to use extra reducers.
Extra reducers generates additional reducers apart from the reducer generated by create slice

* the idea is
    - when a client order an cake an ice cream is given for free, so we need to decrement the number of ice creams when a cake is ordered


## Async Thunks

Now we're going to learn how to work with asynchronous actions using redux-toolkit, to start we create a new feature folder called user and within the folder new fille called slice

* Redux toolkit provides a create async thunk function to implement the creation and dispatching of async actions, we invoke outside the slice -> const fetchUsers = createAsyncThunk:

    - createAsyncThunk -> the function accepts two parameters, 
        * the first argument is the action type name we specify as 'user/fetchUsers';
        * the second argument is a callback function that creates the payload -> () => {}
        * the function will automatically dispatch lifecycle actions based on the returned promise (fetchUsers generates pending, fulfilled and rejected action types)
    - we need axios npm i axios -> import axios

