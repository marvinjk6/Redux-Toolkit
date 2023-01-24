import React from "react";
// import useSelector from react-redux
import { useSelector } from "react-redux";

export const CakeView = () => {

    // this hooks accpets a function as its parameter, this function is called selector function
    // receives the redux state as its argument
    // the store contains multiples reducers, the key cake represents cakeReducer one of them
    // useSelector hooks returns whatever is returned by the selector function
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button>Order cake</button>
            <button>Restock cakes</button>
        </div>
    )
}