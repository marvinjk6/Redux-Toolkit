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
 