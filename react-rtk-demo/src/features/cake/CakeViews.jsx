import React from "react";
import { useSelector } from "react-redux";

export const CakeView = () => {

    //const numbOfCakes = useSelector((state) => state.cake.numOfCakes)

    return (
        <div>
            <h2>Number of cakes -</h2>
            <button>Order cake</button>
            <button>Restock cakes</button>
        </div>
    )
}