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