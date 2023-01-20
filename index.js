// An action is an object with a type property 
const CAKE_ORDERED = 'CAKE_ORDERED';

// Action create - is a function that returns an object

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
        
    }
}

