import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { ordered, restocked} from "../cake/cakeSlice"


export const CakeView = () => {

    // this hooks accpets a function as its parameter, this function is called selector function
    // receives the redux state as its argument
    // the store contains multiples reducers, the key cake represents cakeReducer one of them
    // useSelector hooks returns whatever is returned by the selector function
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)

    // this hooks returns a reference to the dispacth function from the redux store, save the reference in a constant called dispatch
    const dispatch = useDispatch()


    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order cake</button>
            <button onClick={()=>dispatch(restocked())}>Restock cakes</button>
        </div>
    )
}