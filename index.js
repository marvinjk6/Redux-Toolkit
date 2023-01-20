// An action is an object with a type property 
const CAKE_ORDERED = 'CAKE_ORDERED';

// Action create - is a function that returns an object

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
        
    }
}

// Reducers: (previousState, action) => newState
// we need 2 arguments to a reduce:
// 1º the state of the application before making any change
// 2º the action
// the state object might contain more than one property, in that case to handle with this cenario is more safe to create a copy of the state object ...state, with spread operator to not change others properties

const initialState = {
    numOfCakes: 10,
    anotherProperty: 0
}

const reduce = (state = initialState, action) => {

    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }

}


